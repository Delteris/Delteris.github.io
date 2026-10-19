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
title: "Atlas 1.2: A WPS Reader That Adapts to Your Forms | Elenchon Atlas"
heading: "Atlas 1.2: a WPS reader that adapts to your forms"
description: "Atlas 1.2 is about the WPS reader: it keeps every line on your forms, remembers how your company words things, and gives you a way to tell us what it doesn't read yet."
summary: "This release is about the WPS reader: it keeps every line on your forms, remembers how your company words things, and gives you a way to tell us what it doesn't read yet."
chip: "New in Atlas 1.2: a WPS reader that adapts to your forms"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
---
Atlas 1.2 is mostly about the WPS reader, the part that turns your forms into records. Every company words its forms differently, so we've made Atlas adapt to yours as you use it, and given you a way to tell us when it doesn't read something.

It comes a week after 1.1. The reader is the part of Atlas you use on every import, and we didn't want an improvement to it waiting on a bigger release, so it ships on its own.

## Other fields on this form

When a form has a line that doesn't match one of our fields (a purging gas, an in-house reference, a note), Atlas keeps it on the WPS for you to place. You'll see a count at the top of the WPS with a **Review** button, and an *N to sort* pill on it in the Library.

For each one you can add it to an empty field, keep it as a field of its own, or delete it. When you add one, we suggest the likely fields first, from the words in the label: *Purging* points to backing gas, *Diameter* to the pipe range. The value is taken from the form as it is, so there's nothing to retype.

<!-- SCREENSHOT: the Other fields notice, and one field with Add / Keep / Delete -->

## Form wordings

When you add an Other field to one of ours, Atlas remembers that wording for your organisation, and the next form that uses it is read straight into that field. The list is in **Settings → Templates → Form wordings**, and an admin can remove any entry.

Two choices we made on purpose:

- It only matches the exact wording. *Purging* won't stretch to *Purge gas*. Near-misses like that are where wrong values come from, and we'd rather ask you twice than fill a field wrong once.
- Your wordings only apply to your organisation. Nothing you map changes how Atlas reads another company's forms.

## The wordings report

Admins can download a wordings report from the same screen and send it to us. It lists the wordings you've mapped, the fields you've kept as your own, and the lines nobody has sorted yet. It carries labels and counts only: no values, no documents. Whether to send it is up to you.

We read every report that comes in. When several companies map the same wording, it goes into the reader for everyone in a release. When many of you keep the same field of your own, it becomes a candidate for a new standard one.

It's also the quickest way to sort out a form that reads oddly. Send us the report with a line about what you saw: it shows us exactly which labels Atlas isn't placing, without you sending the document or describing the layout, and the fix we ship applies to every form that uses that wording. Our [response guarantee](/wps-management-software.html#response-guarantee) applies as always: a written reply within 3 business days, or that month is half price.

## Smaller changes

- Re-reading a WPS shows you what would change first. The current read and the new one sit side by side, filtered to the differences or showing every field, and nothing is saved until you choose **Apply new read** or **Keep current read**. A field you corrected by hand that the new read would replace shows up as a difference. This is handy after a release like this one: re-read a WPS to pick up what's new, and keep your read if you prefer it.
- N/A fields are shown on the WPS, so it reads like the form. You can hide them for yourself in **Settings → Templates → WPS display**, or on one WPS with its **Show N/A / Hide N/A** switch.
- Everything new is in English, Portuguese and Spanish.

## Under the hood

For those who want the detail:

- The reader works out each form's layout from the file itself: cells and merged cells in Excel; table lines, word positions and fonts in text PDFs.
- It finds labels in English, Portuguese and Spanish, plus common French and German wording, and checks that each value has the right shape before keeping it (a date, an ISO 4063 process number, a revision, a number). If it isn't sure, it leaves the field blank. A blank takes you seconds to fill; a wrong value can go unnoticed.
- It reads the full ISO 15609-1 detail set: jigs and fixtures, tack welding, weld sequence, special baking or drying, tungsten electrode, contact tube to work distance, preheat maintenance, post-heating, heating and cooling rates, weaving, oscillation, torch or electrode angle, pulse welding, run-out length and interpass cleaning.
- The run table is read column by column, with pass roles and heat input worked out. Base materials (including outside diameter or pipe range), fillers, shielding gas and flux are read from a table or as single fields.
- Layouts it handles include PDFs typed without table lines, right-aligned number columns, wrapped notes, a caption and its value in one cell, text above a ruled table, and forms that run over several pages.
- No OCR: a scanned PDF is stored but not read. No AI: the same file always gives the same result, and the reader can't write a value that isn't on the page.
- It takes about a second per form.

<p class="feature-note">As always: Atlas copies the values off your forms. It doesn't check them against a standard or decide whether a WPS is right, so review each import as you do today.</p>

## What's next

More work on the everyday experience, and we're looking into further ways to take work off your plate. If something in Atlas costs you time, tell us: that's how we decide what comes next.

Atlas 1.2 is live for every Atlas customer, at no extra cost. Questions, or a form that reads oddly: [write to us](/wps-manager-contact.html).

The Delteris team
