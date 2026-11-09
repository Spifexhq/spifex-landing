import { createHash } from "node:crypto";

export const runtime = "nodejs";

const ALLOWED_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "Lead",
  "CompleteRegistration",
  "InitiateCheckout",
  "Purchase",
  "Contact",
  "CTAClick",
]);

const buckets = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || current.reset < now) {
    buckets.set(ip, { count: 1, reset: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 60;
}

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function readCookie(cookie: string, name: string): string | undefined {
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match?.[1];
}

export async function POST(request: Request) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return new Response(null, { status: 204 });

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });

  const length = Number(request.headers.get("content-length") || 0);
  if (length > 16_384) return Response.json({ error: "payload_too_large" }, { status: 413 });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const eventName = typeof body.event_name === "string" ? body.event_name : "";
  const eventId = typeof body.event_id === "string" ? body.event_id.slice(0, 100) : "";
  if (!ALLOWED_EVENTS.has(eventName) || !eventId) {
    return Response.json({ error: "invalid_event" }, { status: 400 });
  }

  const cookie = request.headers.get("cookie") || "";
  const userData: Record<string, string> = {
    client_ip_address: ip,
    client_user_agent: request.headers.get("user-agent") || "",
  };
  if (typeof body.email === "string" && body.email.includes("@")) {
    userData.em = sha256(body.email);
  }
  const fbp = readCookie(cookie, "_fbp");
  const fbc = readCookie(cookie, "_fbc");
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const attribution =
    body.attribution && typeof body.attribution === "object"
      ? (body.attribution as Record<string, unknown>)
      : undefined;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url:
          typeof body.event_source_url === "string" ? body.event_source_url.slice(0, 500) : undefined,
        action_source: "website",
        user_data: userData,
        custom_data: {
          ...(body.custom_data && typeof body.custom_data === "object" ? body.custom_data : {}),
          ...(attribution ? { attribution } : {}),
        },
      },
    ],
  };

  const testCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (testCode) payload.test_event_code = testCode;

  const url = `https://graph.facebook.com/v20.0/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(token)}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!response.ok) return new Response(null, { status: 202 });
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 202 });
  }
}
