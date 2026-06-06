using System.Text.Json;
using System.Text.Json.Serialization;

namespace wa_sqlite.BlazorWasmSqlite.JsonConverters;

/// <summary>
/// Converts nullable DateTime values stored in SQLite as either Unix epoch seconds (legacy)
/// or ISO 8601 strings (BulkInsertRaw / seeded data) to <see cref="DateTime?"/>.
/// </summary>
internal class DateTimeNullableConvertor : JsonConverter<DateTime?>
{
    public override DateTime? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType == JsonTokenType.Null)
            return null;

        if (reader.TokenType == JsonTokenType.String)
        {
            var s = reader.GetString()!;
            // Legacy path: stored as unix epoch seconds string (old SqliteWasmInterop write path)
            // New path: stored as ISO 8601 string (BulkInsertRaw / seeded data)
            if (long.TryParse(s, out var epochSeconds))
                return DateTime.UnixEpoch.AddSeconds(epochSeconds);
            return DateTime.Parse(s);
        }

        return DateTime.UnixEpoch.AddSeconds(reader.GetInt64());
    }

    public override void Write(Utf8JsonWriter writer, DateTime? value, JsonSerializerOptions options)
    {
        if (!value.HasValue)
        {
            writer.WriteNullValue();
            return;
        }
        long seconds = (long)value.Value.Subtract(DateTime.UnixEpoch).TotalSeconds;
        writer.WriteNumberValue(seconds);
    }

}
