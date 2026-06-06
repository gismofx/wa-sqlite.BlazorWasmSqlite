using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;
using wa_sqlite.BlazorWasmSqlite;
using wa_sqlite.BlazorWasmSqlite.DBConnection;

namespace wa_sqlite.BlazorWasmSqlite.BlazorWasmTestApp
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");
            builder.RootComponents.Add<HeadOutlet>("head::after");

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

            


            builder.Services.AddSingleton(x => new SqliteWasmConnectionStringBuilder() { DatabaseName = "MyApp", Filename = "MyFile" });
            builder.Services.AddSqliteWasmInterop();


            builder.Services.AddMudServices();

            var host = builder.Build();

            // Initialize [JSImport] module (loads sqlite-interop.js ES module)
            await SqliteJsInterop.InitializeAsync();

            await host.RunAsync();
        }
    }
}
