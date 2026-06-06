using System;

namespace wa_sqlite.BlazorWasmSqlite.Attributes;

/// <summary>
/// Overrides the SQLite table name for a model class.
/// When absent, <see cref="Extensions.SqliteWasmExtensions.GetTableName(Type)"/>
/// falls back to <c>TypeName + "s"</c>.
/// </summary>
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class TableAttribute : Attribute
{
    /// <summary>The SQLite table name.</summary>
    public string TableName { get; set; }

    /// <summary>Initialises the attribute with the given table name.</summary>
    /// <param name="tableName">The SQLite table name to use for this class.</param>
    public TableAttribute(string tableName)
    {
        TableName = tableName;
    }
}
