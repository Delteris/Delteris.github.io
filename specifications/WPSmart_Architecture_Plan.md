# Second Product on delteris.com — Architecture, SEO, Positioning & Naming Plan

**Placeholder product:** "WPSmart" — a cloud **WPS management / registry** system (a Delteris product)
**Prepared for:** Flávio (founder) + CTO sign-off
**Date:** 2026-08-11 (rev. 2 — corrected to real scope after reading Elenchon code)
**Status:** Plan for approval — no site changes made yet

---

## 0. What WPSmart actually is (corrected)

WPSmart is **not** a WPS authoring/generator tool. Most shops already own their WPS templates,
and the market is saturated with authoring tools (WeldOffice, WeldAssistant, WeldNote, WPS Maker,
ProWrite…). WPSmart is a **management layer over the WPSs a shop already has**:

- **Define WPSs** and keep them in a central **WPS library** (the same library UX proven in
  Elenchon — `WpsLibraryScreen`, field-based filtering).
- **Parser-driven import** — the `latticecore` parser reconstructs a WPS form's ruled grid and
  reads its cells into structured fields, so uploading a stack of existing WPSs takes minutes, not
  days, and needs no "weird Excel spreadsheet" hand-entry. Batch import already exists
  (`BatchImportDialog`, `ImportTemplateWizard`).
- **Field extraction → real filtering.** Because the parser pulls values into fields (process,
  materials, ranges…), you can filter the library by actual criteria — e.g. find every WPS for
  **121 welding**, or **121 + 135 backing-pass** — instead of scrolling filenames. (`WpsFieldFilter`
  is exactly this in Elenchon.)
- **Upload PQRs for display, not capture.** PQR *capture* stays **Elenchon's** territory. In
  WPSmart, PQRs are **uploaded and shown nicely** (a "fancier display of the uploaded PQR"),
  linked to their WPS. We may drop the structured PQR *fields* entirely since there's no floor
  capture to populate them — just a clean PDF-style viewer/transfer.
- **Print PQR results to PDF** for easy viewing/transferring (convenience, not authoring).
- **Excel-style builder + light authoring — PLANNED.** One builder does double duty: define
  headers → an automatic styling script renders them → the cells become the WPS parameters.
  Essentially "Excel ported into the cloud, simpler, with automatic styling." It powers both
  bulk WPS management (import/export) **and** basic WPS **authoring** — you can write a WPS, not
  just store one. *Flagged as roadmap on the site until it ships; don't claim it live yet.*

**Authoring is deliberately secondary.** WPSmart *will* let you author WPSs, but that is a
**commodity capability, not the pitch** — writing the WPS document isn't the hard part, so we
don't lead with it or over-invest in it. **We explicitly do NOT do range derivation** (deriving
qualified ranges from a PQR) — that's the genuinely hard, high-workload part, it's out of scope,
and it stays **Elenchon's** territory. Site copy must never imply WPSmart "derives ranges,"
"qualifies procedures," or "figures out your variables." It writes and manages the documents;
it does not do the metallurgy.

**Onboarding is white-glove, by design — and it's a selling point, not a caveat.** The parser is
**company-specific per WPS template**. Today only the CSWind profile exists; a generalized parser
is built up over time as more templates are seen. So onboarding is **not** self-serve signup:

1. Customer agrees to buy → sends a few of their real WPS documents.
2. We confirm the parser reads their template and tweak the profile as needed.
3. Only then are they live — so import is proven to work on *their* paperwork before they commit.
4. Everything is **100% confidential**.

This is why the CTA is **"contact the founders to secure a cloud tenancy,"** not a signup button.
In a market full of "sign up and figure it out yourself" tools, guaranteeing the import works on
*your* WPS first is a **trust-builder**. It also dissolves the earlier "company-agnostic parser is
a launch gate" worry — it's not a gate, it's the **onboarding model**: per-customer white-glove
parser setup, generalizing as we accumulate templates. (The site must frame this as a benefit —
"we make sure it works for your WPS first" — never as "the parser only supports one company.")

**One-line positioning:** *The fast, organized home for every WPS you have — upload, auto-extract,
author, and find any procedure in seconds.* Hero = **integration & organization**. Authoring is a
listed capability, never the headline; range derivation is out of scope by design.

> Code note: the only parser profile shipped today is `cswind.py` (company-specific). WPSmart is a
> Delteris product sold to any shop — it needs **company-agnostic profiles / a generic profile
> path** before launch. Flagging for the CTO; this is a product gate, not a website issue.

---

## 1. Does a second product / products page hurt SEO? No.

Adding a product never hurts SEO by itself. Three specific, avoidable things do:

| Risk | What it is | Our mitigation |
|---|---|---|
| **Homepage dilution** | A second product on the homepage blunts its "welding traceability" focus. | Homepage stays 100% Elenchon. WPSmart gets its **own** pages. |
| **Keyword cannibalization** | Two pages chasing the same query compete and both rank lower. | **Now a near-non-issue** — see §3. WPSmart targets *WPS management*, Elenchon targets *authoring + full qualification*. Different intents. |
| **Thin / orphaned hub** | A shallow "Products" mega-page is worse than none. | Light nav dropdown, not a mega-page; one deep landing page per product. |

A second product under one authoritative domain is an SEO **asset** — more related, indexed
pages feeding one domain — as long as each targets a distinct keyword cluster.

---

## 2. Current site (audited 2026-08-11)

Jekyll static site under `docs/`, EN + PT, already strong for SEO. "Elenchon" ~354× vs "Delteris"
~159× — the site currently behaves as a **single-product site**; Elenchon is never surfaced as a
*selectable* product. Nav today: `Platform · Security · Pricing · Deployment · Roadmap ·
Resources · [Contact]`. Mature keyword-page cluster, each with JSON-LD schema and an EN/PT copy
(`welding-traceability-software`, `welding-qualification-software`, etc.). WPS currently appears
only as an *Elenchon feature* (pillar #4 on `platform.html`; `welding-qualification-software.html`).

We're converting a single-product site into a **two-product house-brand site** — a nav +
architecture change, not just one more page.

---

## 3. Cannibalization — corrected, and now in our favor

The real scope makes the split clean, because WPSmart is *management* and Elenchon is *authoring +
qualification + capture*. Barely any keyword overlap:

| Page | Buyer / intent | Owns these keywords | Does NOT target |
|---|---|---|---|
| `welding-qualification-software.html` (**Elenchon**) | Wants the *full* loop — define WPS/WPQR, **capture PQR on the floor**, continuity, traceability, on-premise | "welding qualification software", "WPQR software", "PQR capture", "welder qualification management" | standalone "WPS management" |
| `wps-management-software.html` (**WPSmart**) | Already has WPSs; wants them **organized, searchable, in the cloud, cheap** | "WPS management software", "WPS library / register / registry", "organize WPS", "WPS document management", **"WPS PDF import / WPS parser"**, "find WPS by process/material" | *range derivation*, PQR *capture*, full qualification/continuity |

**On authoring keywords:** WPSmart *can* author, so a light secondary claim on "create/write a
WPS" is fair — but we **don't build the page around it** and don't spend a whole page competing in
the crowded authoring field (WeldAssistant, WPS Maker, ProWrite). The hard, defensible boundary
that keeps WPSmart clear of Elenchon is **range derivation**: WPSmart writes and organizes WPS
*documents*; it never derives qualified ranges or handles PQR capture/continuity. That line is
what keeps the two products' keywords from truly colliding — Elenchon owns the metallurgy and the
floor; WPSmart owns the filing cabinet and a simple pen.

**Interlink deliberately:**
- Elenchon qual page → "Only need to organize existing WPSs? See WPSmart →"
- WPSmart page → "Need to capture PQRs on the floor & track full qualification? See Elenchon →"
  (this is also the natural **upsell path**: WPSmart → Elenchon.)

Same tech, two narratives, two buyers, two keyword clusters, one domain — they lift each other.

---

## 4. Architecture

### 4.1 Nav — light "Products" selector
```
[Delteris]  Products ▾  Security  Pricing  Deployment  Roadmap  Resources  [Contact]
             ├─ Elenchon — Traceability, qualification & floor capture  → /platform.html
             └─ WPSmart  — WPS management & library (cloud)             → /wps-management-software.html
```
"Platform" folds into the dropdown as "Elenchon." Dropdown, not a `/products/` page (avoids the
thin-hub problem). Localized EN/PT, keyboard + mobile accessible, matching the `nav.html` include.

### 4.2 URLs — flat, keyword-rich (site already does this)
- **Don't move** Elenchon's existing pages (they hold ranking equity).
- WPSmart money page: **`/wps-management-software.html`** (+ `/pt/…`). URL = keyword, brand = on-page.
- Optional later companions, same convention: `/wps-library-software.html`,
  `/wps-pdf-import.html` (the parser hero).

### 4.3 Schema
`_includes/schema/wps-management-software.json` — `SoftwareApplication`/`Product`, **Delteris as
brand/publisher**, so Google + AI search parse "Delteris makes two products."

---

## 5. The parser is two stories — handle separately
1. **Inside Elenchon = a feature.** "Automatic WPS import" as a bullet on `platform.html` pillar #4
   and `welding-qualification-software.html`. Reinforces existing keywords. Ships anytime.
2. **As WPSmart = the hero.** Fast parser-driven import + field extraction *is* the product's
   reason to exist and an **un-owned** market angle (nobody leads with ingestion speed +
   filter-by-field). It anchors the WPSmart H1 and funnel.

---

## 6. Pricing — the $50 vs $80 decision

Your framing: **$50/mo is the 90%-conversion range** but "doesn't really go for full sustenance";
**$80/mo** sustains better but converts fewer. Here's how I'd break the tie.

**Market context (researched):** the WPS/welding-software field spans from cheap self-serve up to
Weldex's ~€580/mo unlimited-user tier and quote-only enterprise (WeldEye, Prometheus). At **$50–80**,
WPSmart is unambiguously the **cheap, easy, self-serve** option — which is exactly the position you
want and *nobody* is loudly occupying for pure WPS management. Both prices land in "cheap." So the
question isn't "will $80 scare people off the category" — it's "does the extra $30 cost more
conversions than it earns."

**Recommendation: don't pick one price — pick a structure that captures both.**

- **List at $79/mo, anchored, with an annual discount to ~$59/mo effective** ($708/yr billed
  annually vs $948 monthly). This is the standard SaaS move: the $79 monthly number sets the value
  anchor and sustains you on month-to-month users; the annual price *is* your $50-ish
  high-conversion number, and annual billing improves cash flow and retention — the two things
  "sustenance" actually needs. You stop choosing between conversion and sustenance; you get the
  high-conversion price for committers and the sustaining price for casuals.
- **If you must pick a single flat number:** go **$79**, not $50. Reasoning: (a) at this price point
  the buyer is deciding on *value/fit*, not $30; the parser-saves-you-days story easily justifies
  $79 for a shop that bills hundreds/hour. (b) $50 leaves money on the table from the exact
  customers who value it most and undercuts the "sustenance" you flagged as the real goal. (c)
  Raising price later annoys existing customers; launching a touch higher and discounting (annual,
  launch promo) is far easier than the reverse. Loss of a few price-sensitive conversions at $79 is
  cheaper than permanently capping revenue at $50.
- **Either way, put a real number on the site.** Transparent pricing is a documented conversion and
  trust win in B2B and a differentiator — most WPS competitors hide behind "contact us." Delteris
  already publishes full pricing; WPSmart should too.

Net: **$79 list / ~$59 annual-effective.** It resolves the rock-and-hard-place instead of splitting
the difference at $65.

*(Open input needed from you: is WPSmart per-org flat, or per-user/per-seat? The recommendation
above assumes a flat per-org price, matching "cheap and simple.")*

---

## 7. Product name — alternatives to "WPSmart"

**DECIDED: the product is named "Elenchon WPS Manager"** — a sub-brand under Elenchon under
Delteris, not a separate coined brand.

Why this beats the coined names (Kanon, Procedon, WPSvault) we explored:
- **SEO win:** the name literally contains "WPS Manager" — the target keyword — so brand searches
  and keyword searches converge instead of splitting, and it borrows Elenchon's existing domain
  authority directly (no orphan brand starting from zero).
- **No trademark/`.com` scramble:** lives on delteris.com under the Elenchon brand already owned.
  The Kanon/Canon collision is moot.
- **Honest positioning + built-in upsell:** the name states the relationship — this *is* the
  Elenchon WPS stack sold standalone — so "upgrade to full Elenchon" is self-evident.
- **The cloud-vs-on-premise tension dissolves** given Elenchon-cloud is a real future direction
  (Flávio, this session): WPS Manager becomes **Elenchon's first cloud offering**, not a cloud
  product awkwardly wearing an on-premise brand. On-premise stays today's flagship deployment;
  full Elenchon cloud follows later. The name sets that story up rather than fighting it.

**Copy convention:** render **"Elenchon WPS Manager"** in nav/UI/copy; keep the **URL** as
`/wps-management-software.html` (name and keyword doing their separate jobs, as the rest of the
site already does). Coined names retired — only revisit if the product is ever spun out as a fully
independent brand, which nothing currently suggests.

---

## 8. Build order (once name, price, scope approved)
1. **Nav** → Products dropdown, EN+PT; Platform→Elenchon.
2. **WPSmart landing page** `/wps-management-software.html` (+PT): hero = parser + findability,
   sections = upload/auto-extract, field filtering, WPS library, PQR upload+display, PDF export,
   **Excel-style builder + basic authoring as "coming soon"** (secondary — a capability line, not
   a headline), transparent price, CTA to signup. Copy must **not** imply range derivation or
   qualification. Keyword-targeted per §3, interlinked with Elenchon's qual page.
3. **Schema** JSON-LD for the new page.
4. **Elenchon-side parser feature copy** on `platform.html` + `welding-qualification-software.html`.
5. **Interlink / internal-link** cross-links (§3).
6. **Sitemap** — auto via `jekyll-sitemap`; confirm new pages appear.
7. **Verify** — no two pages share a primary keyword (grep titles/descriptions/H1s); EN/PT
   `en_url`/`pt_url` wired; JSON-LD valid; nav renders on mobile; **no claim on the site for the
   Excel builder or company-specific-only parsing that isn't shipped.**

Steps 1–2 = minimum viable launch; 3–7 complete it.

---

## 9. Open questions for you / CTO
1. **Name** — leaning **Kanon**; check `.com` + trademark, watching the **Canon** collision.
   Fallback: Procedon.
2. **Price structure** — confirm $79 list / annual discount (my rec) vs a flat number; **per-org
   or per-seat?**
3. **Cloud-vs-on-premise framing.** The Elenchon site sells **on-premise sovereignty** as the #1
   differentiator; WPSmart is **cloud**. Need one clean line on why one company sells both
   (proposed: *"Elenchon is the sovereign, on-premise system of record for shops that need full
   traceability; WPSmart is a lightweight cloud tool for shops that just need their WPSs organized —
   different jobs, same team."*). Agree framing before copy.
4. **Shared account / upgrade path?** Does WPSmart share login/data with Elenchon (enables a real
   "upgrade to Elenchon" funnel), or fully separate?
5. **Company-agnostic parser** — the shipped profile is `cswind.py` only. A generic/self-serve
   profile path is a launch gate for a sold-to-anyone product. (Product, not website.)
6. **PQR fields** — confirm we're dropping structured PQR fields in WPSmart in favor of upload +
   nice display, so the site copy describes it accurately.
7. **Signup/CTA destination** — where does the WPSmart CTA point (app signup URL vs contact)?
```
