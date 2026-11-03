Atlas app screenshots (.webp), shown through the app-shot include.

All shots: Atlas 1.2 (commit e2aaf98), 1600x900 (quals-warnings and what-you-see are crops of
the overview), recaptured 3 Nov 2026 with the Meridian Fabrication demo seed
(scripts/video/up.sh), driven by Playwright. Two themes:
  /static/wpsm/[pt|es/]<name>.webp         dark theme (shown when the site is dark)
  /static/wpsm/light/[pt|es/]<name>.webp   light theme (the site's default)
The app-shot and door-shot includes put both in the page; CSS shows the one matching the theme.
For the review shot, heat input on MER-WPS-001..010 was marked as calculated (the form left it
blank), as an import of such forms does, so the queue has work in it. Recapture at 1.3 release.

Language versions: /static/wpsm/pt/ and /static/wpsm/es/ hold the same shots with the
app UI and demo data in Portuguese / Spanish. The app-shot include picks
/static/wpsm/<page.lang>/<name>.webp when it exists and falls back to the English file.

Compare shots: compare-cert-wps (a welder's certificate beside the WPS it covers, PDF view)
and compare-fields (two WPS, Fields mode with differences). The demo seed's WPQR files are
placeholders, so no shot shows a WPQR PDF.

import.webp (EN/PT/ES) recaptured 24 Oct 2026 for Atlas 1.2: the Add WPS dialog no longer has a template picker.
