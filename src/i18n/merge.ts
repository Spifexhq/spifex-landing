import type { Messages } from "./translator";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function mergeMessages(base: Messages, override: Messages): Messages {
  const out: Messages = { ...base };
  for (const [key, value] of Object.entries(override ?? {})) {
    const current = out[key];
    out[key] = isRecord(current) && isRecord(value) ? mergeMessages(current, value) : value;
  }
  return out;
}
