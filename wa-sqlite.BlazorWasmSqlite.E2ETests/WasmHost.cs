using System.Diagnostics;
using System.Net.Sockets;

namespace wa_sqlite.BlazorWasmSqlite.E2ETests;

/// <summary>
/// Serves the Blazor WASM test app for the duration of a test run.
/// </summary>
/// <remarks>
/// Runs with <c>--no-build</c> on purpose. This project has no project reference, so
/// <c>dotnet test</c> cannot rebuild the app or the library; building the app is a deliberate,
/// separate step. That keeps two things true: a test-only edit never regenerates the committed
/// JS bundles as a side effect, and a run always exercises the build you think it does.
/// If the app has not been built, startup fails here with a message saying so rather than
/// twenty tests failing for an unrelated-looking reason.
/// </remarks>
public sealed class WasmHost : IDisposable
{
    private readonly Process _process;

    public string BaseUrl { get; }

    public WasmHost(int port = 5177)
    {
        BaseUrl = $"http://localhost:{port}";

        var repoRoot = FindRepoRoot();
        var appProject = Path.Combine(
            repoRoot,
            "wa-sqlite.BlazorWasmSqlite.BlazorWasmTestApp",
            "wa-sqlite.BlazorWasmSqlite.BlazorWasmTestApp.csproj");

        if (!File.Exists(appProject))
            throw new InvalidOperationException($"Test app project not found at {appProject}.");

        var psi = new ProcessStartInfo("dotnet")
        {
            Arguments = $"run --project \"{appProject}\" --no-build --urls {BaseUrl}",
            WorkingDirectory = repoRoot,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
        };

        _process = Process.Start(psi)
            ?? throw new InvalidOperationException("Could not start the test app host.");

        // Drain the pipes so a chatty host cannot deadlock on a full buffer.
        _process.OutputDataReceived += (_, _) => { };
        _process.ErrorDataReceived += (_, _) => { };
        _process.BeginOutputReadLine();
        _process.BeginErrorReadLine();

        WaitForPort(port, TimeSpan.FromSeconds(90));
    }

    private static void WaitForPort(int port, TimeSpan timeout)
    {
        var deadline = DateTime.UtcNow + timeout;
        while (DateTime.UtcNow < deadline)
        {
            try
            {
                using var client = new TcpClient();
                client.Connect("localhost", port);
                return;
            }
            catch (SocketException)
            {
                Thread.Sleep(250);
            }
        }

        throw new TimeoutException(
            $"The test app did not start listening on port {port} within {timeout.TotalSeconds:0}s. " +
            "This project runs the app with --no-build: build " +
            "wa-sqlite.BlazorWasmSqlite.BlazorWasmTestApp first " +
            "(dotnet build ... -p:SkipNpmBuild=true).");
    }

    private static string FindRepoRoot()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);
        while (dir is not null && !File.Exists(Path.Combine(dir.FullName, "wa-sqlite.BlazorWasmSqlite.sln")))
            dir = dir.Parent;

        return dir?.FullName
            ?? throw new InvalidOperationException("Could not locate wa-sqlite.BlazorWasmSqlite.sln above the test binaries.");
    }

    public void Dispose()
    {
        try
        {
            if (!_process.HasExited) _process.Kill(entireProcessTree: true);
        }
        catch
        {
            // Best effort: a host that has already gone is not a test failure.
        }
        _process.Dispose();
    }
}
