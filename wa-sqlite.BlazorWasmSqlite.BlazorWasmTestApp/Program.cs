using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;

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
            builder.Services.AddSingleton<SqliteWasmInterop>();
            builder.Services.AddSingleton<SqliteWasmConnection>();

            builder.Services.AddMudServices();


            await builder.Build().RunAsync();
        }
    }
}
