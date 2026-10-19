---
update_product: atlas
lang: en
version: "Atlas 1.2"
date: 2026-10-19
# DRAFT: hidden preview. To publish: delete the next three lines, set permalink to
# /atlas/updates/1-2/ and en_url to match, add pt_url/es_url and an image.
preview: true
noindex: true
sitemap: false
permalink: /atlas/updates/1-2-preview-k7m2x9/
title: "Atlas 1.2: Read Any WPS Form, and Lose Nothing on It | Elenchon Atlas"
heading: "Atlas 1.2: read any WPS form, and lose nothing on it"
description: "Atlas 1.2 reads WPS forms it has no template for, keeps every field it can't name for you to sort, remembers your forms' wordings, and previews a re-parse before anything changes."
summary: "Atlas can now read a WPS from a form it has never seen, keep every field it can't name for you to sort, remember how your forms word things, and show a re-parse side by side before anything changes."
chip: "New in Atlas 1.2: read any WPS form"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
---
## Any form: no template needed

Atlas reads your WPS through a template tuned to your form. That stays, and your template reads exactly as it did. Atlas 1.2 adds one more choice beside it: **Any form**, for a form nobody has built a template for yet. A supplier's WPS, an older layout, the forms of a company you just took over.

It reads the layout from the file itself: the cells of an Excel workbook, or the lines and word positions of a text PDF. It finds the labels it knows, in English, Portuguese or Spanish, and takes the value beside, below or inside each one. Then it checks the value has the right shape for that field: a date where a date belongs, an ISO 4063 process number where a process belongs.

- **Blank before wrong.** If it isn't sure of a field, it leaves it empty. A blank takes a reviewer seconds to fill; a wrong value can go unnoticed.
- **The whole form:** the full ISO 15609-1 detail set, the run table, base materials, fillers, shielding gas and flux, with pass roles and heat input worked out as they are with your template.
- **Awkward layouts too:** PDFs typed without table lines, a caption and its value in one cell, forms that run over several pages.
- **Same rules as the rest of Atlas.** No OCR, so a scanned PDF is stored but not read. No AI: the same file always gives the same result, and it can't write a value that isn't on the page.
- **Pick it per import.** It's in the template list when you add a WPS or re-parse one.

<!-- SCREENSHOT: Add WPS dialog with "Any form" selected -->

<p class="feature-note">What it is and isn't: Any form copies values off your form into Atlas. It doesn't check them against a standard or decide whether a WPS is right. Review each import as you do today.</p>

## Nothing on the form gets dropped

Every form carries a few lines no standard field matches: a purging gas, an in-house reference, a note. Atlas now keeps them on the WPS, under **Other fields on this form**.

- **You see what's waiting.** A notice at the top of the WPS says how many need a decision, with a Review button, and the Library marks each of those WPS with an *N to sort* pill.
- **Three choices per field:** add it to an empty field (Atlas suggests the likely ones first: *Purging* points to backing gas, *Diameter* to the pipe range), keep it as a field of its own, or delete it.
- **Nothing is retyped.** The value comes straight from the form.

<!-- SCREENSHOT: the Other fields notice, and one field with Add / Keep / Delete -->

## Atlas remembers your wordings

When you add an Other field to a standard one, Atlas remembers that wording for your organisation. The next form that says *Purging* fills backing gas by itself.

- **Exact wording only.** *Purging* doesn't stretch to *Purge gas*. Near-misses are where wrong values come from.
- **Yours, and in view.** The list is in Settings → Templates → Form wordings, and an admin can remove any entry. Your wordings never change how Atlas reads another customer's forms.
- **Optional: help us improve the reader.** An admin can download a wordings report and send it to us. It holds labels and counts only, never values or documents. We review what comes in, and wordings that several companies share go into a later Atlas release, for everyone.

## Re-parse with a preview

When you re-read a WPS, with another template or after a reader update, Atlas now shows the current read and the new one side by side, field by field, before anything changes.

- **Differences or everything:** filter to what changed, or see every field.
- **Nothing is saved until you choose:** *Apply new read* or *Keep current read*.
- **Your corrections stay visible.** A field you fixed by hand that the new read would replace shows up as a difference, so you see it before you choose.

<!-- SCREENSHOT: re-parse preview, current and new read side by side -->

## Smaller changes

- **N/A fields are shown.** A field your form marks N/A now appears on the WPS, so it reads like the form. If you'd rather not see them, hide them for yourself in Settings → Templates → WPS display, or on one WPS with its Show N/A / Hide N/A switch.
- Everything new is in English, Portuguese and Spanish.

## Availability

Atlas 1.2 is live for every Atlas customer, at no extra cost: same flat price, no per-seat fees. Have a form you'd like to see it read? Limited offer: [a free trial](/wps-manager-contact.html), with your data imported for you.
