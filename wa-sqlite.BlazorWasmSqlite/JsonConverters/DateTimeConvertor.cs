using System.Text.Json;
using System.Text.Json.Serialization;

namespace wa_sqlite.BlazorWasmSqlite.JsonConverters;

/// <summary>
/// Sqlite does not like "boolean". C# boolean values must be converted to 0 or 1
/// 1=true 0=false
/// </summary>
internal class DateTimeConvertor : JsonConverter<DateTime>
{
    public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        long seconds;

        if (reader.TokenType == JsonTokenType.String)
        {
            var s = reader.GetString()!;
            // Legacy path: stored as unix epoch seconds string (old SqliteWasmInterop write path)
            // New path: stored as ISO 8601 string (BulkInsertRaw / seeded data)
            if (long.TryParse(s, out var epochSeconds))
                return DateTime.UnixEpoch.AddSeconds(epochSeconds);
            return DateTime.Parse(s);
        }
        else
        {
            seconds = reader.GetInt64();
        }

        return DateTime.UnixEpoch.AddSeconds(seconds);
    }

    public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
    {
        long seconds = (long)value.Subtract(DateTime.UnixEpoch).TotalSeconds;
        writer.WriteNumberValue(seconds);
    }

}
