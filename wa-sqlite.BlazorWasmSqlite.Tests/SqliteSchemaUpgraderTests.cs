using System;
using System.Linq;
using System.Reflection;
using FluentAssertions;
using wa_sqlite.BlazorWasmSqlite.Attributes;
using wa_sqlite.BlazorWasmSqlite.Extensions;
using Xunit;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// Tests for <see cref="SqliteTableCreator.BuildAlterColumnDefinition"/>, which drives
/// the ALTER TABLE ADD COLUMN DDL emitted by SqliteSchemaUpgrader at startup.
///
/// RunAsync itself is not unit-testable (requires a live SqliteWasmConnection in a
/// browser WASM context) — correctness at that layer is covered by startup integration
/// and manual testing. These tests fully cover the DDL-generation logic.
/// </summary>
public class SqliteSchemaUpgraderTests
{
    // ── Test entity — mirrors the SyncSystem property block added to DVMApp entities ──

    private class SyncPropertiesEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }

        // IsDirty — bool, inferred: INTEGER NOT NULL DEFAULT 0
        public bool IsDirty { get; set; }

        // IsDeleted — bool, inferred: INTEGER NOT NULL DEFAULT 0
        public bool IsDeleted { get; set; }

        // ModifiedByUserId — string NOT NULL, explicit attribute
        [SqliteColumn(SqliteType.Text, SqliteNullability.NotNull, defaultValue: "''")]
        public string ModifiedByUserId { get; set; } = "Local";

        // ModifiedAtUtc — DateTime?, inferred: TEXT nullable
        public DateTime? ModifiedAtUtc { get; set; }

        // SyncSessionId — Guid?, ignored (not in SQLite)
        [SqliteColumnIgnore]
        public Guid? SyncSessionId { get; set; }
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private static PropertyInfo Prop<T>(string name) =>
        typeof(T).GetProperty(name, BindingFlags.Public | BindingFlags.Instance)
        ?? throw new ArgumentException($"Property '{name}' not found on {typeof(T).Name}");

    private static string ColDef<T>(string name) =>
        SqliteTableCreator.BuildAlterColumnDefinition(Prop<T>(name));

    // ── SyncSystem property block — the primary migration target ─────────────

    [Fact]
    public void IsDirty_Bool_InferredIntegerNotNullDefault0()
    {
        ColDef<SyncPropertiesEntity>("IsDirty")
            .Should().Be("IsDirty INTEGER NOT NULL DEFAULT 0");
    }

    [Fact]
    public void IsDeleted_Bool_InferredIntegerNotNullDefault0()
    {
        ColDef<SyncPropertiesEntity>("IsDeleted")
            .Should().Be("IsDeleted INTEGER NOT NULL DEFAULT 0");
    }

    [Fact]
    public void ModifiedByUserId_ExplicitNotNull_TextNotNullDefaultEmptyString()
    {
        ColDef<SyncPropertiesEntity>("ModifiedByUserId")
            .Should().Be("ModifiedByUserId TEXT COLLATE NOCASE NOT NULL DEFAULT ''");
    }

    [Fact]
    public void ModifiedAtUtc_NullableDateTime_TextNullableNoDefault()
    {
        var def = ColDef<SyncPropertiesEntity>("ModifiedAtUtc");
        def.Should().Contain("ModifiedAtUtc TEXT");
        def.Should().NotContain("NOT NULL");
        def.Should().NotContain("DEFAULT");
    }

    [Fact]
    public void SyncSessionId_Ignored_AbsentFromGetAllColumns()
    {
        // [SqliteColumnIgnore] properties must not appear in the column list
        // that SqliteSchemaUpgrader uses to detect drift.
        var columns = SqliteWasmExtensions.GetAllColumns(typeof(SyncPropertiesEntity));
        columns.Select(p => p.Name).Should().NotContain("SyncSessionId");
    }

    // ── PRIMARY KEY / UNIQUE clauses — must be absent from ALTER output ───────

    private class PkAndUniqueEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }

        [SqliteColumn(unique: true)]
        public string Email { get; set; } = string.Empty;
    }

    [Fact]
    public void Id_PrimaryKey_NoPrimaryKeyClauseInAlterOutput()
    {
        // ALTER TABLE ADD COLUMN cannot define a PRIMARY KEY
        ColDef<PkAndUniqueEntity>("Id").Should().NotContain("PRIMARY KEY");
    }

    [Fact]
    public void Email_Unique_NoUniqueClauseInAlterOutput()
    {
        // SQLite ALTER TABLE ADD COLUMN does not support UNIQUE constraints
        ColDef<PkAndUniqueEntity>("Email").Should().NotContain("UNIQUE");
    }

    // ── Type inference coverage ───────────────────────────────────────────────

    private class TypeInferenceEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }
        public bool BoolProp { get; set; }
        public bool? NullableBoolProp { get; set; }
        public int IntProp { get; set; }
        public int? NullableIntProp { get; set; }
        public decimal DecimalProp { get; set; }
        public decimal? NullableDecimalProp { get; set; }
        public double DoubleProp { get; set; }
        public string StringProp { get; set; } = string.Empty;
        public string? NullableStringProp { get; set; }
        public Guid GuidProp { get; set; }
        public Guid? NullableGuidProp { get; set; }
        public DateTime DateTimeProp { get; set; }
        public DateTime? NullableDateTimeProp { get; set; }
    }

    [Theory]
    [InlineData("BoolProp",         "BoolProp INTEGER NOT NULL DEFAULT 0")]
    [InlineData("IntProp",          "IntProp INTEGER NOT NULL DEFAULT 0")]
    [InlineData("DecimalProp",      "DecimalProp NUMERIC NOT NULL DEFAULT 0")]
    [InlineData("DoubleProp",       "DoubleProp REAL NOT NULL DEFAULT 0")]
    [InlineData("GuidProp",         "GuidProp TEXT COLLATE NOCASE NOT NULL DEFAULT ''")]
    [InlineData("DateTimeProp",     "DateTimeProp TEXT COLLATE NOCASE NOT NULL DEFAULT ''")]
    public void ValueTypeProperties_InferNotNullWithDefault(string propName, string expected)
    {
        ColDef<TypeInferenceEntity>(propName).Should().Be(expected);
    }

    [Theory]
    [InlineData("NullableBoolProp")]
    [InlineData("NullableIntProp")]
    [InlineData("NullableDecimalProp")]
    [InlineData("NullableGuidProp")]
    [InlineData("NullableDateTimeProp")]
    [InlineData("StringProp")]
    [InlineData("NullableStringProp")]
    public void NullableAndReferenceTypeProperties_InferNoNotNullNoDefault(string propName)
    {
        var def = ColDef<TypeInferenceEntity>(propName);
        def.Should().NotContain("NOT NULL");
        def.Should().NotContain("DEFAULT");
    }

    // ── Explicit DefaultValue override ────────────────────────────────────────

    private class ExplicitDefaultEntity
    {
        [ExplicitKey]
        public Guid Id { get; set; }

        [SqliteColumn(SqliteType.Text, SqliteNullability.NotNull, defaultValue: "'Migration'")]
        public string MigratedBySystem { get; set; } = "Migration";

        [SqliteColumn(SqliteType.Integer, SqliteNullability.NotNull, defaultValue: "1")]
        public int CustomDefault { get; set; }
    }

    [Fact]
    public void ExplicitDefaultValue_OverridesInferredDefault()
    {
        ColDef<ExplicitDefaultEntity>("MigratedBySystem")
            .Should().Be("MigratedBySystem TEXT COLLATE NOCASE NOT NULL DEFAULT 'Migration'");
    }

    [Fact]
    public void ExplicitDefaultValue_NumericLiteral_UsedVerbatim()
    {
        ColDef<ExplicitDefaultEntity>("CustomDefault")
            .Should().Be("CustomDefault INTEGER NOT NULL DEFAULT 1");
    }

    // ── COLLATE NOCASE only on TEXT, not INTEGER/NUMERIC/REAL ─────────────────

    [Fact]
    public void NonTextColumns_NoCollateClause()
    {
        ColDef<TypeInferenceEntity>("BoolProp").Should().NotContain("COLLATE");
        ColDef<TypeInferenceEntity>("IntProp").Should().NotContain("COLLATE");
        ColDef<TypeInferenceEntity>("DecimalProp").Should().NotContain("COLLATE");
        ColDef<TypeInferenceEntity>("DoubleProp").Should().NotContain("COLLATE");
    }
}
