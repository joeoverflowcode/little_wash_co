/**
 * Static business defaults. Values an owner can change at runtime (thresholds,
 * season mode, exact shop coordinates) move to the `weather_settings` table in
 * ticket W.1; these remain the seed values and fallbacks.
 */
export const business = {
  name: "Little Wash Co",
  city: "Dallas",
  region: "TX",
  timezone: "America/Chicago",
  /** Central Dallas. Replace with the shop's exact coordinates in admin settings. */
  shopLocation: { latitude: 32.78, longitude: -96.8 },
  /** Orders in process at once. The shop works one order at a time. */
  capacity: 1,
  /** Clients can book a pickup from tomorrow up to this many days out. */
  bookingHorizonDays: 5,
} as const;

/**
 * Placeholder drying thresholds (spec: "Weather gate and seasonality").
 * Joe will supply real numbers; these only seed `weather_settings`.
 */
export const defaultDryingThresholds = {
  good: {
    minHighF: 60,
    maxPrecipProbabilityPct: 20,
    minSunshineHours: 6,
    maxAvgHumidityPct: 60,
  },
  marginal: {
    minHighF: 50,
    maxPrecipProbabilityPct: 40,
    minSunshineHours: 3,
    maxAvgHumidityPct: 75,
  },
  requiredGoodDryingDays: 2,
  targetTurnaroundDays: 5,
} as const;
