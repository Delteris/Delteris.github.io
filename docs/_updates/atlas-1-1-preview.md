---
update_product: atlas
lang: en
version: "Atlas 1.1"
date: 2026-10-11
# DRAFT: rewrite of atlas-1-1.md in the team's voice. To adopt: copy the body (and
# heading/summary/description) into atlas-1-1.md, then delete this file.
preview: true
noindex: true
sitemap: false
permalink: /atlas/updates/1-1-preview-k7m2x9/
title: "Atlas 1.1: WPS Matching and a View You Can Declutter | Elenchon Atlas"
heading: "Atlas 1.1: WPS matching, and a view you can declutter"
description: "Atlas 1.1 checks each WPS against the WPQR it rests on and against the welders qualified to weld it, and lets each person hide the features they don't use."
summary: "This release checks each WPS against the WPQR it rests on and against the welders qualified to weld it, and lets each person hide the parts of Atlas they don't use."
chip: "New in Atlas 1.1: WPS matching, and hide what you don't use"
image: "/static/updates/atlas-1-1-matching.webp"
en_url: "/atlas/updates/1-1-preview-k7m2x9/"
---
Atlas 1.1 brings two things. Matching checks each WPS against the WPQR behind it and against the welders who can weld it. And **What you see** lets each person hide the parts of Atlas they don't use.

## Matching

A WPS rests on two things: the WPQR that qualifies it, and the welders qualified to weld it. Matching checks both, for every WPS in your library.

### Against the WPQR

You enter the range of qualification once, from the WPQR certificate. The editor opens the certificate beside the form, on the page you last read, and you can copy a range from another WPQR to start from. From then on, every WPS linked to that WPQR is checked against it field by field: processes, material groups, thickness, diameter, positions, preheat, interpass, PWHT, current, consumables and heat input.

Each result is one of four: **inside**, **outside**, **differs** or **not checked**.

A few choices we made on purpose:

- One WPQR per run group, by default. Each run group (process and filler) has to be covered by a single linked WPQR on every field. This follows our reading of ISO/TC 44's published interpretations of ISO 15614-1: separate procedure tests can't be combined to widen a range of qualification, but each process in a joint can rest on its own WPQR. You can still combine several WPQRs into one wider range on a WPS, but it's opt-in, and every combined result says so.
- Consumables are matched by designation. A different designation shows as *differs*, never *outside*: whether it's covered is a call for the person responsible, not for us.
- No assumptions. A WPS with no preheat minimum isn't treated as room temperature, and a blank or unclear value is *not checked* rather than a red flag.

Every result explains itself in plain words, for example "PB is not listed on WPQR-2402 (PF, PC)". The range check report lists problems first, grouped by run group, and exports as a PDF. In the Library, a WPS with an issue carries an *Outside* or *Differs* pill, and a filter lists just those.

### Against the welders

Welder coverage matches each WPS to the welders whose current certificates cover it, and each welder to the WPS they can weld. You'll see when nobody is currently qualified for a WPS, and when a qualification it relies on lapses.

The monthly report brings both sides together for the whole register: what changed since last month, which WPS sit outside their WPQR range, and which have no qualified welder.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: a WPS with its WPQR range check and its qualified welders">
        <img src="/static/updates/atlas-1-1-matching.webp" width="1600" height="341" loading="lazy" decoding="async" alt="A WPS in the Atlas library: WPQR range check showing Outside · 1, with the line 'Positions: PB is not listed on MER-WPQR-2402 (PF, PC)' and an Open range check report button, followed by Qualified welders: Aaron Webb, qualified via 135">
    </button>
    <figcaption>One WPS, both sides: the range check against its WPQR, and the welders qualified to weld it.</figcaption>
</figure>

<p class="feature-note">What it is and isn't: Atlas compares the values on your WPS with the ranges you entered from your certificates. It doesn't derive ranges from ISO 15614-1, ISO 9606-1 or ASME IX, and it doesn't decide whether a WPS or a welder is qualified. The results are for the person responsible to confirm.</p>

## What you see

Not every shop uses every part of Atlas, and features you don't use are just noise on screen. **What you see**, on Overview, lets each person switch off whole features in their own view: signed copies, the WPQR range check, welder coverage, the monthly report, and the Compare, Heat input helper and Board pages.

- It only changes your view. Nothing is deleted, and your colleagues still see everything.
- It's saved to your account, not your browser, so it follows you to any device.
- After each sign-in, a short note lists what you've hidden, with a link to switch it back on.
- Hiding a feature doesn't hide its problems. If you've hidden the range check and a WPS falls outside its WPQR range, the note still gives you the count.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Zoom: the What you see panel on Overview">
        <img src="/static/updates/atlas-1-1-what-you-see.webp" width="1482" height="257" loading="lazy" decoding="async" alt="The What you see panel on Overview: switches for Signed copies, WPQR range check (hidden), Welder coverage, Monthly report (hidden), Compare, Heat input helper and Board, with a '2 hidden' count">
    </button>
    <figcaption>What you see: one switch per feature, for your own view only.</figcaption>
</figure>

Atlas 1.1 is live for every Atlas customer, at no extra cost. Questions: [write to us](/wps-manager-contact.html).

The Delteris team
