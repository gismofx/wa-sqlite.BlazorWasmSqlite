using System;
using System.Data;
using FluentAssertions;
using wa_sqlite.BlazorWasmSqlite.DBConnection;
using Xunit;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// Direct unit tests for <see cref="SqliteWasmCommand.Coerce"/>.
///
/// Coerce() is the actual production serialization path for query parameters in wa-sqlite.
/// When Dapper binds parameters, it sets raw CLR values on SqliteWasmParameter.Value.
/// Coerce() then converts those values to JSON-serializable form for the JS worker.
///
/// Dapper's type handler SetValue is bypassed for built-in CLR types (DateTime, bool)
/// because SqliteWasmParameter has no native type coercion of its own. This means:
///   - SetValue format  → what Dapper writes when STORING values
///   - Coerce() format  → what the worker receives for QUERY PARAMETERS
///
/// Both must produce identical DateTime strings for range queries to work correctly.
/// These tests prove that invariant holds.
/// </summary>
public class CoerceTests
{
    // ── Null / DBNull ─────────────────────────────────────────────────────────

    [Fact]
    public void Coerce_Null_ReturnsNull()
        => SqliteWasmCommand.Coerce(null).Should().BeNull();

    [Fact]
    public void Coerce_DbNull_ReturnsNull()
        => SqliteWasmCommand.Coerce(DBNull.Value).Should().BeNull();

    // ── Bool ──────────────────────────────────────────────────────────────────

    [Fact]
    public void Coerce_BoolTrue_Returns1()
        => SqliteWasmCommand.Coerce(true).Should().Be(1);

    [Fact]
    public void Coerce_BoolFalse_Returns0()
        => SqliteWasmCommand.Coerce(false).Should().Be(0);

    // ── DateTime — the critical group ─────────────────────────────────────────

    [Fact]
    public void Coerce_DateTime_UtcKind_ReturnsSFormatString()
    {
        var dt = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Utc);
        SqliteWasmCommand.Coerce(dt).Should().Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void Coerce_DateTime_LocalKind_ReturnsSFormatString()
    {
        // Kind-agnostic: wall-clock value, no UTC conversion, no timezone suffix
        var dt = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Local);
        SqliteWasmCommand.Coerce(dt).Should().Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void Coerce_DateTime_UnspecifiedKind_ReturnsSFormatString()
    {
        var dt = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Unspecified);
        SqliteWasmCommand.Coerce(dt).Should().Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void Coerce_DateTime_AllThreeKinds_SameWallClock_ProduceByteIdenticalStrings()
    {
        var utc        = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Utc);
        var local      = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Local);
        var unspecified = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Unspecified);

        var s1 = (string)SqliteWasmCommand.Coerce(utc)!;
        var s2 = (string)SqliteWasmCommand.Coerce(local)!;
        var s3 = (string)SqliteWasmCommand.Coerce(unspecified)!;

        s1.Should().Be(s2).And.Be(s3).And.Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void Coerce_DateTime_MatchesSetValueFormat()
    {
        // THE KEY INVARIANT: Coerce() and SetValue both use ToString("s").
        // Stored values (written via SetValue) and query parameters (serialized via Coerce)
        // produce byte-identical strings — range queries are safe.
        var dt = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Utc);

        var fromCoerce   = (string)SqliteWasmCommand.Coerce(dt)!;
        var fromSetValue = dt.ToString("s"); // what DateTimeHandler.SetValue writes

        fromCoerce.Should().Be(fromSetValue);
    }

    [Fact]
    public void Coerce_DateTime_NoTSeparator_WouldBreakRangeQueries()
    {
        // Documents why "O" format was wrong: "O" produces 7 fractional digits and a Z suffix.
        // At the T vs Z boundary, ASCII 'Z' (90) > ASCII '0' (48), so "O" formatted parameters
        // compare incorrectly against stored values. "s" avoids this entirely.
        var dt = new DateTime(2024, 6, 15, 10, 30, 0, DateTimeKind.Utc);
        var sFormat = dt.ToString("s"); // "2024-06-15T10:30:00"
        var oFormat = dt.ToString("O"); // "2024-06-15T10:30:00.0000000Z"

        sFormat.Should().NotBe(oFormat); // confirm they differ
        sFormat.Should().Be("2024-06-15T10:30:00");
        oFormat.Should().StartWith("2024-06-15T10:30:00."); // fractional seconds + Z
    }

    // ── Passthrough types ─────────────────────────────────────────────────────

    [Fact]
    public void Coerce_String_PassesThrough()
        => SqliteWasmCommand.Coerce("hello").Should().Be("hello");

    [Fact]
    public void Coerce_Int_PassesThrough()
        => SqliteWasmCommand.Coerce(42).Should().Be(42);

    [Fact]
    public void Coerce_Long_PassesThrough()
        => SqliteWasmCommand.Coerce(1718447400L).Should().Be(1718447400L);

    [Fact]
    public void Coerce_Double_PassesThrough()
        => SqliteWasmCommand.Coerce(3.14).Should().Be(3.14);

    [Fact]
    public void Coerce_Decimal_PassesThrough()
        => SqliteWasmCommand.Coerce(9.99m).Should().Be(9.99m);

    // ── DateTimeOffset ────────────────────────────────────────────────────────

    [Fact]
    public void Coerce_DateTimeOffset_PositiveOffset_ReturnsUtcSFormatPlusZ()
    {
        var dto = new DateTimeOffset(2024, 6, 15, 15, 30, 0, TimeSpan.FromHours(5.5)); // +05:30 = 10:00 UTC
        SqliteWasmCommand.Coerce(dto).Should().Be("2024-06-15T10:00:00Z");
    }

    [Fact]
    public void Coerce_DateTimeOffset_NegativeOffset_ReturnsUtcSFormatPlusZ()
    {
        var dto = new DateTimeOffset(2024, 6, 15, 2, 0, 0, TimeSpan.FromHours(-8)); // -08:00 = 10:00 UTC
        SqliteWasmCommand.Coerce(dto).Should().Be("2024-06-15T10:00:00Z");
    }

    [Fact]
    public void Coerce_DateTimeOffset_AlreadyUtc_ReturnsSFormatPlusZ()
    {
        var dto = new DateTimeOffset(2024, 6, 15, 10, 0, 0, TimeSpan.Zero);
        SqliteWasmCommand.Coerce(dto).Should().Be("2024-06-15T10:00:00Z");
    }

    [Fact]
    public void Coerce_DateTimeOffset_SameInstantDifferentOffsets_ProduceByteIdenticalStrings()
    {
        var utc    = new DateTimeOffset(2024, 6, 15, 10, 0, 0, TimeSpan.Zero);
        var plus   = utc.ToOffset(TimeSpan.FromHours(5.5));
        var minus  = utc.ToOffset(TimeSpan.FromHours(-8));

        var s1 = (string)SqliteWasmCommand.Coerce(utc)!;
        var s2 = (string)SqliteWasmCommand.Coerce(plus)!;
        var s3 = (string)SqliteWasmCommand.Coerce(minus)!;

        s1.Should().Be(s2).And.Be(s3).And.Be("2024-06-15T10:00:00Z");
    }

    [Fact]
    public void Coerce_DateTimeOffset_MatchesSetValueFormat()
    {
        // Coerce() and SetValue both use ToUniversalTime().ToString("s") + "Z".
        // Stored values and query parameters are byte-identical.
        var dto = new DateTimeOffset(2024, 6, 15, 15, 30, 0, TimeSpan.FromHours(5.5));

        var fromCoerce   = (string)SqliteWasmCommand.Coerce(dto)!;
        var fromSetValue = dto.ToUniversalTime().ToString("s") + "Z";

        fromCoerce.Should().Be(fromSetValue);
    }
}
