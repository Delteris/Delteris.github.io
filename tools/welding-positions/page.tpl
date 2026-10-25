---
layout: default
# DRAFT: hidden preview. To publish: delete the next three lines, set permalink to
# /resources/welding-positions/, add the guide to _data/guides.yml and the resources hub.
preview: true
noindex: true
sitemap: false
permalink: /resources/welding-positions-preview-q4t8n2/
title: "Welding Positions Chart: ISO 6947 vs ASME 1G–6G, 1F–5F | Elenchon"
description: "Every welding position in one chart: ISO 6947 codes (PA, PB, PC, PD, PE, PF, PG, PH, PJ, H-L045, J-L045) side by side with the ASME and AWS designations (1G to 6G, 1F to 5F), for plate and pipe, butt and fillet welds."
og_description: "ISO 6947 and ASME/AWS welding positions in one chart: plate and pipe, butt and fillet, uphill and downhill. Free to print."
og_image_alt: "Welding positions chart: ISO 6947 codes beside ASME 1G to 6G and 1F to 5F"
en_url: "/resources/welding-positions-preview-q4t8n2/"
hub: guides
crumb: "Welding Positions"
guide_group: welders
guide_product: atlas
guide_pitch: "Reading position codes off a stack of WPS?"
guide_pitch_link: "Atlas reads them, PF as uphill and PG as downhill"
---
    <header class="page-hero">
        <div class="hero-content">
            <span class="hero-eyebrow">Resources · Chart</span>
            <h1 class="text-glow">Welding Positions:<br>ISO 6947 and ASME, in One Chart.</h1>
            <p class="hero-sub">PA to J-L045, 1G to 6G, 1F to 5F: every position for plate and pipe, butt and fillet, drawn side by side.</p>
            <p class="guide-meta">By the Delteris team · Last reviewed <time datetime="2026-10-24">24 October 2026</time> · <a href="/resources/">All guides</a></p>
        </div>
    </header>

    <section class="page-section container u-flush-top">
        <div class="summary-panel">
            <h2 class="text-glow">The Short Answer</h2>
            <p><strong>ISO 6947 names a welding position with letters: PA is flat, PB horizontal-vertical, PC horizontal, PD horizontal-overhead, PE overhead, PF vertical up and PG vertical down; for fixed pipe, PH welds upwards, PJ downwards, and H-L045 and J-L045 do the same on a pipe inclined at 45°. ASME Section IX and AWS use a number and a letter instead: 1 to 6 for the position, G for a groove (butt) weld and F for a fillet weld.</strong> The two systems mostly line up. The one real difference: ASME's 3G, 5G and 6G don't say up or down, which ISO puts in the code.</p>
        </div>
    </section>

    <section class="page-section container wp-chart" id="chart">
        <div class="section-header">
            <span class="eyebrow">The Chart</span>
            <h2>Every Position, Plate and Pipe</h2>
            <p class="subtitle">The big code is ISO 6947; beside it, ASME/AWS. Up and down in a drawing are up and down in the workshop. Blue arrows show the welding direction, or the pipe turning; the red torch marks where the weld is made. Select a drawing to see it larger.</p>
        </div>
{{CHART}}
        <p class="wp-print-row"><button type="button" class="btn btn-secondary" data-wp-print="chart">Print the chart</button><span class="wp-print-note">A4 or Letter, one page per group, on white to save ink.</span></p>
        <dialog class="wp-modal" aria-labelledby="wp-modal-name" data-wp-modal>
            <div class="wp-modal-inner">
                <div class="wp-modal-top">
                    <span class="wp-modal-group" data-wp-m="group"></span>
                    <button type="button" class="wp-modal-close" aria-label="Close" data-wp-close>×</button>
                </div>
                <div class="wp-modal-figure" data-wp-m="figure"></div>
                <div class="wp-modal-cap">
                    <span class="wp-codes"><span class="wp-iso" data-wp-m="iso"></span><span class="wp-asme" data-wp-m="asme"></span></span>
                    <h3 class="wp-name" id="wp-modal-name" data-wp-m="name"></h3>
                    <p class="wp-note" data-wp-m="note"></p>
                </div>
                <div class="wp-modal-nav">
                    <button type="button" data-wp-step="-1" aria-label="Previous position">← Previous</button>
                    <span class="wp-modal-pos" data-wp-m="pos"></span>
                    <button type="button" data-wp-step="1" aria-label="Next position">Next →</button>
                </div>
            </div>
        </dialog>
    </section>

    <section class="page-section container wp-xref" id="cross-reference">
        <p class="wp-print-head" aria-hidden="true"><span>Welding positions · ISO 6947 and ASME IX / AWS</span><span>delteris.com/resources/welding-positions/</span></p>
        <div class="section-header">
            <span class="eyebrow">Cross-Reference</span>
            <h2>ISO 6947 to ASME and AWS</h2>
        </div>
        <div class="matrix-scroll">
            <table class="feature-matrix comparison-matrix guide-matrix guide-matrix-2">
                <caption class="u-visually-hidden">ISO 6947 welding positions and their ASME / AWS equivalents</caption>
                <thead>
                    <tr>
                        <th scope="col" class="fm-feature-head">Weld and position</th>
                        <th scope="col">ISO 6947</th>
                        <th scope="col">ASME IX / AWS</th>
                    </tr>
                </thead>
                <tbody>
{{ROWS}}
                </tbody>
            </table>
        </div>
        <p class="feature-note">The equivalents are for the test positions. Each system draws its own tolerances on how far a joint may tilt or turn before it counts as another position, so a production joint near a boundary is judged by the standard your work is qualified to.</p>
        <p class="wp-print-row"><button type="button" class="btn btn-secondary" data-wp-print="table">Print the table</button><span class="wp-print-note">Fits on one A4 or Letter page.</span></p>
    </section>

    <section class="page-section container">
        <div class="section-header">
            <span class="eyebrow">Reading the Codes</span>
            <h2>What the Letters and Numbers Mean</h2>
        </div>
        <div class="glass-card feature-block">
            <ul class="feature-list">
                <li><strong>ISO letters name the main positions.</strong> PA (flat) to PG (vertical down) for plate. PH and PJ are fixed pipe with its axis horizontal, welding up or down; PK is orbital welding of pipe, the position for mechanised orbital heads.</li>
                <li><strong>H-L045 and J-L045 are the inclined pipe.</strong> H welds upwards, J downwards, L045 is the 45° slope of the pipe axis. It's the most demanding fixed-pipe position, and a common choice for welder tests because it covers the most ground.</li>
                <li><strong>ASME numbers go 1 to 6.</strong> 1 flat, 2 horizontal, 3 vertical, 4 overhead for plate; for pipe, 1 is rotated, 2 has the axis vertical, 5 the axis horizontal and fixed, 6 the axis at 45° and fixed. G is a groove weld, F a fillet weld, and R in 2FR means the pipe is rotated.</li>
                <li><strong>Up or down lives in different places.</strong> ISO writes it in the code (PF up, PG down). ASME writes 3G for both and records the progression as its own variable, so a WPS or welder qualification to ASME says "uphill" or "downhill" separately.</li>
                <li><strong>Downhill has its own uses.</strong> Welding downwards (PG on plate, PJ and J-L045 on pipe) is common on pipelines with cellulosic electrodes and on thin sheet.</li>
                <li><strong>The test position decides what a welder may weld.</strong> One test usually covers several production positions, and the rules come from the qualification standard, not from ISO 6947: ISO 9606-1 and ASME Section IX (QW-461.9) each have a table of which test position covers which. The harder positions cover more, so a 6G or H-L045 pipe test covers most of them. Direction counts too: a test welded upwards doesn't cover welding downwards.</li>
            </ul>
        </div>
    </section>

    <section class="page-section container">
        <div class="glass-card feature-block">
            <p class="feature-lead"><strong>Standards referenced</strong></p>
            <ul class="feature-list">
                <li><a href="https://www.iso.org/standard/72741.html">ISO 6947:2019</a> — welding and allied processes, welding positions.</li>
                <li><a href="https://www.asme.org/codes-standards/find-codes-standards/bpvc-ix-bpvc-section-ix-welding-brazing-fusing-qualifications">ASME BPVC Section IX</a> — QW-461, positions; QW-461.9, positions qualified by each test position.</li>
                <li><a href="https://www.iso.org/standard/54936.html">ISO 9606-1</a> — qualification testing of welders, fusion welding, steels.</li>
            </ul>
            <p class="feature-note">The drawings are our own illustrations, not copies of the figures in these standards.</p>
        </div>
    </section>
{% include guide-next.html %}
