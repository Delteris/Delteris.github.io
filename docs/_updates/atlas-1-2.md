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
title: "Atlas 1.2: A Sharper WPS Reader, and Nothing Left Behind | Elenchon Atlas"
heading: "Atlas 1.2: a sharper WPS reader, and nothing left behind"
description: "Atlas 1.2 reads more of every WPS form on its own, keeps everything on the form it can't place for you to sort, and remembers how your forms word things."
summary: "The reader behind your WPS imports is rebuilt: less to fill in by hand, new forms read from the first import, and nothing on the form left behind."
chip: "New in Atlas 1.2: a sharper WPS reader"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
---
## A sharper reader for your WPS

Atlas reads your WPS straight from your own forms, so nobody retypes a procedure. In 1.2 the reader behind that is rebuilt, and it gets more of every form right on its own.

- **Less to fill in by hand.** More of each WPS lands in Atlas when you import it, down to the details further down the form: tack welding, weaving, torch angle, post-heating, heating and cooling rates.
- **New forms read from the first import.** A supplier's WPS, a revised layout, the forms of a site you've just taken on: Atlas reads them straight away, without waiting for us to set it up for that form.
- **Still no guessing.** Where Atlas isn't sure of a value, it leaves the field blank for you instead of filling it wrong.
- **What you have stays as it is.** Nothing you've already imported changes. If you re-read a WPS, you see what would change first.

<!-- SCREENSHOT: a freshly imported WPS with the detail fields filled -->

## Nothing on the form gets left behind

Every form carries a few lines that no standard field matches: a purging gas, an in-house reference, a note. Atlas now keeps them on the WPS, under **Other fields on this form**, instead of leaving them out.

- **You see what's waiting.** A notice at the top of the WPS says how many need a decision, with a Review button, and the Library marks each of those WPS with an *N to sort* pill.
- **Three choices per field:** add it to an empty field (Atlas suggests the likely ones first: *Purging* points to backing gas, *Diameter* to the pipe range), keep it as a field of its own, or delete it.
- **Nothing is retyped.** The value comes straight from the form.

<!-- SCREENSHOT: the Other fields notice, and one field with Add / Keep / Delete -->

## Atlas remembers how your forms say things

Every company words its forms its own way. When you add an Other field to a standard one, Atlas remembers that wording for your organisation, and the next form that says *Purging* fills backing gas by itself. The more you import, the less there is to sort.

- **Yours, and in view.** The list is in Settings → Templates → Form wordings, and an admin can remove any entry.
- **Yours alone.** Your wordings never change how Atlas reads another company's forms.
- **Optional: help us improve the reader.** An admin can download a wordings report and send it to us. It holds labels and counts only, never values or documents. Wordings that several companies share go into a later Atlas release, for everyone.

## Smaller changes

- **Re-reading a WPS asks first.** Atlas now shows the current read and the new one side by side before anything changes, filtered to the differences or showing every field. Nothing is saved until you choose *Apply new read* or *Keep current read*, and a field you fixed by hand that the new read would replace shows up as a difference.
- **N/A fields are shown.** A field your form marks N/A now appears on the WPS, so it reads like the form. If you'd rather not see them, hide them for yourself in Settings → Templates → WPS display, or on one WPS with its Show N/A / Hide N/A switch.
- Everything new is in English, Portuguese and Spanish.

## Under the hood

For the people who want the detail:

- **Layout read from the file.** Cells and merged cells in Excel; table lines, word positions and fonts in text PDFs. Each form's layout is worked out from the file itself.
- **Labels in English, Portuguese and Spanish**, plus common French and German wording. Every value is checked for the right shape before it's kept: a date, an ISO 4063 process number, a revision, a number.
- **The full ISO 15609-1 detail set:** jigs and fixtures, tack welding, weld sequence, special baking or drying, tungsten electrode, contact tube to work distance, preheat maintenance, post-heating, heating and cooling rates, weaving, oscillation, torch or electrode angle, pulse welding, run-out length, interpass cleaning.
- **Run table read column by column**, with pass roles and heat input worked out as before. Base materials (including outside diameter or pipe range), fillers, shielding gas and flux are read from a table or as single fields.
- **Awkward layouts:** PDFs typed without table lines, right-aligned number columns, wrapped notes, a caption and its value in one cell, text above a ruled table, forms that run over several pages.
- **Remembered wordings match exactly**, never approximately. Near-misses are where wrong values come from.
- **No OCR:** a scanned PDF is stored but not read. **No AI:** the same file always gives the same result, and the reader can't write a value that isn't on the page.
- **About a second per form.**

<p class="feature-note">What it is and isn't: Atlas copies the values off your forms. It doesn't check them against a standard or decide whether a WPS is right. Review each import as you do today.</p>

## Availability

Atlas 1.2 is live for every Atlas customer, at no extra cost: same flat price, no per-seat fees. Have a form you'd like to see it read? Limited offer: [a free trial](/wps-manager-contact.html), with your data imported for you.
