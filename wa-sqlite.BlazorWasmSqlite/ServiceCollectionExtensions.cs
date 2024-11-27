using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddSqliteWasmInterop(this IServiceCollection services)
        {
            services.AddSingleton<SqliteWasmInterop>();
            return services;
        }
    }
}
