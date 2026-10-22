# Analytics — delteris.com

Decided 22 Oct 2026: **in-house campaign analytics**, no Plausible / Umami / Cloudflare / GA.
Anonymous daily totals on our own EU server (repo `Delteris/InternalMetrics`, dashboard
https://metrics.delteris.com). No cookies, no storage on the visitor's device, no IPs, no profiles,
so no consent banner. Privacy policy §2 and §3.4 (EN/ES/PT) describe it.

## How it works

- `docs/_config.yml` → `metrics_endpoint: "https://metrics.delteris.com/c"` (blank = off).
- `_layouts/default.html` emits `<meta name="metrics-endpoint">` on every page except `noindex` ones (404).
- The last block of `docs/main.js` sends beacons with `navigator.sendBeacon` (fetch keepalive as fallback):

| event | when |
|---|---|
| `visit` | the page has been visible for 1 s |
| `play` | first play of the Atlas video on the page |
| `watched` | the video reached 75 % |
| `contact` | click on any `mailto:` link or the copy-address button |
| `signup` | product-updates form submitted (honeypot empty) |

  Body: `{event, path, t, campaign?, source?, medium?, content?}` — the `utm_*` values of the URL the
  visitor arrived on. Each event is sent at most once per page view.
- The `utm_*` parameters are read once and removed from the address bar (`history.replaceState`), so a
  reload or a forwarded copy of the URL is not another campaign visit. Nothing is written to cookies,
  localStorage or sessionStorage. (The `/es/trial` redirect stubs keep `location.search`, so the tags
  reach `wps-manager-contact.html`, where the video is.)
- Skipped entirely when `navigator.webdriver` is set (automation). The server also drops bot user agents,
  visits under 1 s, foreign origins, and anything that fails its field allowlist.

## Tagging links

Campaign e-mails get tags from mailspam (`InternalTools/mailspam/mailspam/tracking.py`):
`?utm_source=email&utm_medium=cold&utm_campaign=<name>&utm_content=video|trial|site`.
Any other link you want to measure (LinkedIn post, a PDF) just needs a `utm_campaign`; values must be
lowercase `a-z 0-9 . _ -`, max 48 characters, or the server drops the beacon.

## If the site ever gets a referrer policy

Beacons are cross-origin POSTs and the server requires the `Origin` header. A page-wide
`<meta name="referrer" content="no-referrer">` makes browsers send `Origin: null`, which the server
refuses. Keep the default policy (or `strict-origin-when-cross-origin`).

## Rejected

- Separate landing paths (`/es/correo/N/`) + Cloudflare Web Analytics: a third party, and it drops the query string.
- Google Analytics: cookies, so a consent banner.

---

## Google Search Console (search keywords + rankings)

This is separate from analytics: it shows what people search to find you and your Google rankings. Add the TXT record wherever delteris.com's DNS is managed.

1. In Search Console, keep the **Domain** property for `delteris.com` and copy the `google-site-verification=...` TXT value it gives you.
2. In the DNS provider → `delteris.com` → add a record:
   - Type: `TXT`
   - Name: `@`
   - Content: `google-site-verification=...` (the full string)
   - Save.
3. Back in Search Console, click **Verify**. (If it says "not found," wait a few minutes and retry.)
4. Data starts populating under **Performance** over the next few days.

> Note: the token in your screenshot (`google-site-verification=HPPvAvn5PXaSerob3x9o8GPHkaLs3N-P9wu1`) may have expired by the time you do this — always copy a fresh one from the current Search Console screen.

---
