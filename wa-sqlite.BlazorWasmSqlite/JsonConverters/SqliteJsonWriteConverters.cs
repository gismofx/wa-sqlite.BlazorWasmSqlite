using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace wa_sqlite.BlazorWasmSqlite.JsonConverters;

/// <summary>
/// Write-only JSON converters that match the Dapper <c>SetValue</c> contract for SQLite.
/// Used exclusively by <see cref="Batch.SqliteWorkerPayloadBuilder.DefaultOptions"/> to
/// ensure <see cref="Batch.SqliteWorkerPayloadBuilder.BuildUpsertPayload{T}"/> produces
/// values that round-trip correctly through the wa-sqlite Worker and back via Dapper reads.
///
/// These are separate from the read/write converters in <see cref="DateTimeConvertor"/> etc.
/// to avoid changing the dual-format read paths (epoch + ISO 8601) those converters handle.
/// </summary>

/// <summary>
/// Writes <see cref="DateTime"/> as sortable ISO 8601 without timezone suffix (e.g. "2024-06-15T10:30:00").
/// Matches <c>DateTimeHandler.SetValue</c>: kind-agnostic, wall-clock value preserved.
/// </summary>
internal sealed class SqliteDateTimeWriteConverter : JsonConverter<DateTime>
{
    public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException("SqliteDateTimeWriteConverter is write-only.");

    public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        => writer.WriteStringValue(value.ToString("s"));
}

/// <summary>
/// Writes <see cref="Nullable{T}"/> DateTime as sortable ISO 8601 or JSON null.
/// Matches <c>NullableDateTimeHandler.SetValue</c>.
/// </summary>
internal sealed class SqliteNullableDateTimeWriteConverter : JsonConverter<DateTime?>
{
    public override DateTime? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException("SqliteNullableDateTimeWriteConverter is write-only.");

    public override void Write(Utf8JsonWriter writer, DateTime? value, JsonSerializerOptions options)
    {
        if (!value.HasValue) writer.WriteNullValue();
        else writer.WriteStringValue(value.Value.ToString("s"));
    }
}

/// <summary>
/// Writes <see cref="DateTimeOffset"/> as UTC-normalized ISO 8601 with "Z" suffix
/// (e.g. "2024-06-15T10:30:00Z"). Original offset is discarded — only the instant is preserved.
/// Matches <c>DateTimeOffsetHandler.SetValue</c>.
/// </summary>
internal sealed class SqliteDateTimeOffsetWriteConverter : JsonConverter<DateTimeOffset>
{
    public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException("SqliteDateTimeOffsetWriteConverter is write-only.");

    public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options)
        => writer.WriteStringValue(value.ToUniversalTime().ToString("s") + "Z");
}

/// <summary>
/// Writes <see cref="Nullable{T}"/> DateTimeOffset as UTC-normalized ISO 8601 + "Z" or JSON null.
/// Matches <c>NullableDateTimeOffsetHandler.SetValue</c>.
/// </summary>
internal sealed class SqliteNullableDateTimeOffsetWriteConverter : JsonConverter<DateTimeOffset?>
{
    public override DateTimeOffset? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException("SqliteNullableDateTimeOffsetWriteConverter is write-only.");

    public override void Write(Utf8JsonWriter writer, DateTimeOffset? value, JsonSerializerOptions options)
    {
        if (!value.HasValue) writer.WriteNullValue();
        else writer.WriteStringValue(value.Value.ToUniversalTime().ToString("s") + "Z");
    }
}

/// <summary>
/// Writes <see cref="Nullable{Boolean}"/> as <c>1</c>, <c>0</c>, or JSON null.
/// Non-nullable <c>bool</c> is handled by the existing <see cref="BooleanConvertor"/>.
/// Matches <c>NullableBoolHandler.SetValue</c>.
/// </summary>
internal sealed class SqliteNullableBoolWriteConverter : JsonConverter<bool?>
{
    public override bool? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException("SqliteNullableBoolWriteConverter is write-only.");

    public override void Write(Utf8JsonWriter writer, bool? value, JsonSerializerOptions options)
    {
        if (!value.HasValue) writer.WriteNullValue();
        else writer.WriteNumberValue(value.Value ? 1 : 0);
    }
}
