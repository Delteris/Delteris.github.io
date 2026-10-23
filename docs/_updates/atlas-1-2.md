---
update_product: atlas
lang: en
version: "Atlas 1.2"
date: 2026-10-23
# DRAFT: hidden preview. To publish: delete the next three lines, set permalink to
# /atlas/updates/1-2/ and en_url/pt_url/es_url to the /1-2/ addresses (same in the .pt/.es files).
preview: true
noindex: true
sitemap: false
permalink: /atlas/updates/1-2-preview-k7m2x9/
title: "Atlas 1.2: Write, Approve and Read Your WPS in One Place | Elenchon Atlas"
heading: "Atlas 1.2: our first major update"
description: "Atlas 1.2 lets you write and approve a WPS in Atlas, confirm many welder qualifications with one signature, reads ASME and AWS forms as well as ISO ones, and shows you what needs you first on every screen."
summary: "Write and approve a WPS in Atlas, confirm many welder qualifications at once, a WPS reader that adapts to your forms (ASME and AWS included), and screens that show you what needs you first."
image: "/static/updates/atlas-1-2-fields.webp"
chip: "New in Atlas 1.2: write, approve and read your WPS in one place"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
pt_url: "/pt/atlas/updates/1-2-preview-k7m2x9/"
es_url: "/es/atlas/updates/1-2-preview-k7m2x9/"
---
<div class="update-lead">
    <p>Since we launched Atlas, we've kept asking ourselves two things: what more can we take off your plate, and how can we show you what matters more clearly? <strong>Atlas 1.2 is the first big answer.</strong></p>
    <p>Write and approve your WPSs in Atlas. Confirm a whole round of welder qualifications with one signature. Import ASME and AWS forms alongside your ISO ones. And on every screen, find what needs you first.</p>
</div>

<ul class="update-highlights">
    <li><a href="#write-a-wps-in-atlas"><span class="hl-title">Write a WPS in Atlas</span>Starts from the WPQRs it stands on, checked against them as you type.</a></li>
    <li><a href="#approve-with-a-signature"><span class="hl-title">Approve with a signature</span>One WPS or many at once, with a full history.</a></li>
    <li><a href="#welders-a-confirmation-round-and-a-welder-pass"><span class="hl-title">Confirmation round</span>Many welder qualifications in one go, and a welder pass for each welder.</a></li>
    <li><a href="#a-wps-reader-that-adapts-to-your-forms"><span class="hl-title">A reader that adapts to your forms</span>ASME IX and AWS D1.1 forms, and PDFs that hold several WPSs.</a></li>
    <li><a href="#less-on-screen"><span class="hl-title">Less on screen</span>Every page leads with what needs you; the rest stays quiet.</a></li>
</ul>

## Write a WPS in Atlas

Until now, a WPS came into Atlas as a file written somewhere else. You can now write one in Atlas, with **Write WPS** on the WPS and pWPS tabs of the Library.

Pick the WPQR(s) the WPS stands on and it starts from their range of qualification. Values that every WPQR shares are filled in, and filler, current and gas come from the WPQR that names each process. Where the WPQRs disagree, the field is left blank for you to decide. Every field of the form is there, in the order it's printed.

As you edit, the range check runs on what you type and marks any field that falls outside the linked WPQRs. Nothing is saved until you save. Under each field, **Past values in your library** offers the values your shop has already used, most used first, so a familiar value is one click away instead of retyped.

When it's ready, **Print form** prints it in Atlas's own form (Excel, which you can export to PDF), laid out for the code it's qualified to: ISO 15609-1, ASME IX (grouped as in QW-482) or AWS D1.1 (as in Annex J). The layout is ours, not a copy of any code's form. Every process is printed, with a column per process for fillers and gases, and once the WPS is approved in Atlas, the approval goes in the approval box.

**New revision** starts the next revision of any WPS, imported ones included, as a copy of its values and WPQR links that you can edit. The revision before it stays as it was.

## Approve with a signature

You can now approve a WPS or pWPS in Atlas. You confirm with your password, and Atlas records a simple electronic signature: your name, the date and time, and a fingerprint of exactly what you approved. Select several in the Library and one signature approves them all.

- A WPS written in Atlas is approved as its values. If it's edited afterwards, it's marked *Edited since approval*. Nothing is blocked or voided, and **Re-confirm** approves it as it now stands.
- An imported WPS is approved as its file, so correcting something Atlas read from it doesn't touch the approval.
- Every approval and re-confirmation is kept in the WPS's history, which is never rewritten.

If you approve your WPSs on paper, nothing changes: the signed scan stays where it is, and the pen in the Library list marks a WPS as signed off either way.

## Welders: a confirmation round and a welder pass

Confirming qualifications used to be one record at a time. **Confirmation round**, in Qualifications, does many at once:

- **ISO / EN:** everything due soon or in its grace window is ticked for you. One signature confirms them all to the date you give, and each record gets its own signed entry.
- **ASME / AWS:** you record the date the welders last ran the process, for many welders at once, and Atlas recalculates each one's continuity from it.

Every record goes through the same checks as when you confirm it on its own, and any that can't be updated are listed with the reason. You enter the dates yourself; Atlas doesn't assume an interval for you.

**Welder pass (PDF)** prints one page per welder with the qualifications they hold today, ready for the welder, a client or an inspector.

The qualification board has two new settings, in **Settings → Qualification board**: the **order of welders** (most urgent first, by name or by worker ID), which an admin sets for the whole shop, and its **size on your screen** (Compact, Normal or Roomy), which each person sets for themselves.

## A WPS reader that adapts to your forms

The reader is the part of Atlas that turns your forms into records, and you use it on every import. It now works out each form's layout from the file itself instead of relying on a fixed template, and because every company words its forms differently, it learns your wordings as you use it.

### ASME and AWS forms

Alongside ISO 15609-1 forms, the reader now reads ASME IX (QW-482 style) and AWS D1.1 forms: per-process columns such as *GTAW | SMAW*, sections headed QW-402 to QW-410, and *Prequalified* where an AWS WPS has no PQR. Welding progression is read as up or down, including from ISO 6947 position codes when that's all the form gives (*PF* is up, *PG* is down).

### PDFs with several WPSs

When a PDF holds several WPSs, Atlas asks once per upload what to do: split it into one file per WPS (the default), import the first only, or skip every file like it. Each split WPS is read on its own, as if you'd uploaded it separately.

### Other fields on this form

When a form has a line that doesn't match one of our fields (a purging gas, an in-house reference, a note), Atlas keeps it on the WPS for you to place, under the section of the form it came from. You'll see a count at the top of the WPS with a **Review** button, and an *N to sort* pill on it in the Library.

For each one you can add it to an empty field, keep it as a field of its own, or delete it. When you add one, we suggest the likely fields first, from the words in the label: *Purging* points to backing gas, *Diameter* to the pipe range. The value is taken from the form as it is, so there's nothing to retype.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: Other fields on this form">
        <img src="/static/updates/atlas-1-2-other-fields.webp" width="1600" height="375" loading="lazy" decoding="async" alt="Other fields on this form (2): DRAWING REF. with the value DWG-2207-14 rev B, and PURGING with the value Argon 99.99 %, 8 L/min and Backing gas chosen in its field picker; each row has Add, Keep as its own field and Delete buttons">
    </button>
    <figcaption>Two lines from a supplier's form that don't match a standard field. For <em>Purging</em>, Atlas suggests backing gas first.</figcaption>
</figure>

### Form wordings

When you add an Other field to one of ours, Atlas remembers that wording for your organisation, and the next form that uses it is read straight into that field. The list is in **Settings → Templates → Form wordings**, and an admin can remove any entry.

Two choices we made on purpose:

- It only matches the exact wording. *Purging* won't stretch to *Purge gas*. Near-misses like that are where wrong values come from, and we'd rather ask you twice than fill a field wrong once.
- Your wordings only apply to your organisation. Nothing you map changes how Atlas reads another company's forms.

### Sharing your wordings report with us

Atlas keeps a wordings report for your organisation: the wordings you've mapped, the fields you've kept as your own, and the lines nobody has sorted yet. It holds labels and counts only, never values or documents.

An admin can choose to share it with us, with **Share wordings report with Delteris** in **Settings → Templates → Form wordings**. It's off until you switch it on, and you can switch it off again at any time. Admins can also download the report from the same screen to see exactly what it holds.

We read every report we receive. When several companies map the same wording, it goes into the reader for everyone in a release. When many of you keep the same field of your own, it becomes a candidate for a new standard one.

It's also the quickest way to sort out a form that reads oddly. With the report shared, a line from you about what you saw is enough: we can see exactly which labels Atlas isn't placing, without you sending the document or describing the layout, and the fix we ship applies to every form that uses that wording. Our [response guarantee](/wps-management-software.html#response-guarantee) applies as always: a written reply within 3 business days, or that month is half price.

## Less on screen

We've been through every screen in Atlas with one rule: show what needs a person first, and keep the rest quiet.

- **Library:** the list flags only what needs attention: outside the WPQR range, fields to sort, not read, a draft or an edit since approval, a WPS no WPQR qualifies. A WPS with nothing to act on gets a quiet tick. On the WPS itself, the fields are grouped as on the form, the less-used actions are in a ⋯ menu, and the list and the WPS scroll separately.
- **Overview:** areas with nothing to report fold into one green line. Only what needs someone is shown as a card.
- **Qualifications:** each record shows the one thing it's waiting on (confirm, record a weld, catch up) as a button.
- **Settings:** one line per section, opened with a click, and Atlas remembers which ones you keep open. The monthly report switch has moved here, under **Monthly report**.
- Where a value isn't known, Atlas now says *Not known* instead of showing a dash.

## Smaller changes

- Re-parsing a WPS shows you what would change first. The current read and the new one sit side by side, filtered to the differences or showing every field, and nothing is saved until you choose **Apply new read** or **Keep current read**. A field you corrected by hand that the new read would replace shows up as a difference. This is handy after a release like this one: re-parse a WPS to pick up what's new, and keep your read if you prefer it.
- N/A fields are shown on the WPS, so it reads like the form. You can hide them for yourself in **Settings → Templates → WPS display**, or on one WPS with its **Show N/A / Hide N/A** switch, which Atlas now remembers.
- When a WPS gives an open-ended range (≥ 25 mm, say) and its WPQR caps it, the range check now says what's missing: *The WPS sets no upper limit (≥ 25 mm); the WPQR covers 25–450 mm.*
- The administrator account that came with your Atlas is marked **System** in Users; its password is managed on the server.
- Everything new is in English, Portuguese and Spanish.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: re-parse preview">
        <img src="/static/updates/atlas-1-2-reparse.webp" width="1600" height="438" loading="lazy" decoding="async" alt="Re-parse: what would change. Differences 2 of 83 fields: Torch / electrode angle, current read 10°–20° push (corrected by hand), new read 10°–15° push; Interpass cleaning, current read Grinding only, new read Wire brush / grinding. Buttons: Keep current read, Apply new read">
    </button>
    <figcaption>Two fields corrected by hand show up as differences before you choose.</figcaption>
</figure>

## Under the hood

For those who want the detail:

- The reader works out each form's layout from the file itself: cells and merged cells in Excel; table lines, word positions and fonts in text PDFs. It recognises a form's sections (ISO numbered titles, ASME QW-402 to QW-410, AWS headings) and places each field within them.
- It finds labels in English, Portuguese and Spanish, plus common French and German wording and ASME and AWS terms, and checks that each value has the right shape before keeping it (a date, an ISO 4063 process number, a revision, a number). If it isn't sure, it leaves the field blank. A blank takes you seconds to fill; a wrong value can go unnoticed.
- It reads the full ISO 15609-1 detail set: jigs and fixtures, tack welding, weld sequence, special baking or drying, tungsten electrode, contact tube to work distance, preheat maintenance, post-heating, heating and cooling rates, weaving, oscillation, torch or electrode angle, pulse welding, run-out length and interpass cleaning.
- The run table is read column by column, with pass roles and heat input worked out. Base materials (including outside diameter or pipe range), fillers, shielding gas and flux are read from a table, as single fields, or per process on multi-process forms.
- Layouts it handles include PDFs typed without table lines, sections framed by headings, cells that hold several labels and values (*P-No.: 4 Group No.: 1*), right-aligned number columns, wrapped notes, a caption and its value in one cell, text above a ruled table, and forms that run over several pages, including gas details on a later page than the process they belong to.
- It only reads text that's actually in the file, so it can't produce a value that isn't on the form. That's why it doesn't guess characters out of an image (OCR) and doesn't use AI: the same file always gives the same result. A scanned PDF is stored with the WPS; its fields are filled in by hand.
- It takes about a second per form.
- The built-in reader is the default for every form. If one of your forms needs it, we can still build a template for that form specifically: just get in touch.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: header fields read from a supplier's WPS">
        <img src="/static/updates/atlas-1-2-fields.webp" width="1600" height="808" loading="lazy" decoding="async" alt="Header fields (41) of NSW-WPS-114 from Nordvik Steelworks AS, read from the company's own form: manufacturer, WPS and WPQR numbers, joint type, preheat, interpass, back gouging, process 135, position PB, transfer mode, jigging, tack welding, weld sequence, contact tube to work distance, weaving and torch angle, with N/A fields shown">
    </button>
    <figcaption>A supplier's WPS as Atlas read it, including the ISO 15609-1 detail fields.</figcaption>
</figure>

<p class="feature-note">As always: the reader copies the values off your forms as they are, and a WPS written in Atlas starts from the ranges of the WPQRs you pick. Atlas checks each WPS against the WPQR ranges you've entered, but it doesn't judge code compliance or decide whether a WPS is right. That stays with the person responsible, and an approval in Atlas records who that was and what they approved.</p>

## What's next

More work on the everyday experience, and more ways to take work off your plate. If something in Atlas costs you time, tell us: that's how we decide what comes next.

Atlas 1.2 is live for every Atlas customer, at no extra cost. Questions, or a form that reads oddly: [write to us](/wps-manager-contact.html).

The Delteris team
