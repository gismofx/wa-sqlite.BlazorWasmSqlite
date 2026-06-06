using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Attributes
{
    /// <summary>
    /// Marks a property as a client-assigned primary key (not auto-generated).
    /// Unlike <c>[Key]</c>, Dapper includes this property in INSERT statements.
    /// Use for GUID or other client-assigned key values.
    /// </summary>
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class ExplicitKeyAttribute : Attribute
    {
    }
}
