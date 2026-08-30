using Microsoft.Playwright;

namespace wa_sqlite.BlazorWasmSqlite.E2ETests;

/// <summary>One host process and one browser for the whole collection.</summary>
public sealed class BrowserFixture : IAsyncLifetime
{
    private IPlaywright? _playwright;

    public WasmHost Host { get; private set; } = null!;
    public IBrowser Browser { get; private set; } = null!;

    public async Task InitializeAsync()
    {
        Host = new WasmHost();

        Microsoft.Playwright.Program.Main(new[] { "install", "chromium" });
        _playwright = await Playwright.CreateAsync();
        Browser = await _playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = true,
            // JSPI is load-bearing for fidelity, not a performance knob. The worker picks its
            // build from `typeof WebAssembly.Suspending`: without JSPI it silently falls back to
            // the Asyncify bundle, which is a DIFFERENT file with different suspension
            // behaviour. Real browsers here run the JSPI build, so a harness that quietly ran
            // Asyncify would be testing code no user executes — and would report green on a bug
            // that only the JSPI path has. The console line "JSPI not supported in this browser"
            // is the tell; JspiTests asserts it is absent so this cannot regress silently.
            Args = ["--enable-features=WebAssemblyExperimentalJSPI"],
        });
    }

    public async Task DisposeAsync()
    {
        if (Browser is not null) await Browser.CloseAsync();
        _playwright?.Dispose();
        Host?.Dispose();
    }
}

[CollectionDefinition(nameof(BrowserCollection))]
public sealed class BrowserCollection : ICollectionFixture<BrowserFixture>;
