using System;

namespace wa_sqlite.BlazorWasmSqlite.Attributes
{
    /// <summary>
    /// Controls whether a SQLite column allows NULL values.
    /// </summary>
    public enum SqliteNullability
    {
        /// <summary>
        /// Infer nullability from the C# property type (default).
        /// Value types (<c>bool</c>, <c>int</c>, <c>Guid</c>, etc.) become <c>NOT NULL</c>.
        /// Reference types and <c>Nullable&lt;T&gt;</c> become nullable.
        /// </summary>
        Infer = 0,

        /// <summary>Forces the column to allow NULL regardless of the C# type.</summary>
        Nullable = 1,

        /// <summary>Forces <c>NOT NULL</c> on the column regardless of the C# type.</summary>
        NotNull = 2,
    }
    /// <summary>
    /// Configures how a property maps to a SQLite column during table creation and data operations.
    /// </summary>
    /// <remarks>
    /// When this attribute is absent, <see cref="SqliteTableCreator"/> infers sensible defaults:
    /// <list type="bullet">
    ///   <item><description>Column type is derived from the C# property type (see <see cref="SqliteTableCreator.GetSqliteColumnFromType"/>).</description></item>
    ///   <item><description>Nullability is inferred: value types are <c>NOT NULL</c>; reference types and <c>Nullable&lt;T&gt;</c> are nullable.</description></item>
    ///   <item><description>A safe <c>DEFAULT</c> value is inferred for <c>NOT NULL</c> columns (see <see cref="SqliteTableCreator.InferDefaultValue"/>).</description></item>
    /// </list>
    /// Apply this attribute when you need to override any of these defaults.
    /// </remarks>
    [AttributeUsage(AttributeTargets.Property, Inherited = false, AllowMultiple = false)]
    public class SqliteColumnAttribute : Attribute
    {
        /// <summary>
        /// The SQLite column type (e.g. <c>"TEXT"</c>, <c>"INTEGER"</c>, <c>"NUMERIC"</c>, <c>"REAL"</c>).
        /// When empty or null, the type is inferred from the C# property type.
        /// Use <see cref="SqliteType"/> constants for type-safe values.
        /// </summary>
        public string ColumnType { get; set; }

        /// <summary>
        /// Controls whether the column allows <c>NULL</c> values.
        /// Defaults to <see cref="SqliteNullability.Infer"/>, which derives nullability from the C# property type.
        /// </summary>
        public SqliteNullability Nullability { get; set; }

        /// <summary>
        /// When <c>true</c>, adds a <c>UNIQUE</c> constraint to the column definition.
        /// </summary>
        public bool Unique { get; set; }

        /// <summary>
        /// When <c>true</c>, TEXT columns use case-sensitive collation instead of the table-level default.
        /// Has no effect on non-TEXT columns.
        /// </summary>
        public bool CaseSensitive { get; set; }

        /// <summary>
        /// When <c>true</c>, generates a <c>CREATE INDEX IF NOT EXISTS</c> statement for this column.
        /// </summary>
        public bool Index { get; set; }

        /// <summary>
        /// The SQL literal to use as the column <c>DEFAULT</c> value (e.g. <c>"0"</c>, <c>"''"</c>, <c>"'Migration'"</c>).
        /// </summary>
        /// <remarks>
        /// When null, a safe default is inferred from the C# property type for <c>NOT NULL</c> columns.
        /// This is required by SQLite's <c>ALTER TABLE ADD COLUMN</c> when the column is <c>NOT NULL</c>
        /// and the table already contains rows — SQLite must be able to backfill existing rows.
        /// Explicitly set this when the inferred default is not appropriate (e.g. <c>"'Migration'"</c>
        /// for a <c>ModifiedByUserId</c> column added during a schema migration).
        /// </remarks>
        public string? DefaultValue { get; set; }

        /// <summary>
        /// Configures SQLite column generation for this property.
        /// </summary>
        /// <param name="sqliteColumnType">
        /// SQLite column type. Use <see cref="SqliteType"/> constants. When empty, inferred from the C# type.
        /// </param>
        /// <param name="nullability">
        /// Nullability override. <see cref="SqliteNullability.Infer"/> (default) derives from C# type.
        /// Use <see cref="SqliteNullability.NotNull"/> or <see cref="SqliteNullability.Nullable"/> to force.
        /// </param>
        /// <param name="unique">Adds a UNIQUE constraint when <c>true</c>.</param>
        /// <param name="caseSensitive">Forces case-sensitive TEXT collation when <c>true</c>.</param>
        /// <param name="index">Generates a CREATE INDEX statement when <c>true</c>.</param>
        /// <param name="defaultValue">
        /// SQL DEFAULT literal (e.g. <c>"0"</c>, <c>"''"</c>). Inferred from type when null.
        /// </param>
        public SqliteColumnAttribute(
            string sqliteColumnType = "",
            SqliteNullability nullability = SqliteNullability.Infer,
            bool unique = false,
            bool caseSensitive = false,
            bool index = false,
            string? defaultValue = null)
        {
            ColumnType = sqliteColumnType;
            Nullability = nullability;
            Unique = unique;
            CaseSensitive = caseSensitive;
            Index = index;
            DefaultValue = defaultValue;
        }
    }

    /// <summary>
    /// SQLite storage type affinity constants for use with <see cref="SqliteColumnAttribute"/>.
    /// </summary>
    /// <remarks>
    /// SQLite uses type affinity rather than strict typing. These are the five canonical affinities.
    /// See https://www.sqlite.org/datatype3.html for full rules.
    /// </remarks>
    public sealed class SqliteType
    {
        /// <summary>Text affinity — stored as a UTF-8/UTF-16 string.</summary>
        public const string Text = "TEXT";

        /// <summary>Numeric affinity — stores integers or reals, choosing the most compact representation.</summary>
        public const string Numeric = "NUMERIC";

        /// <summary>Integer affinity — stored as a signed integer (1, 2, 3, 4, 6, or 8 bytes). Use for booleans (0/1) and integer IDs.</summary>
        public const string Integer = "INTEGER";

        /// <summary>Real affinity — stored as an 8-byte IEEE floating-point number.</summary>
        public const string Real = "REAL";

        /// <summary>Blob affinity — stored exactly as provided, no type conversion applied.</summary>
        public const string Blob = "BLOB";
    }
}
