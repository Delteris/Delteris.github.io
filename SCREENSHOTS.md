# WPS Manager — App Screenshot Capture Guide

> **Status (28 Aug 2026):** 10 of 11 shots captured and live on the site —
> `overview`, `import`, `review`, `register`, `library`, `pqr-chain`,
> `heat-input`, and the three security shots (`security-audit`,
> `security-users`, `security-settings`). **Still needed: `preview`** (the
> split-view). Its slot on `/wps-preview-verification` shows a placeholder
> until you drop `preview.webp` into `docs/static/wpsm/`.


This guide lists **exactly which app screens to capture**, how to shoot them,
and **where each file goes on the website**. The website already has framed
`<img>` slots wired in and pointing at `/static/wpsm/<name>.webp` — once you
export a file with the matching name into `docs/static/wpsm/`, it appears in the
frame automatically. No HTML editing needed to publish a shot; just drop the file in.

---

## Capture settings (read once, applies to every shot)

- **Browser width:** set the app window to **1440 px** wide, then capture the app
  content area only (not the OS chrome / browser tabs). Target image width **1400 px**.
- **Zoom:** browser at **100%**. Don't zoom the page to fake density.
- **Theme:** capture in the app's normal (dark) theme so it matches the site.
- **State:** use a **realistic but clean** register — 15–40 WPSs, sensible names,
  no `test test` / `asdf` rows, no half-typed fields. Demo data is fine; junk data is not.
- **Personal data:** scrub anything you wouldn't put on a public marketing page —
  real client names, real welder names, internal notes. Rename to neutral placeholders
  (e.g. `Client A`, `WPS-114-3`).
- **Crop:** tight to the meaningful UI. Leave a little breathing room, no giant empty margins.
- **Format & size:** export **`.webp`**, quality ~82. Keep each file **under ~250 KB**.
  Aim for **1400×~900** (roughly 16:10). Wide shots (marked below) can go **1600×~1000**.
- **Filename:** use the **exact** name in each section below. Lowercase, no spaces.

Quick conversion (if you export PNG first):

```bash
# from docs/static/wpsm/
cwebp -q 82 overview.png -o overview.webp
# or with ImageMagick:
magick overview.png -quality 82 overview.webp
```

Put the finished `.webp` files in: **`docs/static/wpsm/`**

---

## The shots

### 1. `overview.webp` — Overview dashboard  *(lands on the landing page hero + on /features)*
**Screen:** the app **Overview** screen.
**Must show:** the greeting header, the **“Needs attention”** notification cards, and the
**“At a glance”** stat tiles — **WPS / pWPS / WPQR / qualified** counts.
**Why:** it's the first impression — “this is a real, populated system.”
**Aspect:** standard (1400×~900).

### 2. `import.webp` — Import in progress  *(feature: Import)*
**Screen:** the library **mid-import**.
**Must show:** one **Excel** and one **PDF** WPS being brought in side by side, and the
**“added — N fields to check”** toast/confirmation if you can trigger it.
**Why:** proves both formats are native.
**Aspect:** standard.

### 3. `review.webp` — Review change-set  *(feature: Review — the money shot, WIDE)*
**Screen:** the **review queue** for an import.
**Must show:** the change-set table with the **Cell / Field / Current / New / Apply?**
columns, and at least one **amber low-confidence row** visible.
**Why:** this is the single most differentiating screen — “nothing lands without approval.”
**Aspect:** **WIDE** (1600×~1000).

### 4. `register.webp` — Register grid  *(feature: Register)*
**Screen:** the **Registers** grid view of a master sheet.
**Must show:** the readable grid, the **v1 / v2 / v3 version selector**, and the **Export** button.
**Why:** shows the versioned, exportable register.
**Aspect:** standard.

### 5. `library.webp` — Library detail  *(feature: Library — WIDE)*
**Screen:** the **Library** with a document open.
**Must show:** the **WPS / pWPS / WPQR** tabs, a selected doc showing **header fields + the
pass table** (with side / role columns), the **facet/filter panel** open, and an
**“N revisions”** chip if one is visible.
**Why:** shows depth — “it actually understands the document.”
**Aspect:** **WIDE** (1600×~1000).

### 6. `preview.webp` — Preview split view  *(feature: Preview — WIDE)*
**Screen:** **Preview** mode on any WPS.
**Must show:** the **split screen** — parsed fields on the **left**, the **real PDF/Excel
source on the right**. Bonus: align an **amber (low-confidence) field** with its cell in the source.
**Why:** proves the parse is verifiable against the original.
**Aspect:** **WIDE** (1600×~1000).

### 7. `heat-input.webp` — Heat input helper  *(feature: Heat Input)*
**Screen:** the **Heat Input** helper.
**Must show:** the **current / voltage / travel-speed sliders** with a **PQR range set** and the
**live computed result**; ideally one slider sitting **at its clamp limit**.
**Why:** shows the “can't leave the qualified window” safety.
**Aspect:** standard.

---

## Optional extras (nice to have, not required)

- `pqr-chain.webp` — a WPS showing its **linked WPQR + pWPS chain** (feature: The Whole Linked Set).
- `export.webp` — the **export dialog / resulting zip** (register workbook + linked files folder).

If you capture these, tell me and I'll wire matching frames into the Library / Register
feature cards.

---

## After you drop the files in

1. Copy each `.webp` into `docs/static/wpsm/`.
2. Commit and push — GitHub Pages rebuilds automatically.
3. The frames un-hide the moment the file exists at the expected path; the dashed
   “Screenshot” placeholder only shows while the file is missing.

**Naming recap (must match exactly):**
`overview` · `import` · `review` · `register` · `library` · `preview` · `heat-input`
(optional: `pqr-chain` · `export`)
