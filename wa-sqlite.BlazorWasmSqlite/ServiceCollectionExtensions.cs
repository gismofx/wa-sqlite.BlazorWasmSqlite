using Microsoft.Extensions.DependencyInjection;

namespace wa_sqlite.BlazorWasmSqlite
{
    /// <summary>Extension methods for registering wa-sqlite services.</summary>
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Registers wa-sqlite services. Call once in <c>Program.cs</c>.
        /// Registers Dapper type handlers for <c>bool</c>, <c>DateTime</c>,
        /// <c>DateTimeOffset</c>, and their nullable counterparts so they
        /// round-trip correctly through the SQLite Worker.
        /// </summary>
        public static IServiceCollection AddSqliteWasmInterop(this IServiceCollection services)
        {
            SqliteWasmDapperTypeHandlers.Register();
            return services;
        }
    }
}
