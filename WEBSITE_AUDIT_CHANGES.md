# Website Audit — Changes Applied (30 Jul 2026)

Every issue from the list, what changed, and where. All edits are in `docs/`.

## 1. Data sovereignty → reference NIS2
- `index.html` — Manufacturing Sovereignty Mandate paragraph now names EU directives such as **NIS2** (control over access, encryption, supply-chain exposure).
- `on-premise-welding-software.html` — "Sovereignty Regulators Increasingly Expect" section now names **NIS2** explicitly instead of vague "tightening EU expectations."

## 2. Offline capture on the main page
- `index.html` — Work Capture pillar card now states capture is **offline-first** (floor keeps recording when the connection drops). Previously the homepage only mentioned the offline document *viewer*.

## 3. Tekla / CAD rewording
- `index.html`, `platform.html` — "Tekla or CAD" → "Tekla or any (other) CAD package."
- `weld-project-structure-software.html` — meta description, og:description, section heading ("BOM Import from Tekla & Other CAD"), and FAQ question reworded so Tekla isn't implied to be separate from CAD.
- `llms.txt` — matching updates.

## 4. Remove credit speak from priced-in-the-open (homepage)
- `index.html` — "a written uptime credit scale" → "every add-on in plain euros"; bullet "Contractual uptime credits, applied automatically" → "Written 99.9% uptime commitment, engineered for better."

## 5. Rename fit-up → fitting
- `index.html`, `platform.html`, `welding-work-capture-software.html` — every "fit-up" → "fitting" (body copy, meta, FAQ).
- NOTE: this covers the **website only**. The audit item said "across both apps" — the in-app i18n rename (Elenchon `en.json`/`pt.json` + UI) is a separate codebase change; say the word and I'll do it there.

## 6. "Shop floor weld data capture software" → workflow app
- `platform.html` — cross-link "See shop-floor weld data capture in depth" → "See the workflow app in depth."
- `welding-work-capture-software.html` — hero eyebrow "Shop-Floor Work Capture" → "The Workflow App."
- KEPT (deliberately): the page `<title>`, meta description, H1, the bolded one-sentence definition, and the FAQ question still carry "shop-floor weld data capture software." That exact phrase is the page's SEO/GEO target term (it's what the page ranks and gets cited for). Removing it there trades ranking for voice. If you want the H1/title changed too, tell me and I'll swap it — just flagging the tradeoff.

## 7. "We import your first projects" removed
- `deployment.html` — Onboarding & Go-Live step reworded: "We configure roles with your managers and train floor personnel, so your team is productive from day one…"

## 8. "International deployment" wording thinned
- `deployment.html` — trimmed the EU-and-beyond/travel-range/custom-fee sentence to a single clean clause. The travel-fee detail still lives where it belongs — the pricing page footnote (a cost, not flow-copy).

## 9. Billing: after the month, 12×/year
- `pricing.html` — new FAQ card "When does billing start?": nothing charged at deployment except install + training; subscription starts after go-live; first monthly invoice on the **1st or 15th, whichever is furthest** from go-live; **12 invoices/year**, no 28-day cycles, no thirteenth invoice.
- `llms.txt` — matching billing line added.

## 10. "Remote access is provisioned remotely" AI artifact
- `pricing.html` — On-Site Commute Fee card → "Covers on-site **visits for any reason** — scoping, deployment, training, or hands-on support at your facility."

## 11. Multi-factory FAQ (answer: no)
- `pricing.html` — new FAQ card "Can one appliance run multiple factories?": No, by design — each appliance is a single cryptographically isolated tenant scoped to one facility; sharing across sites would dissolve the isolation/sovereignty that keeps records audit-clean. A second facility gets its own appliance.

## 12. Security add-ons available to non-customers
- `pricing.html` — Professional Services footnote now states network + post-quantum security consulting **do not require running Elenchon** and are available to any organisation as standalone engagements.
- `llms.txt` — matching note added.

## 13. Phrakton-down claims removed + uptime section reframed
This was the big one. The site claimed a fabric outage only affects *remote* access and the floor keeps running locally — false, since even a LAN worker reaches the app through the box tunneler/Caddy over Phrakton (per your own security diagram).
- `pricing.html` — uptime section subtitle rewritten (fabric carries every connection; we run it, commit to 99.9%, engineer for ~100%, credits on shortfall). Removed the false "a fabric outage never stops work on the shop floor" line from the footnote. Rewrote the "What if the fabric goes down?" FAQ card to drop the "runs locally, only affects outside access" claim.
- `security.html` — Reliability section reframed to the same honest posture.
- `on-premise-welding-software.html` — "Does it work offline?" reworded (devices reach the appliance through Phrakton; offline **capture** survives a connection *drop* — kept distinct and true). "What is on-premise…" reworded off "keeps working whether or not you have an internet connection."
- `welding-software-on-premise-vs-cloud.html` — "served over your own network" / "floor keeps working with no connection" reworded to the accurate capture-survives-a-drop framing.
- The uptime section's core message is now: **yes, uptime matters — we guarantee it and engineer for as close to 100% as possible, backed by automatic credits.** No entanglement with false "work continues during a fabric outage" claims. The offline-capture (connection-drop) story stays intact and separate.

## 14. Button spacing — NOT changed (needs your eyes)
I read every candidate in the CSS: `.deploy-note` (1rem), `.hero-urgency` (1.5rem), `.price-cta` (2rem list margin + card padding) — all have adequate spacing on inspection. I couldn't render the live site from here (no Jekyll/headless browser in the sandbox), and you said to be discretionary and leave the ones that look fine. So I made **no blind CSS changes**. Point me at the specific button that's too tight and I'll fix that one precisely.

## 15. Housekeeping
- `docs/.gitignore` — added `_r_*.html` so stray render artifacts never get committed.
- **ACTION NEEDED (you):** delete three leftover render files I created for a rendering attempt but couldn't remove from here:
  `docs/_r_index.html`, `docs/_r_pricing.html`, `docs/_r_deployment.html`.
  In PowerShell from the repo: `Remove-Item docs\_r_*.html`
  (Jekyll ignores `_`-prefixed files, so they don't affect the built site — but clean them up anyway.)

## Verification run
Grepped the tree (excluding the render leftovers) — zero remaining: "fit-up", "provisioned remotely", "import your first", loose "Tekla or CAD", or the false outage claims. NIS2 present in both target pages. Offline-first present on homepage. Billing note present. All `<div>` counts balanced on the nine edited pages.
