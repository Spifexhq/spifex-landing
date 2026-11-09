# Meta Ads readiness

## What is implemented

- Consent banner with `accepted` / `rejected` stored in `spx_cookie_consent`.
- Meta Pixel loads only after marketing consent.
- UTMs, `fbclid` and `gclid` are captured for the session and persisted as
  first-touch only after consent.
- Pixel and Conversions API events share one `event_id` per event.
- Server CAPI route: `POST /api/meta/conversions`.

## Events

| Event | Where | Notes |
|---|---|---|
| `PageView` | `AnalyticsProvider` | Once per path after consent. |
| `ViewContent` | `/signup` | Signup form viewed. |
| `Lead` | `/signup` step 1 | Email availability confirmed. |
| `CompleteRegistration` | `/signup` after verification | Email/plan included for matching. |
| `InitiateCheckout` | `/signup` before Stripe redirect | Paid plans only. |
| `Purchase` | Server-side checkout completion | Sent by the Stripe webhook with the Stripe event id as `event_id`. |
| `CTAClick` | Buttons with `data-cta` | Custom event for funnel analysis. |

## Required environment variables

```env
NEXT_PUBLIC_META_PIXEL_ID=
META_PIXEL_ID=
META_CAPI_ACCESS_TOKEN=
META_CAPI_TEST_EVENT_CODE=
```

If `NEXT_PUBLIC_META_PIXEL_ID` is empty, the browser pixel is disabled. If the
server variables are empty, the CAPI route returns `204` and does nothing.

## Server-side Purchase example

The backend Stripe webhook should call this once per completed checkout, using
the Stripe event ID as `event_id` so retries do not duplicate the conversion:

```http
POST https://www.spifex.com/api/meta/conversions
Content-Type: application/json

{
  "event_name": "Purchase",
  "event_id": "evt_...",
  "event_source_url": "https://www.spifex.com/pricing",
  "email": "customer@example.com",
  "custom_data": {
    "value": 15,
    "currency": "EUR",
    "plan": "starter"
  }
}
```

The route hashes the email, forwards `_fbp`/`_fbc` cookies when present, sets
`action_source=website`, and forwards attribution stored by the landing page.

## Testing

1. Set the test event code.
2. Accept marketing cookies in the banner.
3. Visit `/?utm_source=meta&utm_medium=paid&utm_campaign=launch`.
4. Complete signup through verification.
5. Check Meta Events Manager → Test Events for `PageView`, `Lead`,
   `CompleteRegistration` and `InitiateCheckout`.
6. Reject marketing cookies in a private window and confirm no pixel request is
   made.

## Attribution notes

- First touch is persisted only after consent.
- The server route does not store emails; they are hashed in memory and sent to
  Meta only.
- UTM values are length-limited and never rendered as HTML.
