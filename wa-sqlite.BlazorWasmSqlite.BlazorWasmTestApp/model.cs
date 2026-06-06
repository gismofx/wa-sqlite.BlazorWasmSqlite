using Dapper.Contrib.Extensions;

namespace wa_sqlite.BlazorWasmSqlite.BlazorWasmTestApp;

public class ContactModel
{
    [ExplicitKey]
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public long EpochTimeSeconds { get; set; }
}
