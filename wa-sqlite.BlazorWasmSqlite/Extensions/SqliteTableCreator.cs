using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using wa_sqlite.BlazorWasmSqlite.Attributes;

namespace wa_sqlite.BlazorWasmSqlite.Extensions
{
    /// <summary>
    /// Generates SQLite DDL (CREATE TABLE, CREATE INDEX) from C# model classes.
    /// </summary>
    /// <remarks>
    /// Column definitions are driven by <see cref="SqliteColumnAttribute"/>. When the attribute
    /// is absent, sensible defaults are inferred from the C# property type:
    /// <list type="bullet">
    ///   <item><description>SQLite type is mapped from the C# type (see <see cref="GetSqliteColumnFromType"/>).</description></item>
    ///   <item><description>Nullability: value types → <c>NOT NULL</c>; reference types and <c>Nullable&lt;T&gt;</c> → nullable.</description></item>
    ///   <item><description>DEFAULT: inferred for <c>NOT NULL</c> columns (see <see cref="InferDefaultValue"/>).</description></item>
    /// </list>
    /// Properties decorated with <see cref="SqliteColumnIgnoreAttribute"/> are excluded entirely.
    /// </remarks>
    public class SqliteTableCreator
    {
        public TableCreatorOptions Options { get; init; }

        public SqliteTableCreator(TableCreatorOptions options = null)
        {
            Options = options ?? new TableCreatorOptions();
        }

        /// <summary>
        /// Generates the DDL statements required to create a SQLite table for <paramref name="type"/>.
        /// </summary>
        /// <param name="type">The entity type to generate DDL for.</param>
        /// <returns>
        /// A list where the first element is the <c>CREATE TABLE</c> statement and any subsequent
        /// elements are <c>CREATE INDEX</c> statements for indexed columns.
        /// </returns>
        public static List<string> GenerateSqliteCreateTable(Type type)
        {
            var tableName = SqliteWasmExtensions.GetTableName(type);
            var props = SqliteWasmExtensions.GetAllColumns(type);

            var columnDefs = props.Select(ColumnCreate).ToList();
            var ddl = $"CREATE TABLE {tableName} ({string.Join(",", columnDefs)});";

            var result = new List<string> { ddl };
            result.AddRange(GenerateColumnIndexes(props, tableName));
            return result;
        }

        /// <summary>
        /// Generates the DDL statements required to create a SQLite table for <typeparamref name="T"/>.
        /// </summary>
        /// <typeparam name="T">The entity type to generate DDL for.</typeparam>
        /// <returns>
        /// A list where the first element is the <c>CREATE TABLE</c> statement and any subsequent
        /// elements are <c>CREATE INDEX</c> statements for indexed columns.
        /// </returns>
        public static List<string> GenerateSqliteCreateTable<T>() => GenerateSqliteCreateTable(typeof(T));

        /// <summary>
        /// Builds a column definition fragment suitable for use in <c>ALTER TABLE ADD COLUMN</c>.
        /// Unlike <see cref="ColumnCreate"/>, this omits <c>PRIMARY KEY</c> and <c>UNIQUE</c>
        /// clauses because SQLite's ALTER TABLE ADD COLUMN does not support them.
        /// <c>COLLATE NOCASE</c> is included for TEXT columns that do not opt into case-sensitive
        /// comparison — SQLite supports collation on added columns.
        /// </summary>
        public static string BuildAlterColumnDefinition(PropertyInfo prop)
        {
            var att = GetSqliteColumnAttributeOrDefault(prop);

            var collate = att.ColumnType == SqliteType.Text && !att.CaseSensitive ? "COLLATE NOCASE" : string.Empty;
            var notNull = att.Nullability == SqliteNullability.NotNull ? "NOT NULL" : string.Empty;

            var defaultClause = string.Empty;
            if (att.Nullability == SqliteNullability.NotNull)
            {
                var defaultVal = att.DefaultValue ?? InferDefaultValue(prop.PropertyType);
                if (defaultVal != null) defaultClause = $"DEFAULT {defaultVal}";
            }

            var parts = new[] { prop.Name, att.ColumnType, collate, notNull, defaultClause }
                .Where(p => !string.IsNullOrEmpty(p));
            return string.Join(" ", parts);
        }

        /// <summary>
        /// Builds a single column definition fragment for use in CREATE TABLE or ALTER TABLE DDL.
        /// </summary>
        private static string ColumnCreate(PropertyInfo prop)
        {
            var att = GetSqliteColumnAttributeOrDefault(prop);

            var pk = prop.Name.Equals("Id", StringComparison.OrdinalIgnoreCase) ? "PRIMARY KEY" : string.Empty;
            var collate = att.ColumnType == SqliteType.Text && !att.CaseSensitive ? "COLLATE NOCASE" : string.Empty;

            // PRIMARY KEY implies NOT NULL and UNIQUE, and creates its own index — suppress redundant clauses
            var isPk = !string.IsNullOrEmpty(pk);
            var notNull = !isPk && att.Nullability == SqliteNullability.NotNull ? "NOT NULL" : string.Empty;
            var unique = att.Unique ? "UNIQUE" : string.Empty;

            var defaultClause = string.Empty;
            if (!isPk && att.Nullability == SqliteNullability.NotNull)
            {
                var defaultVal = att.DefaultValue ?? InferDefaultValue(prop.PropertyType);
                if (defaultVal != null) defaultClause = $"DEFAULT {defaultVal}";
            }

            // Build fragment, collapsing multiple spaces from empty tokens
            var parts = new[] { prop.Name, att.ColumnType, collate, pk, unique, notNull, defaultClause }
                .Where(p => !string.IsNullOrEmpty(p));
            return string.Join(" ", parts);
        }

        /// <summary>
        /// Resolves the <see cref="SqliteColumnAttribute"/> for a property, filling in inferred
        /// values for any settings not explicitly provided.
        /// </summary>
        private static SqliteColumnAttribute GetSqliteColumnAttributeOrDefault(PropertyInfo prop)
        {
            var att = prop.GetCustomAttribute<SqliteColumnAttribute>()
                      ?? new SqliteColumnAttribute(sqliteColumnType: GetSqliteColumnFromType(prop.PropertyType));

            if (string.IsNullOrWhiteSpace(att.ColumnType))
                att.ColumnType = GetSqliteColumnFromType(prop.PropertyType);

            // Resolve Infer → Nullable or NotNull based on C# type
            if (att.Nullability == SqliteNullability.Infer)
                att.Nullability = IsNullableType(prop.PropertyType)
                    ? SqliteNullability.Nullable
                    : SqliteNullability.NotNull;

            return att;
        }

        private static List<string> GenerateColumnIndexes(IEnumerable<PropertyInfo> props, string tableName)
        {
            return props
                .Select(p => (prop: p, att: p.GetCustomAttribute<SqliteColumnAttribute>()))
                .Where(x => x.att?.Index == true)
                .Select(x =>
                {
                    var unique = x.att.Unique ? "UNIQUE " : string.Empty;
                    return $"CREATE {unique}INDEX IF NOT EXISTS ind_{x.prop.Name}_{tableName} ON {tableName} ({x.prop.Name})";
                })
                .ToList();
        }

        /// <summary>
        /// Returns <c>true</c> when <paramref name="type"/> can hold a <c>null</c> value —
        /// i.e. it is a reference type or a <c>Nullable&lt;T&gt;</c> value type.
        /// </summary>
        private static bool IsNullableType(Type type) =>
            !type.IsValueType || Nullable.GetUnderlyingType(type) != null;

        /// <summary>
        /// Maps a C# <see cref="Type"/> to its canonical SQLite storage type affinity.
        /// <c>Nullable&lt;T&gt;</c> is unwrapped before mapping so <c>int?</c> maps the same as <c>int</c>.
        /// </summary>
        /// <param name="type">The C# property type to map.</param>
        /// <returns>
        /// A SQLite type affinity string (see <see cref="SqliteType"/> constants).
        /// Unknown types fall back to <c>"TEXT"</c> so they are stored as their string representation.
        /// </returns>
        public static string GetSqliteColumnFromType(Type type)
        {
            // Unwrap Nullable<T> — int? and int both map to INTEGER, etc.
            var t = Nullable.GetUnderlyingType(type) ?? type;

            if (t == typeof(string))  return SqliteType.Text;
            if (t == typeof(Guid))    return SqliteType.Text;

            // Booleans are stored as INTEGER (0/1). SQLite has no native boolean type;
            // BOOLEAN is accepted but resolves to NUMERIC affinity — INTEGER is more explicit.
            if (t == typeof(bool))    return SqliteType.Integer;

            if (t == typeof(int)    ||
                t == typeof(uint)   ||
                t == typeof(long)   ||
                t == typeof(ulong)  ||
                t == typeof(short)  ||
                t == typeof(ushort) ||
                t == typeof(byte)   ||
                t == typeof(sbyte))    return SqliteType.Integer;

            // Int128 / UInt128 — available in .NET 7+
            if (t.Name == nameof(Int128) || t.Name == nameof(UInt128))
                return SqliteType.Integer;

            // REAL is SQLite's canonical floating-point affinity (8-byte IEEE 754).
            // DOUBLE and FLOAT are accepted but resolve to REAL affinity anyway.
            if (t == typeof(double) || t == typeof(float))
                return SqliteType.Real;

            // NUMERIC affinity for decimal (arbitrary precision).
            if (t == typeof(decimal)) return SqliteType.Numeric;

            // DateTime and DateTimeOffset are stored as ISO 8601 TEXT strings
            // (e.g. "2026-04-12T10:30:00Z"). TEXT is the correct affinity — NUMERIC
            // would coerce the string to a number, which fails for ISO 8601 values.
            // If you need Unix epoch storage, use a dedicated long/int property instead.
            if (t == typeof(DateTime) || t == typeof(DateTimeOffset))
                return SqliteType.Text;

            // Unknown type — fall back to TEXT so the property can be stored as its
            // string representation. Add an explicit [SqliteColumn] to override.
            return SqliteType.Text;
        }

        /// <summary>
        /// Infers a safe SQL <c>DEFAULT</c> literal for a C# property type when none is
        /// explicitly provided via <see cref="SqliteColumnAttribute.DefaultValue"/>.
        /// </summary>
        /// <param name="type">The C# property type.</param>
        /// <returns>
        /// A SQL literal string (e.g. <c>"0"</c>, <c>"''"</c>), or <c>null</c> when the
        /// type is nullable and no default is required.
        /// </returns>
        public static string? InferDefaultValue(Type type)
        {
            // Nullable<T> and reference types don't need a DEFAULT
            if (Nullable.GetUnderlyingType(type) != null) return null;
            if (!type.IsValueType) return null;

            var t = type;
            if (t == typeof(bool)   || t == typeof(int)    || t == typeof(uint)  ||
                t == typeof(long)   || t == typeof(ulong)  || t == typeof(short) ||
                t == typeof(ushort) || t == typeof(byte)   || t == typeof(sbyte) ||
                t == typeof(double) || t == typeof(float)  || t == typeof(decimal))
                return "0";

            if (t.Name == nameof(Int128) || t.Name == nameof(UInt128))
                return "0";

            // Guid, DateTime, DateTimeOffset stored as TEXT — empty string is a safe baseline
            if (t == typeof(Guid) || t == typeof(DateTime) || t == typeof(DateTimeOffset))
                return "''";

            return null;
        }
    }
}
