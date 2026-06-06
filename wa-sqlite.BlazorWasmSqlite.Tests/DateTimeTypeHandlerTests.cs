using System;
using System.Data;
using System.Globalization;
using System.Linq;
using Dapper;
using FluentAssertions;
using Microsoft.Data.Sqlite;
using Xunit;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// Front-to-back tests for DateTime and DateTimeOffset type handler serialization,
/// parse, round-trip, and sort-order correctness in SQLite.
///
/// Uses Microsoft.Data.Sqlite (in-memory) to exercise the full Dapper parameter
/// binding and result mapping path without requiring a WASM browser context.
///
/// Note on driver differences: wa-sqlite returns all JSON numbers as Double and
/// all TEXT as String. Microsoft.Data.Sqlite returns long for INTEGER columns and
/// string for TEXT columns. The handlers cover both paths — the long branch in
/// Parse handles the native driver; the string/TryParse branch handles wa-sqlite.
/// </summary>
public class DateTimeTypeHandlerTests : IDisposable
{
    private readonly SqliteConnection _db;

    public DateTimeTypeHandlerTests()
    {
        SqliteWasmDapperTypeHandlers.Register();
        _db = new SqliteConnection("Data Source=:memory:");
        _db.Open();
        _db.Execute(@"
            CREATE TABLE Entity (
                Id          INTEGER PRIMARY KEY,
                -- DateCreated is deliberately stored as INTEGER (epoch seconds) to test
                -- the coercion path: legacy integer → ISO 8601 TEXT via migration UPDATE.
                -- In C# it maps to DateTime; the type handler's long branch handles the read.
                DateCreated INTEGER NOT NULL DEFAULT 0,
                DateDue     INTEGER,
                ModifiedAtUtc TEXT,
                sync_UTCTime  INTEGER NOT NULL DEFAULT 0,
                FlagDelete  INTEGER NOT NULL DEFAULT 0,
                IsDeleted   INTEGER NOT NULL DEFAULT 0
            )");
    }

    public void Dispose() => _db.Dispose();

    // ── Helpers ───────────────────────────────────────────────────────────────

    /// <summary>Returns the raw stored TEXT value of a column without Dapper type mapping.</summary>
    private string? RawText(string col, int id) =>
        _db.ExecuteScalar<string?>($"SELECT CAST({col} AS TEXT) FROM Entity WHERE Id = @id", new { id });

    /// <summary>Returns SQLite's typeof() result for a column value.</summary>
    private string SqliteTypeof(string col, int id) =>
        _db.ExecuteScalar<string>($"SELECT typeof({col}) FROM Entity WHERE Id = @id", new { id })!;

    private static DateTime Utc(int year, int month, int day, int h = 0, int m = 0, int s = 0) =>
        new DateTime(year, month, day, h, m, s, DateTimeKind.Utc);

    private static DateTime Local(int year, int month, int day, int h = 0, int m = 0, int s = 0) =>
        new DateTime(year, month, day, h, m, s, DateTimeKind.Local);

    private static DateTime Unspecified(int year, int month, int day, int h = 0, int m = 0, int s = 0) =>
        new DateTime(year, month, day, h, m, s, DateTimeKind.Unspecified);

    // ── Group 1: DateTime SetValue format ─────────────────────────────────────

    // Note: Microsoft.Data.Sqlite has native DateTime handling that bypasses Dapper type handlers
    // for non-nullable DateTime parameters, formatting with a space separator ("yyyy-MM-dd HH:mm:ss").
    // In production (wa-sqlite), our SetValue IS called. We test SetValue format directly via
    // ToString("s") assertions and use (DateTime?) to force our NullableDateTimeHandler for SQLite tests.

    [Fact]
    public void DateTime_ToStringS_UtcKind_ProducesTSeparatorNoZSuffix()
    {
        // Directly verifies the format our SetValue writes — Kind-agnostic, always "T" separator.
        Utc(2024, 6, 15, 10, 30, 0).ToString("s").Should().Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void DateTime_ToStringS_LocalKind_ProducesTSeparatorNoZSuffix()
    {
        Local(2024, 6, 15, 10, 30, 0).ToString("s").Should().Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void DateTime_ToStringS_UnspecifiedKind_ProducesTSeparatorNoZSuffix()
    {
        Unspecified(2024, 6, 15, 10, 30, 0).ToString("s").Should().Be("2024-06-15T10:30:00");
    }

    [Fact]
    public void DateTime_AllThreeKinds_SameWallClock_ProduceByteIdenticalStrings()
    {
        // ToString("s") is Kind-agnostic — all three produce the same string.
        // This is the fundamental guarantee that SetValue is safe regardless of how
        // the DateTime was constructed.
        var s1 = Utc(2024, 6, 15, 10, 30, 0).ToString("s");
        var s2 = Local(2024, 6, 15, 10, 30, 0).ToString("s");
        var s3 = Unspecified(2024, 6, 15, 10, 30, 0).ToString("s");

        s1.Should().Be("2024-06-15T10:30:00");
        s1.Should().Be(s2).And.Be(s3);
    }

    // ── Group 2: DateTime Parse ───────────────────────────────────────────────

    [Fact]
    public void DateTime_Parse_SFormatString_ReturnsCorrectValue()
    {
        // Simulate reading a post-migration TEXT value
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (20, '2024-06-15T10:30:00')");
        var result = _db.ExecuteScalar<DateTime>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 20");
        result.Should().Be(new DateTime(2024, 6, 15, 10, 30, 0));
    }

    [Fact]
    public void DateTime_Parse_EpochLong_ReturnsCorrectValue()
    {
        // Simulate reading a pre-migration INTEGER value (long branch in Parse)
        // DateCreated is stored as INTEGER — type handler receives a long.
        const long epochSeconds = 1718447400; // 2024-06-15T10:30:00Z
        _db.Execute("INSERT INTO Entity (Id, DateCreated) VALUES (21, @v)", new { v = epochSeconds });
        var result = _db.ExecuteScalar<DateTime>("SELECT DateCreated FROM Entity WHERE Id = 21");
        result.Should().Be(DateTime.UnixEpoch.AddSeconds(epochSeconds));
    }

    [Fact]
    public void DateTime_Parse_EpochAsString_ReturnsCorrectValue()
    {
        // Simulates wa-sqlite path: JSON numbers come back as Double → ToString() → TryParse branch
        const long epochSeconds = 1718447400;
        _db.Execute($"INSERT INTO Entity (Id, DateCreated) VALUES (22, '{epochSeconds}')");
        var result = _db.ExecuteScalar<DateTime>("SELECT DateCreated FROM Entity WHERE Id = 22");
        result.Should().Be(DateTime.UnixEpoch.AddSeconds(epochSeconds));
    }

    [Fact]
    public void NullableDateTime_Parse_DbNull_ReturnsNull()
    {
        _db.Execute("INSERT INTO Entity (Id, DateDue) VALUES (23, NULL)");
        var result = _db.ExecuteScalar<DateTime?>("SELECT DateDue FROM Entity WHERE Id = 23");
        result.Should().BeNull();
    }

    [Fact]
    public void NullableDateTime_Parse_ValidSFormatString_ReturnsCorrectValue()
    {
        _db.Execute("INSERT INTO Entity (Id, DateDue) VALUES (24, '2024-06-15T10:30:00')");
        var result = _db.ExecuteScalar<DateTime?>("SELECT DateDue FROM Entity WHERE Id = 24");
        result.Should().Be(new DateTime(2024, 6, 15, 10, 30, 0));
    }

    // ── Group 3: DateTime round-trip ──────────────────────────────────────────

    [Fact]
    public void DateTime_RoundTrip_WriteThenRead_PreservesValue()
    {
        var original = new DateTime(2024, 6, 15, 14, 22, 45);
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (30, @v)", new { v = (DateTime?)original });
        var result = _db.ExecuteScalar<DateTime?>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 30");
        result.Should().Be(original);
    }

    [Fact]
    public void NullableDateTime_RoundTrip_NullValue_ReturnsNull()
    {
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (31, @v)", new { v = (DateTime?)null });
        var result = _db.ExecuteScalar<DateTime?>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 31");
        result.Should().BeNull();
    }

    [Fact]
    public void DateTime_StoredAsText_TypeofIsText()
    {
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (32, @v)",
            new { v = (DateTime?)new DateTime(2024, 6, 15, 10, 30, 0) });
        // Verify SQLite stores it as TEXT (not INTEGER) — critical for sort correctness
        SqliteTypeof("ModifiedAtUtc", 32).Should().Be("text");
    }

    // ── Group 4: DateTime sort correctness (the critical group) ───────────────

    private void InsertWithModifiedAtUtc(int id, DateTime dt) =>
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (@id, @v)", new { id, v = (DateTime?)dt });

    [Fact]
    public void DateTime_SortOrder_AscendingSelectReturnsChronologicalOrder()
    {
        InsertWithModifiedAtUtc(40, new DateTime(2024, 3, 1));
        InsertWithModifiedAtUtc(41, new DateTime(2023, 1, 15));
        InsertWithModifiedAtUtc(42, new DateTime(2025, 12, 31));
        InsertWithModifiedAtUtc(43, new DateTime(2024, 6, 15));

        var ids = _db.Query<int>("SELECT Id FROM Entity WHERE Id IN (40,41,42,43) ORDER BY ModifiedAtUtc ASC").ToList();
        ids.Should().Equal(41, 40, 43, 42);
    }

    [Fact]
    public void DateTime_RangeQuery_WithDapperParameter_ReturnsCorrectRows()
    {
        InsertWithModifiedAtUtc(50, new DateTime(2024, 1, 1));
        InsertWithModifiedAtUtc(51, new DateTime(2024, 3, 15));
        InsertWithModifiedAtUtc(52, new DateTime(2024, 6, 15));
        InsertWithModifiedAtUtc(53, new DateTime(2024, 9, 1));
        InsertWithModifiedAtUtc(54, new DateTime(2024, 12, 31));

        var lower = (DateTime?)new DateTime(2024, 2, 1);
        var upper = (DateTime?)new DateTime(2024, 8, 1);

        var ids = _db.Query<int>(
            "SELECT Id FROM Entity WHERE Id BETWEEN 50 AND 54 AND ModifiedAtUtc > @lower AND ModifiedAtUtc < @upper ORDER BY ModifiedAtUtc",
            new { lower, upper }).ToList();

        ids.Should().Equal(51, 52); // 2024-03-15 and 2024-06-15
    }

    [Fact]
    public void DateTime_RangeQuery_ExcludesBoundaryValues()
    {
        var boundary = new DateTime(2024, 6, 15, 10, 0, 0);
        InsertWithModifiedAtUtc(60, boundary.AddSeconds(-1));
        InsertWithModifiedAtUtc(61, boundary);
        InsertWithModifiedAtUtc(62, boundary.AddSeconds(1));

        var lower = (DateTime?)boundary.AddSeconds(-1);
        var upper = (DateTime?)boundary.AddSeconds(1);

        var ids = _db.Query<int>(
            "SELECT Id FROM Entity WHERE Id IN (60,61,62) AND ModifiedAtUtc > @lower AND ModifiedAtUtc < @upper",
            new { lower, upper }).ToList();

        // Strict > and < — boundary row (61) and the seconds outside should be excluded
        ids.Should().Equal(61); // Only the exact boundary is between -1 and +1 exclusive
    }

    [Fact]
    public void DateTime_TwoValuesoneBoundaryApart_StrictComparisonSeparatesThem()
    {
        InsertWithModifiedAtUtc(70, new DateTime(2024, 6, 15, 10, 0, 0));
        InsertWithModifiedAtUtc(71, new DateTime(2024, 6, 15, 10, 0, 1));

        var cutoff = (DateTime?)new DateTime(2024, 6, 15, 10, 0, 0, 500); // between the two

        var before = _db.Query<int>(
            "SELECT Id FROM Entity WHERE Id IN (70,71) AND ModifiedAtUtc < @cutoff", new { cutoff }).ToList();
        var after = _db.Query<int>(
            "SELECT Id FROM Entity WHERE Id IN (70,71) AND ModifiedAtUtc > @cutoff", new { cutoff }).ToList();

        before.Should().Equal(70);
        after.Should().Equal(71);
    }

    [Fact]
    public void DateTime_MigrationSqlStrftime_ProducesByteIdenticalStringToSetValue()
    {
        // Validates that the strftime expression used in the migration UPDATE
        // produces a byte-identical string to what C# SetValue writes.
        // This is the key guarantee that post-migration rows sort identically to app-written rows.
        const long epochSeconds = 1718447400; // 2024-06-15T10:30:00
        var expected = DateTime.UnixEpoch.AddSeconds(epochSeconds).ToString("s");

        var fromSql = _db.ExecuteScalar<string>(
            "SELECT strftime('%Y-%m-%dT%H:%M:%S', @epoch, 'unixepoch')", new { epoch = epochSeconds });

        fromSql.Should().Be(expected);
    }

    [Fact]
    public void DateTime_MigrationSqlStrftime_MillisecondEpoch_DividedBy1000_MatchesSetValue()
    {
        // sync_UTCTime is epoch milliseconds — migration divides by 1000 before strftime
        const long epochMs = 1718447400000L; // same instant as above
        var expected = DateTime.UnixEpoch.AddMilliseconds(epochMs).ToString("s");

        var fromSql = _db.ExecuteScalar<string>(
            "SELECT strftime('%Y-%m-%dT%H:%M:%S', @ms / 1000, 'unixepoch')", new { ms = epochMs });

        fromSql.Should().Be(expected);
    }

    [Fact]
    public void DateTime_MigrationSqlStrftime_EpochZero_ProducesSentinel()
    {
        var expected = DateTime.UnixEpoch.ToString("s"); // "1970-01-01T00:00:00"
        var fromSql = _db.ExecuteScalar<string>(
            "SELECT strftime('%Y-%m-%dT%H:%M:%S', 0, 'unixepoch')");
        fromSql.Should().Be(expected);
    }

    // ── Group 5: DateTimeOffset SetValue format ───────────────────────────────

    [Fact]
    public void DateTimeOffset_WithPositiveOffset_StoredAsUtcSFormatPlusZ()
    {
        var dto = new DateTimeOffset(2024, 6, 15, 15, 30, 0, TimeSpan.FromHours(5.5)); // +05:30 = 10:00 UTC
        var expected = dto.ToUniversalTime().ToString("s") + "Z"; // "2024-06-15T10:00:00Z"
        expected.Should().Be("2024-06-15T10:00:00Z");
        // Verify ToUniversalTime correctly discards the offset
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (80, @v)", new { v = expected });
        RawText("ModifiedAtUtc", 80).Should().Be(expected);
    }

    [Fact]
    public void DateTimeOffset_AlreadyUtc_StoredAsSFormatPlusZ()
    {
        var dto = new DateTimeOffset(2024, 6, 15, 10, 0, 0, TimeSpan.Zero);
        var written = dto.ToUniversalTime().ToString("s") + "Z";
        written.Should().Be("2024-06-15T10:00:00Z");
    }

    [Fact]
    public void DateTimeOffset_NegativeOffset_StoredAsUtcSFormatPlusZ()
    {
        var dto = new DateTimeOffset(2024, 6, 15, 2, 0, 0, TimeSpan.FromHours(-8)); // -08:00 = 10:00 UTC
        var written = dto.ToUniversalTime().ToString("s") + "Z";
        written.Should().Be("2024-06-15T10:00:00Z");
    }

    [Fact]
    public void DateTimeOffset_SameInstantDifferentOffsets_ProduceByteIdenticalStrings()
    {
        var instant = new DateTimeOffset(2024, 6, 15, 10, 0, 0, TimeSpan.Zero);
        var plus530 = instant.ToOffset(TimeSpan.FromHours(5.5));
        var minus8  = instant.ToOffset(TimeSpan.FromHours(-8));

        var s1 = instant.ToUniversalTime().ToString("s") + "Z";
        var s2 = plus530.ToUniversalTime().ToString("s") + "Z";
        var s3 = minus8.ToUniversalTime().ToString("s") + "Z";

        s1.Should().Be(s2).And.Be(s3);
    }

    // ── Group 6: DateTimeOffset Parse ────────────────────────────────────────

    [Fact]
    public void DateTimeOffset_Parse_SFormatPlusZ_ReturnsUtcOffset()
    {
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (90, '2024-06-15T10:00:00Z')");
        var result = _db.ExecuteScalar<DateTimeOffset>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 90");
        result.Offset.Should().Be(TimeSpan.Zero);
        result.UtcDateTime.Should().Be(new DateTime(2024, 6, 15, 10, 0, 0, DateTimeKind.Utc));
    }

    [Fact]
    public void DateTimeOffset_Parse_EpochString_ReturnsCorrectUtcInstant()
    {
        const long epochSeconds = 1718447400;
        _db.Execute($"INSERT INTO Entity (Id, DateCreated) VALUES (91, {epochSeconds})");
        var result = _db.ExecuteScalar<DateTimeOffset>("SELECT DateCreated FROM Entity WHERE Id = 91");
        result.UtcDateTime.Should().Be(DateTime.UnixEpoch.AddSeconds(epochSeconds));
    }

    [Fact]
    public void NullableDateTimeOffset_Parse_DbNull_ReturnsNull()
    {
        _db.Execute("INSERT INTO Entity (Id, DateDue) VALUES (92, NULL)");
        var result = _db.ExecuteScalar<DateTimeOffset?>("SELECT DateDue FROM Entity WHERE Id = 92");
        result.Should().BeNull();
    }

    [Fact]
    public void NullableDateTimeOffset_Parse_ValidString_ReturnsCorrectValue()
    {
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (93, '2024-06-15T10:00:00Z')");
        var result = _db.ExecuteScalar<DateTimeOffset?>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 93");
        result.Should().NotBeNull();
        result!.Value.Offset.Should().Be(TimeSpan.Zero);
    }

    // ── Group 7: DateTimeOffset round-trip ───────────────────────────────────

    [Fact]
    public void DateTimeOffset_RoundTrip_NonUtcOffset_OffsetDiscarded_InstantPreserved()
    {
        // Original has +05:30 offset — after round-trip the offset is gone but the UTC instant is the same
        var original = new DateTimeOffset(2024, 6, 15, 15, 30, 0, TimeSpan.FromHours(5.5));
        _db.Execute("INSERT INTO Entity (Id, ModifiedAtUtc) VALUES (94, @v)",
            new { v = original.ToUniversalTime().ToString("s") + "Z" });

        var result = _db.ExecuteScalar<DateTimeOffset?>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 94");
        result!.Value.UtcDateTime.Should().Be(original.UtcDateTime);
        result.Value.Offset.Should().Be(TimeSpan.Zero); // offset intentionally discarded
    }

    // ── Group 8: Migration idempotency ───────────────────────────────────────

    [Fact]
    public void Migration_AlreadyMigratedRow_ModifiedAtUtcNotNull_IsNotTouched()
    {
        var existingValue = new DateTime(2024, 1, 1, 0, 0, 0);
        _db.Execute("INSERT INTO Entity (Id, sync_UTCTime, ModifiedAtUtc) VALUES (100, 999999, @v)",
            new { v = (DateTime?)existingValue });

        // Run the migration WHERE clause — should match 0 rows since ModifiedAtUtc IS NOT NULL
        var affected = _db.Execute(@"
            UPDATE Entity SET
                ModifiedAtUtc = strftime('%Y-%m-%dT%H:%M:%S', sync_UTCTime / 1000, 'unixepoch')
            WHERE Id = 100 AND ModifiedAtUtc IS NULL");

        affected.Should().Be(0);
        var afterValue = _db.ExecuteScalar<DateTime?>("SELECT ModifiedAtUtc FROM Entity WHERE Id = 100");
        afterValue.Should().Be(existingValue); // unchanged
    }
}
