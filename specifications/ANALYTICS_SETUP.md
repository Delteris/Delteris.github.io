# Analytics — delteris.com

Two systems run side by side, each for what it is good at:

| | Cloudflare Web Analytics | Campaign metrics (Archon) |
|---|---|---|
| answers | how much traffic, from where (referrers, countries), devices, page speed | which **e-mail campaign** brought visits, video plays, contact clicks, signups; visits per 100 e-mails |
| where | Cloudflare dashboard → Web Analytics | https://archon.delteris.com → Email campaigns / Website (login + 2FA) |
| switch | `cloudflare_analytics_token` in `docs/_config.yml` | `metrics_endpoint` in `docs/_config.yml` |
| campaign tags | no (Cloudflare drops the query string) | yes (`utm_*` from mailspam links) |

Both are cookieless, so no consent banner. Privacy policy §2, §3.4 (ours) and §3.5 (Cloudflare) in EN/ES/PT
describe them; `terms.html` §8 summarises.

## Cloudflare Web Analytics

1. Cloudflare dashboard → Analytics & Logs → Web Analytics → add site `delteris.com` (JS snippet, not the
   automatic proxy setup) → copy the `token` from the snippet.
2. Paste it into `docs/_config.yml` → `cloudflare_analytics_token: "<token>"` and push to `main`.
3. `_layouts/default.html` then adds `beacon.min.js` (deferred, end of `<body>`) to every page.

The beacon loads after `main.js` has removed the `utm_*` tags from the address bar, which doesn't matter:
Cloudflare ignores query strings anyway. Campaign numbers come from Archon only.

## Campaign metrics (Archon)

Decided 22 Oct 2026: **in-house campaign analytics** for the e-mail campaigns, alongside Cloudflare.
Anonymous daily totals on our own EU server (Archon, repo `Delteris/Archon`, dashboard
https://archon.delteris.com → Email campaigns / Website, behind login + 2FA). No cookies, no storage on the
visitor's device, no IPs, no profiles.

### How it works

- `docs/_config.yml` → `metrics_endpoint: "https://archon.delteris.com/c"` (blank = off). Archon allows beacons only
  from the origins in its `METRICS_ALLOWED_ORIGINS` (default `https://delteris.com,https://www.delteris.com`).
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

### Tagging links

Campaign e-mails get tags from mailspam (`InternalTools/mailspam/mailspam/tracking.py`):
`?utm_source=email&utm_medium=cold&utm_campaign=<name>&utm_content=video|trial|site`.
Any other link you want to measure (LinkedIn post, a PDF) just needs a `utm_campaign`; values must be
lowercase `a-z 0-9 . _ -`, max 48 characters, or the server drops the beacon.

### If the site ever gets a referrer policy

Beacons are cross-origin POSTs and the server requires the `Origin` header. A page-wide
`<meta name="referrer" content="no-referrer">` makes browsers send `Origin: null`, which the server
refuses. Keep the default policy (or `strict-origin-when-cross-origin`).

## Rejected

- Cloudflare alone for campaigns: it drops the query string, so it can't tell which e-mail a visit came from.
- Separate landing paths per e-mail (`/es/correo/N/`): more pages to keep, and still no video/contact events.
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
