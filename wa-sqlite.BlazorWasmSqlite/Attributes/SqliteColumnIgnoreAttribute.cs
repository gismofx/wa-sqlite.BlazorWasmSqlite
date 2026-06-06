namespace wa_sqlite.BlazorWasmSqlite.Attributes
{
    /// <summary>
    /// Excludes a property from all SQLite operations: table creation, INSERT, and UPDATE.
    /// Use for properties managed externally (e.g., server-side sync infrastructure)
    /// that should not be persisted in the local SQLite database.
    /// </summary>
    [AttributeUsage(AttributeTargets.Property, Inherited = false, AllowMultiple = false)]
    public sealed class SqliteColumnIgnoreAttribute : Attribute { }
}
