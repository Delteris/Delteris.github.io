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
title: "Atlas 1.2: A WPS Reader That Gets Better With Every Form | Elenchon Atlas"
heading: "Atlas 1.2: a WPS reader that gets better with every form"
description: "Atlas 1.2 keeps every line of your WPS forms, remembers how your forms word things, and can send us a report of what it doesn't read yet, so it reads your forms better over time."
summary: "Atlas keeps every line on your forms, remembers how your company words things, and can tell us what it doesn't read yet. Every form you import makes the next one easier."
chip: "New in Atlas 1.2: a reader that gets better with every form"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
---
## A reader that adapts to your forms

Every company words its WPS its own way. One form says *Purging*, another *Backing gas*, a third *Root protection*. Atlas 1.2 adapts to yours, and keeps adapting as you use it.

1. **Every line is kept.** Anything on the form that Atlas can't place in a standard field waits on the WPS for you to sort.
2. **You place it once.** One click puts it where it belongs.
3. **Atlas remembers.** From then on, that wording on your forms is read straight into that field.
4. **It reaches us, if you want it to.** A report of what Atlas doesn't read yet comes to us, and what we learn from it goes into the next release, for every customer.

The more you import, the less there is to sort.

## Every line on the form, kept

A purging gas, an in-house reference, a note: whatever on the form doesn't match a standard field is kept on the WPS, under **Other fields on this form**.

- **You see what's waiting.** A notice at the top of the WPS says how many need a decision, with a Review button, and the Library marks each of those WPS with an *N to sort* pill.
- **Three choices per field:** add it to an empty field (Atlas suggests the likely ones first: *Purging* points to backing gas, *Diameter* to the pipe range), keep it as a field of its own, or delete it.
- **Nothing is retyped.** The value comes straight from the form.

<!-- SCREENSHOT: the Other fields notice, and one field with Add / Keep / Delete -->

## Your wordings, remembered

When you add an Other field to a standard one, Atlas remembers that wording for your organisation. The next form that says *Purging* fills backing gas by itself.

- **Yours, and in view.** The list is in Settings → Templates → Form wordings, and an admin can remove any entry.
- **Yours alone.** Your wordings never change how Atlas reads another company's forms.
- **Exact wording only.** Atlas matches the wording you placed, never a near-miss, so one decision can't spill into fields you didn't mean.

## Tell us what Atlas doesn't read yet

An admin can download a **wordings report** and send it to us: the wordings you placed, the fields you kept as your own, and the lines nobody has sorted yet.

- **Labels and counts only.** Never values, never documents.
- **Optional.** Nothing is sent unless you send it.
- **It comes back to you.** We review every report. A wording several companies share becomes part of Atlas, and a field many of you keep becomes a candidate for a new standard one, shipped in a release for everyone.

## Streamlined, so we can look after you better

We streamlined how Atlas reads your forms with one goal: the best service we can give you. If a form ever reads differently from what you expect, it's quick to find out why and quick to put right.

- **We know where to look.** The wordings report points straight at the lines Atlas isn't placing on your forms, so you don't have to send documents or describe the problem.
- **One fix, every form.** A fix ships once and applies to every form that uses that wording, yours and everyone else's.
- **You decide when it lands.** Re-read any WPS after an update and Atlas shows what would change before anything is saved. Keep what you had if you prefer.
- **Backed by our [response guarantee](/wps-management-software.html):** a written reply within 3 business days, or that month is half price.

## Smaller changes

- **Re-reading a WPS shows you what would change.** The current read and the new one appear side by side, filtered to the differences or showing every field. Nothing is saved until you choose *Apply new read* or *Keep current read*, and a field you fixed by hand that the new read would replace shows up as a difference.
- **N/A fields are on the WPS,** so it reads like the form. If you'd rather not see them, hide them for yourself in Settings → Templates → WPS display, or on one WPS with its Show N/A / Hide N/A switch.
- Everything new is in English, Portuguese and Spanish.

## Under the hood

For the people who want the detail:

- **Layout read from the file.** Cells and merged cells in Excel; table lines, word positions and fonts in text PDFs.
- **Labels in English, Portuguese and Spanish**, plus common French and German wording. Every value is checked for the right shape before it's kept: a date, an ISO 4063 process number, a revision, a number. Where Atlas isn't sure, the field stays blank for you rather than filled wrong.
- **The full ISO 15609-1 detail set:** jigs and fixtures, tack welding, weld sequence, special baking or drying, tungsten electrode, contact tube to work distance, preheat maintenance, post-heating, heating and cooling rates, weaving, oscillation, torch or electrode angle, pulse welding, run-out length, interpass cleaning.
- **Run table read column by column**, with pass roles and heat input worked out. Base materials (including outside diameter or pipe range), fillers, shielding gas and flux are read from a table or as single fields.
- **Layouts it handles:** PDFs typed without table lines, right-aligned number columns, wrapped notes, a caption and its value in one cell, text above a ruled table, forms that run over several pages.
- **No OCR:** a scanned PDF is stored but not read. **No AI:** the same file always gives the same result, and Atlas can't write a value that isn't on the page.
- **About a second per form.**

<p class="feature-note">What it is and isn't: Atlas copies the values off your forms. It doesn't check them against a standard or decide whether a WPS is right. Review each import as you do today.</p>

## Availability

Atlas 1.2 is live for every Atlas customer, at no extra cost: same flat price, no per-seat fees. Have a form you'd like to see it read? Limited offer: [a free trial](/wps-manager-contact.html), with your data imported for you.
