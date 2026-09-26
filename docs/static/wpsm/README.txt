WPS Manager app screenshots (.webp). Referenced by /wps-manager-features.html
and the WPS Manager landing + capability subpages via the app-shot include.

All shots are the dark ("Dark") console theme, 1600x900, exported from the
raw 1920x1080 PNG captures in /_source/screenshots/ (see the source README
there for the capture-name -> slot-name mapping and the convert command).

Present (live on the site):
  overview.webp          import.webp          review.webp
  register.webp          library.webp         pqr-chain.webp
  heat-input.webp        preview.webp         security-audit.webp
  security-users.webp    security-settings.webp
  quals-grid.webp        quals-warnings.webp  quals-record.webp

quals-warnings.webp is a 1600x334 crop of the Needs-attention panel from the
overview capture (not 16:9) — its include passes w="1600" h="334".

Pending — slots are live and show a dashed placeholder until the file lands here
(1600x900, dark theme). Drop the .webp in and it appears; no HTML edit:
  compare.webp            Compare tab: a WPQ certificate beside its WPQR
                          (feature tour #qualification-record, welder-qualification page)
  quals-certificate.webp  a qualification card with a certificate attached and open
                          (feature tour #qualification-record, welder-qualification page)
  library-filter.webp     library filter panel open with pass facets applied
                          (library & search page #facets)
  quals-filter.webp       Board/Qualifications filter panel open with a filter applied
                          (welder-qualification page)

Each framed <img> points at /static/wpsm/<name>.webp and shows a dashed
placeholder until the matching file exists here. For the raw captures, the
capture-name -> slot-name map and the convert command, see /_source/README.md.
