import { marketingAllowed } from "./consent";
import { attributionParams, getAttribution } from "./utm";

type EventPayload = {
  value?: number;
  currency?: string;
  plan?: string;
  email?: string;
  contentName?: string;
  eventId?: string;
};

type Fbq = ((...args: unknown[]) => void) & {
  push: Fbq;
  callMethod?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const SENT_KEY = "spx_meta_sent";
let initializedPixel: string | null = null;

export function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

function alreadySent(eventId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const sent: string[] = JSON.parse(window.sessionStorage.getItem(SENT_KEY) || "[]");
    return sent.includes(eventId);
  } catch {
    return false;
  }
}

function rememberSent(eventId: string): void {
  try {
    const sent: string[] = JSON.parse(window.sessionStorage.getItem(SENT_KEY) || "[]");
    sent.push(eventId);
    window.sessionStorage.setItem(SENT_KEY, JSON.stringify(sent.slice(-100)));
  } catch {
    // Ignore.
  }
}

export function initMetaPixel(): void {
  if (typeof window === "undefined" || !marketingAllowed()) return;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId || initializedPixel === pixelId) return;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      fbq.callMethod?.(...args);
    } as Fbq;
    fbq.push = fbq;
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq?.("init", pixelId);
  initializedPixel = pixelId;
}

export function trackMeta(eventName: string, payload: EventPayload = {}): string | null {
  if (typeof window === "undefined" || !marketingAllowed()) return null;
  const eventId = payload.eventId ?? newEventId();
  if (alreadySent(eventId)) return eventId;
  rememberSent(eventId);

  initMetaPixel();
  const custom = {
    ...(payload.value !== undefined ? { value: payload.value } : {}),
    ...(payload.currency ? { currency: payload.currency } : {}),
    ...(payload.plan ? { plan: payload.plan } : {}),
    ...(payload.contentName ? { content_name: payload.contentName } : {}),
    ...attributionParams(),
  };

  window.fbq?.("track", eventName, custom, { eventID: eventId });

  const capiEvents = new Set(["Lead", "CompleteRegistration", "InitiateCheckout", "Purchase"]);
  if (!capiEvents.has(eventName)) return eventId;

  const attribution = getAttribution();
  void fetch("/api/meta/conversions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      email: payload.email,
      custom_data: custom,
      attribution,
    }),
  }).catch(() => {
    // Pixel already recorded the event; CAPI is a best-effort duplicate.
  });

  return eventId;
}

export function trackPageView(): void {
  trackMeta("PageView");
}

export function trackLead(payload: EventPayload = {}): string | null {
  return trackMeta("Lead", payload);
}

export function trackCompleteRegistration(payload: EventPayload = {}): string | null {
  return trackMeta("CompleteRegistration", payload);
}

export function trackInitiateCheckout(payload: EventPayload = {}): string | null {
  return trackMeta("InitiateCheckout", payload);
}

/** Server-side checkout completion should call the CAPI route with Purchase. */
export function trackPurchase(payload: EventPayload = {}): string | null {
  return trackMeta("Purchase", payload);
}
