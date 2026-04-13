using Microsoft.Extensions.DependencyInjection;

namespace wa_sqlite.BlazorWasmSqlite
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddSqliteWasmInterop(this IServiceCollection services)
        {
            SqliteWasmDapperTypeHandlers.Register();
            services.AddSingleton<SqliteWasmInterop>();
            return services;
        }
    }
}
