using Dapper;
using System;
using System.Data;
using System.Globalization;

namespace wa_sqlite.BlazorWasmSqlite;

/// <summary>
/// Dapper type handlers that compensate for SqliteWasmDbDataReader.GetValue() always returning
/// Double for JSON numbers and String for TEXT columns. Dapper's unboxer is strict about types,
/// so types that don't map 1:1 from JSON require explicit handlers.
///
/// Both T and T? handlers are registered for every type. Dapper 2.0.x does NOT automatically
/// wrap TypeHandler&lt;T&gt; for nullable properties — T? properties go through GetValue() and
/// require their own explicit handler or Dapper's IL deserializer throws InvalidCastException.
///
/// Handlers registered:
///   DateTime / DateTime?        — epoch int, epoch string, ISO 8601 → DateTime; writes ISO 8601
///   DateTimeOffset / DateTimeOffset? — ISO 8601 with offset → DateTimeOffset; writes ISO 8601 with offset
///   bool / bool?                — Double 0.0/1.0 → bool; writes 0/1
///   Guid / Guid?          — String → Guid.Parse; writes ToString()
///   decimal / decimal?    — Double → Convert.ToDecimal
///   int / int?            — Double → Convert.ToInt32
///   long / long?          — Double → Convert.ToInt64
///   float / float?        — Double → Convert.ToSingle
///   double / double?      — Double passthrough
///
/// Auto-registered by AddSqliteWasmInterop(). Safe to call Register() manually if needed.
/// </summary>
public static class SqliteWasmDapperTypeHandlers
{
    private static bool _registered;

    /// <summary>
    /// Register all type handlers with Dapper. Safe to call multiple times (no-op after first).
    /// Called automatically by AddSqliteWasmInterop() — no manual call needed in most cases.
    /// </summary>
    public static void Register()
    {
        if (_registered) return;
        SqlMapper.AddTypeHandler(new DateTimeHandler());
        SqlMapper.AddTypeHandler(new NullableDateTimeHandler());
        SqlMapper.AddTypeHandler(new DateTimeOffsetHandler());
        SqlMapper.AddTypeHandler(new NullableDateTimeOffsetHandler());
        SqlMapper.AddTypeHandler(new BoolHandler());
        SqlMapper.AddTypeHandler(new NullableBoolHandler());
        SqlMapper.AddTypeHandler(new GuidHandler());
        SqlMapper.AddTypeHandler(new NullableGuidHandler());
        SqlMapper.AddTypeHandler(new DecimalHandler());
        SqlMapper.AddTypeHandler(new NullableDecimalHandler());
        SqlMapper.AddTypeHandler(new IntHandler());
        SqlMapper.AddTypeHandler(new NullableIntHandler());
        SqlMapper.AddTypeHandler(new LongHandler());
        SqlMapper.AddTypeHandler(new NullableLongHandler());
        SqlMapper.AddTypeHandler(new FloatHandler());
        SqlMapper.AddTypeHandler(new NullableFloatHandler());
        SqlMapper.AddTypeHandler(new DoubleHandler());
        SqlMapper.AddTypeHandler(new NullableDoubleHandler());
        _registered = true;
    }

    // ── DateTime ─────────────────────────────────────────────────────────────

    private sealed class DateTimeHandler : SqlMapper.TypeHandler<DateTime>
    {
        public override DateTime Parse(object value)
        {
            if (value is long l) return DateTime.UnixEpoch.AddSeconds(l);
            var s = value?.ToString() ?? "";
            if (long.TryParse(s, out var epoch)) return DateTime.UnixEpoch.AddSeconds(epoch);
            return DateTime.Parse(s, null, DateTimeStyles.RoundtripKind);
        }
        public override void SetValue(IDbDataParameter parameter, DateTime value)
            => parameter.Value = value.ToString("O");
    }

    private sealed class NullableDateTimeHandler : SqlMapper.TypeHandler<DateTime?>
    {
        public override DateTime? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            if (value is long l) return DateTime.UnixEpoch.AddSeconds(l);
            var s = value.ToString() ?? "";
            if (long.TryParse(s, out var epoch)) return DateTime.UnixEpoch.AddSeconds(epoch);
            return DateTime.Parse(s, null, DateTimeStyles.RoundtripKind);
        }
        public override void SetValue(IDbDataParameter parameter, DateTime? value)
            => parameter.Value = value.HasValue ? (object)value.Value.ToString("O") : DBNull.Value;
    }

    // ── DateTimeOffset ────────────────────────────────────────────────────────

    private sealed class DateTimeOffsetHandler : SqlMapper.TypeHandler<DateTimeOffset>
    {
        public override DateTimeOffset Parse(object value)
        {
            var s = value?.ToString() ?? "";
            // Epoch fallback — treat as UTC
            if (long.TryParse(s, out var epoch))
                return DateTimeOffset.FromUnixTimeSeconds(epoch);
            return DateTimeOffset.Parse(s, null, DateTimeStyles.RoundtripKind);
        }
        public override void SetValue(IDbDataParameter parameter, DateTimeOffset value)
            => parameter.Value = value.ToString("O");
    }

    private sealed class NullableDateTimeOffsetHandler : SqlMapper.TypeHandler<DateTimeOffset?>
    {
        public override DateTimeOffset? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            var s = value.ToString() ?? "";
            if (long.TryParse(s, out var epoch))
                return DateTimeOffset.FromUnixTimeSeconds(epoch);
            return DateTimeOffset.Parse(s, null, DateTimeStyles.RoundtripKind);
        }
        public override void SetValue(IDbDataParameter parameter, DateTimeOffset? value)
            => parameter.Value = value.HasValue ? (object)value.Value.ToString("O") : DBNull.Value;
    }

    // ── Bool ─────────────────────────────────────────────────────────────────

    private sealed class BoolHandler : SqlMapper.TypeHandler<bool>
    {
        public override bool Parse(object value) => Convert.ToBoolean(value);
        public override void SetValue(IDbDataParameter parameter, bool value)
            => parameter.Value = value ? 1 : 0;
    }

    private sealed class NullableBoolHandler : SqlMapper.TypeHandler<bool?>
    {
        public override bool? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Convert.ToBoolean(value);
        }
        public override void SetValue(IDbDataParameter parameter, bool? value)
            => parameter.Value = value.HasValue ? (object)(value.Value ? 1 : 0) : DBNull.Value;
    }

    // ── Guid ─────────────────────────────────────────────────────────────────

    private sealed class GuidHandler : SqlMapper.TypeHandler<Guid>
    {
        public override Guid Parse(object value) => Guid.Parse(value.ToString()!);
        public override void SetValue(IDbDataParameter parameter, Guid value)
            => parameter.Value = value.ToString();
    }

    private sealed class NullableGuidHandler : SqlMapper.TypeHandler<Guid?>
    {
        public override Guid? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Guid.Parse(value.ToString()!);
        }
        public override void SetValue(IDbDataParameter parameter, Guid? value)
            => parameter.Value = value.HasValue ? (object)value.Value.ToString() : DBNull.Value;
    }

    // ── Decimal ───────────────────────────────────────────────────────────────

    private sealed class DecimalHandler : SqlMapper.TypeHandler<decimal>
    {
        public override decimal Parse(object value) => Convert.ToDecimal(value);
        public override void SetValue(IDbDataParameter parameter, decimal value)
            => parameter.Value = value;
    }

    private sealed class NullableDecimalHandler : SqlMapper.TypeHandler<decimal?>
    {
        public override decimal? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Convert.ToDecimal(value);
        }
        public override void SetValue(IDbDataParameter parameter, decimal? value)
            => parameter.Value = value.HasValue ? (object)value.Value : DBNull.Value;
    }

    // ── int / long / float / double ───────────────────────────────────────────

    private sealed class IntHandler : SqlMapper.TypeHandler<int>
    {
        public override int Parse(object value) => Convert.ToInt32(value);
        public override void SetValue(IDbDataParameter parameter, int value) => parameter.Value = value;
    }

    private sealed class NullableIntHandler : SqlMapper.TypeHandler<int?>
    {
        public override int? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Convert.ToInt32(value);
        }
        public override void SetValue(IDbDataParameter parameter, int? value)
            => parameter.Value = value.HasValue ? (object)value.Value : DBNull.Value;
    }

    private sealed class LongHandler : SqlMapper.TypeHandler<long>
    {
        public override long Parse(object value) => Convert.ToInt64(value);
        public override void SetValue(IDbDataParameter parameter, long value) => parameter.Value = value;
    }

    private sealed class NullableLongHandler : SqlMapper.TypeHandler<long?>
    {
        public override long? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Convert.ToInt64(value);
        }
        public override void SetValue(IDbDataParameter parameter, long? value)
            => parameter.Value = value.HasValue ? (object)value.Value : DBNull.Value;
    }

    private sealed class FloatHandler : SqlMapper.TypeHandler<float>
    {
        public override float Parse(object value) => Convert.ToSingle(value);
        public override void SetValue(IDbDataParameter parameter, float value) => parameter.Value = value;
    }

    private sealed class NullableFloatHandler : SqlMapper.TypeHandler<float?>
    {
        public override float? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Convert.ToSingle(value);
        }
        public override void SetValue(IDbDataParameter parameter, float? value)
            => parameter.Value = value.HasValue ? (object)value.Value : DBNull.Value;
    }

    private sealed class DoubleHandler : SqlMapper.TypeHandler<double>
    {
        public override double Parse(object value) => Convert.ToDouble(value);
        public override void SetValue(IDbDataParameter parameter, double value) => parameter.Value = value;
    }

    private sealed class NullableDoubleHandler : SqlMapper.TypeHandler<double?>
    {
        public override double? Parse(object value)
        {
            if (value is DBNull || value is null) return null;
            return Convert.ToDouble(value);
        }
        public override void SetValue(IDbDataParameter parameter, double? value)
            => parameter.Value = value.HasValue ? (object)value.Value : DBNull.Value;
    }
}
