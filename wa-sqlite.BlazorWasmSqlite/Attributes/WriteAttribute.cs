using System;

namespace wa_sqlite.BlazorWasmSqlite.Attributes;

/// <summary>
/// Controls whether a property is included in INSERT and UPDATE statements.
/// Apply <c>[Write(false)]</c> to exclude computed or server-generated columns.
/// </summary>
[AttributeUsage(AttributeTargets.Property, Inherited = false, AllowMultiple = false)]
public class WriteAttribute : Attribute
{
    /// <summary><c>true</c> to include the column in writes; <c>false</c> to exclude it.</summary>
    public bool Write { get; set; }

    /// <summary>Initialises the attribute.</summary>
    /// <param name="write"><c>true</c> to include the column; <c>false</c> to exclude it.</param>
    public WriteAttribute(bool write)
    {
        Write = write;
    }
}
