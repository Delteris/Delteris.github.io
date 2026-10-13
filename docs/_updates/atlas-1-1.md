---
update_product: atlas
lang: en
version: "Atlas 1.1"
date: 2026-10-11
permalink: /atlas/updates/1-1/
title: "Atlas 1.1: WPS Matching and a View You Can Declutter | Elenchon Atlas"
heading: "Atlas 1.1: WPS matching, and a view you can declutter"
description: "Atlas 1.1 checks every WPS against the WPQR it rests on, matches it to the welders who can weld it, and lets each person hide the features they don't use."
summary: "Every WPS is now checked against the range of the WPQR it rests on and matched to the welders whose certificates cover it. And each person can hide the features they don't use."
chip: "New in Atlas 1.1: WPS matching, and hide what you don't use"
image: "/static/updates/atlas-1-1-matching.webp"
en_url: "/atlas/updates/1-1/"
pt_url: "/pt/atlas/updates/1-1/"
es_url: "/es/atlas/updates/1-1/"
---
## Matching: every WPS against its WPQR and its welders

A WPS is only as good as the two things behind it: the WPQR it rests on, and the welders who can weld it. Atlas 1.1 checks both sides, for every WPS in your library.

### Against the WPQR

Enter the range of qualification once from the WPQR certificate. The editor opens the certificate beside the form, on the page you were last reading, and can copy a range from another WPQR. From then on, every WPS linked to that WPQR is checked against it, field by field: processes, material groups, thickness, diameter, positions, preheat, interpass, PWHT, current, consumables and heat input.

Every result is one of four: **inside**, **outside**, **differs** or **not checked**.

- **One WPQR per run group, by default.** Each run group (process and filler) has to be covered by one linked WPQR on every field. Combining several WPQRs into one wider range is an opt-in setting per WPS, and every combined result is labelled as such.
- **Consumables match by designation.** A different designation shows as *differs*, for the person responsible to judge. Atlas never marks it *outside*, because whether it's covered is that person's call.
- **No guessing.** A WPS with no preheat minimum is never assumed to be at room temperature. A blank or unclear value is *not checked*, not a red flag.
- **Every result explains itself** in plain words, for example "PB is not listed on WPQR-2402 (PF, PC)". The range check report puts problems first, grouped by run group, and exports as a PDF.
- **The Library shows it at a glance**: an *Outside* or *Differs* pill on each WPS card, and a filter to list just those.

### Against the welders

Welder coverage matches each WPS to the welders whose current certificates cover it, and each welder to the WPS they can weld. If nobody is currently qualified for a WPS, you see it. If a qualification it relies on lapses, you see that too.

The monthly report brings both together for the whole register: what changed since last month, which WPS sit outside their WPQR range, and which WPS have no qualified welder.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: a WPS with its WPQR range check and its qualified welders">
        <img src="/static/updates/atlas-1-1-matching.webp" width="1600" height="341" loading="lazy" decoding="async" alt="A WPS in the Atlas library: WPQR range check showing Outside · 1, with the line 'Positions: PB is not listed on MER-WPQR-2402 (PF, PC)' and an Open range check report button, followed by Qualified welders: Aaron Webb, qualified via 135">
    </button>
    <figcaption>One WPS, both sides: the range check against its WPQR, and the welders qualified to weld it.</figcaption>
</figure>

<p class="feature-note">What it is and isn't: Atlas compares the values on your WPS with the ranges you entered from your certificates. It does not derive ranges from ISO 15614-1, ISO 9606-1 or ASME IX, and it doesn't decide whether a WPS or a welder is qualified. Results are for confirmation by the person responsible.</p>

## What you see: hide what you don't use

Not every shop uses every feature, and a screen full of things you don't need is noise. **What you see**, on Overview, lets each person switch off whole features in their own view: signed copies, the WPQR range check, welder coverage, the monthly report, and the Compare, Heat input helper and Board pages.

- **Only your view changes.** Nothing is deleted, and your colleagues still see everything.
- **It follows you.** The setting is saved to your account, not your browser.
- **You won't forget what you hid.** After each sign-in, a short note lists what's hidden, with a link back to switch it on.
- **Problems don't go silent.** If you've hidden the range check and a WPS is outside its WPQR range, the note still gives you the count.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: the What you see panel on Overview">
        <img src="/static/updates/atlas-1-1-what-you-see.webp" width="1482" height="257" loading="lazy" decoding="async" alt="The What you see panel on Overview: switches for Signed copies, WPQR range check (hidden), Welder coverage, Monthly report (hidden), Compare, Heat input helper and Board, with a '2 hidden' count">
    </button>
    <figcaption>What you see: one switch per feature, for your own view only.</figcaption>
</figure>

## Availability

Atlas 1.1 is live for every Atlas customer, at no extra cost: same flat price, no per-seat fees. Want to see it on your own WPS? Limited offer: [a free trial](/wps-manager-contact.html), with your data imported for you.
