using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Attributes;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class TableAttribute : Attribute
{
    public string TableName { get; set; }

    public TableAttribute(string tableName)
    {
        TableName = tableName;
    }
}
