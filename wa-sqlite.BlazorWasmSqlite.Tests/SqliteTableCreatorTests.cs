using System;
using FluentAssertions;
using wa_sqlite.BlazorWasmSqlite.Attributes;
using wa_sqlite.BlazorWasmSqlite.Extensions;
using Xunit;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

public class SqliteTableCreatorTests
{
    // ── GetSqliteColumnFromType ───────────────────────────────────────────────

    [Theory]
    [InlineData(typeof(string),         SqliteType.Text)]
    [InlineData(typeof(Guid),           SqliteType.Text)]
    [InlineData(typeof(DateTime),       SqliteType.Text)]
    [InlineData(typeof(DateTimeOffset), SqliteType.Text)]
    [InlineData(typeof(bool),           SqliteType.Integer)]
    [InlineData(typeof(int),            SqliteType.Integer)]
    [InlineData(typeof(uint),           SqliteType.Integer)]
    [InlineData(typeof(long),           SqliteType.Integer)]
    [InlineData(typeof(ulong),          SqliteType.Integer)]
    [InlineData(typeof(short),          SqliteType.Integer)]
    [InlineData(typeof(byte),           SqliteType.Integer)]
    [InlineData(typeof(double),         SqliteType.Real)]
    [InlineData(typeof(float),          SqliteType.Real)]
    [InlineData(typeof(decimal),        SqliteType.Numeric)]
    public void GetSqliteColumnFromType_KnownTypes_ReturnCorrectAffinity(Type type, string expected)
    {
        SqliteTableCreator.GetSqliteColumnFromType(type).Should().Be(expected);
    }

    [Theory]
    [InlineData(typeof(int?))]
    [InlineData(typeof(bool?))]
    [InlineData(typeof(Guid?))]
    [InlineData(typeof(DateTime?))]
    [InlineData(typeof(DateTimeOffset?))]
    [InlineData(typeof(decimal?))]
    public void GetSqliteColumnFromType_NullableTypes_UnwrapsAndMapsCorrectly(Type type)
    {
        var underlying = Nullable.GetUnderlyingType(type)!;
        var expected = SqliteTableCreator.GetSqliteColumnFromType(underlying);
        SqliteTableCreator.GetSqliteColumnFromType(type).Should().Be(expected);
    }

    [Fact]
    public void GetSqliteColumnFromType_UnknownType_FallsBackToText()
    {
        // Unknown types should not throw — fall back to TEXT
        SqliteTableCreator.GetSqliteColumnFromType(typeof(object)).Should().Be(SqliteType.Text);
    }

    // ── InferDefaultValue ─────────────────────────────────────────────────────

    [Theory]
    [InlineData(typeof(bool),    "0")]
    [InlineData(typeof(int),     "0")]
    [InlineData(typeof(long),    "0")]
    [InlineData(typeof(double),  "0")]
    [InlineData(typeof(decimal), "0")]
    [InlineData(typeof(Guid),    "''")]
    [InlineData(typeof(DateTime),       "''")]
    [InlineData(typeof(DateTimeOffset), "''")]
    public void InferDefaultValue_ValueTypes_ReturnsExpectedLiteral(Type type, string expected)
    {
        SqliteTableCreator.InferDefaultValue(type).Should().Be(expected);
    }

    [Theory]
    [InlineData(typeof(string))]
    [InlineData(typeof(int?))]
    [InlineData(typeof(bool?))]
    [InlineData(typeof(Guid?))]
    [InlineData(typeof(DateTime?))]
    public void InferDefaultValue_NullableOrReferenceTypes_ReturnsNull(Type type)
    {
        SqliteTableCreator.InferDefaultValue(type).Should().BeNull();
    }

    // ── DDL generation ────────────────────────────────────────────────────────

    private class SimpleEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public int Count { get; set; }
        public string? Notes { get; set; }
        [SqliteColumnIgnore]
        public Guid? IgnoredProp { get; set; }
    }

    [Fact]
    public void GenerateSqliteCreateTable_SimpleEntity_ProducesValidDdl()
    {
        var statements = SqliteTableCreator.GenerateSqliteCreateTable<SimpleEntity>();
        statements.Should().NotBeEmpty();
        var ddl = statements[0];

        // Table name (pluralised by default)
        ddl.Should().Contain("SimpleEntitys");

        // PK — no NOT NULL or DEFAULT (implied by PRIMARY KEY)
        ddl.Should().Contain("Id TEXT");
        ddl.Should().Contain("PRIMARY KEY");
        ddl.Should().NotMatchRegex(@"Id TEXT[^,)]*NOT NULL");
        ddl.Should().NotMatchRegex(@"Id TEXT[^,)]*DEFAULT");

        // Non-null value type — gets NOT NULL + DEFAULT
        ddl.Should().Contain("IsActive INTEGER NOT NULL DEFAULT 0");
        ddl.Should().Contain("Count INTEGER NOT NULL DEFAULT 0");

        // Non-null string — reference type stays nullable
        ddl.Should().Contain("Name TEXT");

        // Nullable string — no NOT NULL
        ddl.Should().Contain("Notes TEXT");
        ddl.Should().NotMatchRegex(@"Notes TEXT[^,)]*NOT NULL");

        // Ignored property — absent entirely
        ddl.Should().NotContain("IgnoredProp");
    }

    // ── SqliteNullability inference ───────────────────────────────────────────

    private class NullabilityEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }

        [SqliteColumn(nullability: SqliteNullability.NotNull)]
        public string ForcedNotNull { get; set; } = string.Empty;

        [SqliteColumn(nullability: SqliteNullability.Nullable)]
        public int ForcedNullable { get; set; }

        public int InferredNotNull { get; set; }
        public string? InferredNullable { get; set; }
    }

    [Fact]
    public void GenerateSqliteCreateTable_NullabilityOverrides_HonourExplicitSettings()
    {
        var ddl = SqliteTableCreator.GenerateSqliteCreateTable<NullabilityEntity>()[0];

        // ForcedNotNull is a string (reference type) — NotNull forces NOT NULL but no DEFAULT
        // (InferDefaultValue returns null for reference types; explicit DefaultValue would be needed)
        ddl.Should().Contain("ForcedNotNull TEXT COLLATE NOCASE NOT NULL");
        ddl.Should().NotMatchRegex(@"ForcedNotNull TEXT[^,)]*DEFAULT");
        ddl.Should().NotMatchRegex(@"ForcedNullable INTEGER[^,)]*NOT NULL");
        ddl.Should().Contain("InferredNotNull INTEGER NOT NULL DEFAULT 0");
        ddl.Should().NotMatchRegex(@"InferredNullable TEXT[^,)]*NOT NULL");
    }

    // ── SqliteColumnIgnore ────────────────────────────────────────────────────

    private class IgnoreEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        [SqliteColumnIgnore]
        public Guid? SyncSessionId { get; set; }
        [SqliteColumnIgnore]
        public string ServerOnlyProp { get; set; } = string.Empty;
    }

    [Fact]
    public void GenerateSqliteCreateTable_IgnoredProperties_AbsentFromDdl()
    {
        var ddl = SqliteTableCreator.GenerateSqliteCreateTable<IgnoreEntity>()[0];
        ddl.Should().NotContain("SyncSessionId");
        ddl.Should().NotContain("ServerOnlyProp");
        ddl.Should().Contain("Name");
    }

    // ── Index generation ──────────────────────────────────────────────────────

    private class IndexEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }

        [SqliteColumn(index: true)]
        public Guid TenantId { get; set; }

        [SqliteColumn(index: true, unique: true)]
        public string Email { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;
    }

    [Fact]
    public void GenerateSqliteCreateTable_IndexColumns_GeneratesIndexStatements()
    {
        var statements = SqliteTableCreator.GenerateSqliteCreateTable<IndexEntity>();

        // First statement is always CREATE TABLE
        statements[0].Should().StartWith("CREATE TABLE");

        // Index statements generated for decorated columns only
        statements.Should().Contain(s => s.Contains("ind_TenantId_IndexEntitys"));
        statements.Should().Contain(s => s.Contains("UNIQUE") && s.Contains("ind_Email_IndexEntitys"));

        // No index for undecorated column
        statements.Should().NotContain(s => s.Contains("ind_Name_"));

        // No empty strings
        statements.Should().NotContain(string.Empty);
    }

    [Fact]
    public void GenerateSqliteCreateTable_PrimaryKeyColumn_NoExplicitIndex()
    {
        var statements = SqliteTableCreator.GenerateSqliteCreateTable<IndexEntity>();
        // PRIMARY KEY creates its own implicit index — no explicit CREATE INDEX for Id
        statements.Should().NotContain(s => s.Contains("ind_Id_"));
    }
}
