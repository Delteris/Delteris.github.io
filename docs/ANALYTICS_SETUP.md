# Analytics setup — delteris.com

You're getting **Cloudflare Web Analytics** (free, cookieless, no consent banner) plus **Google Search Console** (search keywords + rankings). The site code is already wired — you just need to do the account/DNS steps below, then paste one token.

---

## Part 1 — Move DNS from Namecheap to Cloudflare (~10 min, free)

Cloudflare Web Analytics is free and unlimited when your domain runs through Cloudflare. Your registrar stays Namecheap; only the nameservers change.

1. Create a free account at https://dash.cloudflare.com/sign-up
2. Click **Add a site**, enter `delteris.com`, choose the **Free** plan.
3. Cloudflare scans your existing DNS records. **Check them carefully** — it should show your GitHub Pages records. Confirm these exist (add any that are missing):
   - Four `A` records for the apex `delteris.com` pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` for `www` → `delteris.github.io` (or whatever your GitHub Pages target is)
   - Set the proxy status (orange cloud) to **Proxied** for the site to run through Cloudflare.
4. Cloudflare gives you **two nameservers** (e.g. `xxx.ns.cloudflare.com`). Copy them.
5. In **Namecheap**: Domain List → `delteris.com` → **Manage** → **Nameservers** → choose **Custom DNS** → paste the two Cloudflare nameservers → save (the green checkmark).
6. Wait for propagation (usually minutes, up to 24h). Cloudflare emails you when the site is **Active**.

---

## Part 2 — Turn on Cloudflare Web Analytics

1. In the Cloudflare dashboard, go to **Analytics & Logs → Web Analytics**.
2. Add `delteris.com`. Cloudflare shows a beacon snippet containing a **token** — a long string in `"token": "abc123..."`.
3. Copy just the token value.
4. Open `docs/_config.yml` in the site and paste it:
   ```yaml
   cloudflare_analytics_token: "abc123...your token..."
   ```
5. Commit + push. GitHub Pages rebuilds and the beacon loads on **every page** automatically (it's in the shared layout).
6. Visit https://delteris.com, then check **Web Analytics** in Cloudflare — your visit shows within a minute or two.

That's it — no cookie banner, no privacy-policy change needed (Cloudflare Web Analytics is cookieless and doesn't fingerprint).

---

## Part 3 — Google Search Console (the screenshot you had open)

This is separate from analytics: it shows what people search to find you and your Google rankings. Once you're on Cloudflare (Part 1), adding the TXT record is easy.

1. In Search Console, keep the **Domain** property for `delteris.com` and copy the `google-site-verification=...` TXT value it gives you.
2. In **Cloudflare** → `delteris.com` → **DNS → Records → Add record**:
   - Type: `TXT`
   - Name: `@`
   - Content: `google-site-verification=...` (the full string)
   - Save.
3. Back in Search Console, click **Verify**. (If it says "not found," wait a few minutes and retry.)
4. Data starts populating under **Performance** over the next few days.

> Note: the token in your screenshot (`google-site-verification=HPPvAvn5PXaSerob3x9o8GPHkaLs3N-P9wu1`) may have expired by the time you do this — always copy a fresh one from the current Search Console screen.

---

## Why this stack (vs. GA4)

Given delteris.com is a security-first, privacy-conscious B2B welding product, cookieless analytics fits the brand and avoids GDPR consent-banner overhead. GA4 is free too, but it uses cookies → you'd owe a consent banner and a privacy-policy update naming Google as a processor. Cloudflare gives you the core signal (visitors, sources, top pages, Web Vitals) with none of that. Search Console complements it with search-side data and is worth having regardless.

If you ever run Google Ads, revisit GA4 then — it pairs tightly with Ads. Until then, this is the clean path.
