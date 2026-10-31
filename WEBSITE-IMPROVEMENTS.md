# Website improvements to do

From the Search Console + Archon review of 31 Oct 2026 (Search Console: 3 months to 28 Oct; Archon: 7 days).
Full data and reasoning: project doc `claude/seo-research.md`, section 1b.
Ordered by importance within each section. Tick items off as they ship.

**Snapshot:** 34 search clicks / 3,810 impressions in 3 months (CTR 0.9%, avg position 30.4). 89 pages indexed.
Archon, last 7 days: 21 verified non-campaign visits; 0 video plays, 0 contact clicks, 0 update signups.
Spanish email follow-up: 85 sent → 5 verified visits → 4 video plays → 3 watched 75% → **0 contact clicks**.

---

## A. Housekeeping

- [ ] **1. (Deferred 31 Oct)** **Trial page: give people a next step after the video.** The video works (4 of 5 visitors played it, 3 watched 75%), but nobody contacted us afterwards. Add a clear, low-pressure action at or after the end of the video (reply prompt or "book 15 minutes"), matching the cold-email tone. This is the pending trial-page rework in MARKETING-TODO.md (`/es/atlas-free-trial.html` and the EN/PT versions). Small sample (5 people), but it's the biggest leak in the funnel.
- [ ] **2. Archon fixes (Rodrigo):**
  - Some Website rows show more verified than raw visits, which shouldn't happen: Português 1/0, `/deployment.html` 1/0, `/pt/resources/welding-positions/` 1/0.
  - Collector reports "Wrong origin: 21" beacons. Find where they come from (preview pages, localhost, a copy of the site?).
  - The Website view leaves out campaign traffic, so it shows 0 video plays while the campaign had 4. Show campaign plays there, or link to them.
- [x] **3. Root `heat-input-calculator.html` is now "crawled – currently not indexed".** It competes with the free tool `/resources/heat-input-calculator/` (pos 51, 2 impressions). Retitle the root page clearly as the Atlas helper and link it to the free tool so they stop splitting the search. No URL change. *Done 31 Oct: retitled EN/PT/ES as the Atlas "heat input window" (title, H1, crumb, schema name), short answer links the free calculator.*
- [x] **4. Redirect stubs still collecting impressions:** `security.html` (54 impr, pos 11.5, 1 click), `platform.html` (26), `pricing.html` (23), `wps-manager-contact.html` (3). Make sure each stub has a canonical link to its new URL so Google moves the ranking across. *Done 31 Oct: already had canonicals, meta refresh and sitemap: false. Nothing to change; wait for Google.*
- [ ] **5. (Deferred 31 Oct)** **Merchant listings: 8 invalid in Search Console.** The product markup is read as a shop listing (no shipping or returns fields). Mark the software up as `SoftwareApplication` with `offers` instead of `Product`. Low priority.
- [x] **6. Find the page ranking for "solteris network appliance"** (23 impr, pos 13.9). Unrelated name; check for stray copy. *Done 31 Oct: "Solteris" is nowhere on the site; Google matching "network appliance" (Elenchon platform/security copy) plus the Delteris/Solteris likeness. Nothing to fix.*
- [x] RSS feeds (`feed.xml`, EN/PT/ES) "not indexed": expected, nothing to do.

## B. Discoverability (by likely payoff)

- [x] **1. Welding positions chart: rewrite titles and descriptions (EN + PT).** *Done 31 Oct: EN/PT titles shortened under 60 chars, descriptions list every code (PA–PJ, PH, H-L045, J-L045). Also found the share image `welding-positions-chart.png` was never generated (404 for og:image and the schema ImageObject); generated with tools/welding-positions/og.py. ES untouched.*

  | Page | Impressions | Position | Clicks |
  |---|---|---|---|
  | `/resources/welding-positions/` | 201 | 7.3 | 0 |
  | `/pt/resources/welding-positions/` | 92 | 6.0 | 0 |
  | `/es/resources/welding-positions/` | 132 | 7.2 | 5 (3.8%) |

  The ES snippet works; copy its approach. Searches are for specific codes: 5F, PH, H-L045 / HL045, 1F, PF, ISO 6947, "welding positions chart", "pipe welding positions diagram". Name the code systems in the title (e.g. 1G–6G, 1F–4F, PA–PH, H-L045). Cheapest win on the site.
- [x] **2. Snippet pass on other page-one guides with no clicks:** *Done 31 Oct: validity guides retitled answer-first ("Do welder qualifications expire?") in EN/PT/ES. pWPS guides left: PT/ES were retitled with EN on 25 Oct, so they join the mid-November check.*
  - `/pt/resources/pwps-vs-wpqr-vs-wps/`: 76 impr, pos 6.7, 0 clicks
  - `/es/resources/welder-qualification-validity/`: 47 impr, pos 6.4, 0 clicks
  - `/resources/welder-qualification-validity/`: 178 impr, pos 11.8, 1 click
  - `/es/resources/pwps-vs-wpqr-vs-wps/`: 36 impr, pos 10.9, 0 clicks

  (The EN pWPS guide was retitled on 25 Oct; leave it until the mid-November check.)
- [x] **3. Directory listings (Capterra and similar).** Software category searches total about 800 impressions at positions 50–80 (welding shop management software 267, welding management software 142, weld traceability software 121, …). These won't move without authority; the directory category pages already rank for them. Kit: `claude/directory-listings.md`. Flávio creates the accounts. *Done 31 Oct: done earlier.*
- [x] **4. Heat-number guide: add a "how to mark heat numbers" section (EN/PT/ES).** Unanswered searches: "marcaje de número de colada" (13, pos 43), "marcado de número de colada" (pos 26.5), "heat number marking" (9, pos 47). The ES guide already sits at pos 17 (69 impr) and "numero de colada" at 9.5; this should push it onto page one. *Done 31 Oct: "How to mark heat numbers" section added (methods, stainless markers, where to mark, before-cut transfer); titles aimed at marking and material traceability.*
- [x] **5. New resource: weld/material traceability guide (learn intent, EN/PT/ES).** "welding material traceability" (72, pos 31), "weld tracability" (51, pos 34), "weld traceability software" (121, pos 35) currently land on a product page. A guide (mill certificate → heat number → weld) fits the intent better. Elenchon framing only (traceability is Elenchon's, not Atlas's). *Done 31 Oct: not built: the heat-number guide already is the mill cert → heat number → weld guide, so a second page would compete with it. Its EN title now leads with "Weld Material Traceability". "weld traceability software" is software intent and stays on the product page.*
- [x] **6. Fix the welder-qualification overlap.** Three pages split one intent: `welding-qualification-software.html` (568 impr, pos 44), `/resources/welder-qualification-management-software/` (74, pos 44.8), `welder-qualification-management-software.html` (13, pos 27). Pick one page per language and retitle or relink the others. No URL removals. *Done 31 Oct: `/resources/welder-qualification-management-software/` is already a redirect to the validity guide. Elenchon `welding-qualification-software.html` keeps "welding qualification software"; Atlas page retitled to own "welder qualification tracking" (EN/PT/ES).*
- [ ] **7. Mid-November: decide on "wpqr"** (203 impr, pos 55). The guide ranks 6–10 for "wpqr vs wps" combinations but 55 for bare "wpqr". Decide between the guide and a short dedicated page once the 25 Oct title change has had a month.
- [ ] **8. Keep `llms.txt` accurate.** Long chatbot-style questions are appearing as search queries.

## C. Next review

Mid-November: re-read Search Console (full tables), add a dated row to `claude/seo-research.md`, and check the effect of the 25 Oct pWPS retitle and of B1–B2.
