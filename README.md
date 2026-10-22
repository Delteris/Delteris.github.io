# Delteris marketing site

Static marketing site for delteris.com, built by **GitHub Pages' native Jekyll**
from this `docs/` folder. No CI workflow needed — push to the default branch and
Pages builds it.

## Structure

```
docs/                       # everything GitHub Pages publishes
├── _config.yml             # site URL, plugins, the updates collection, Brevo newsletter forms, metrics endpoint
├── _layouts/default.html   # the ONE place <head>, meta/OG tags & body shell live
├── _includes/
│   ├── nav.html / footer.html
│   ├── app-shot.html       # Atlas screenshot, picks /static/wpsm/<lang>/ when it exists
│   ├── atlas-video.html    # the product video player (trial/contact pages)
│   ├── newsletter-signup.html, updates-list.html, latest-update.html, updates-feed.xml
│   ├── guide-next.html, closing-cta.html, door-*.html, breadcrumb.html
│   └── schema/**/*.json    # per-page JSON-LD (PT/ES guides have their own under schema/resources/pt|es)
├── _data/guides.yml        # the Resources (guides) list
├── _updates/               # product update posts: <slug>.md / .pt.md / .es.md
├── *.html                  # English pages (root);  pt/ and es/ mirror them
├── atlas/ elenchon/        # per-product update index pages (+ Atom feeds)
├── resources/              # vendor-neutral guides (SEO); pt/resources, es/resources
├── static/                 # images; wpsm/ = Atlas screenshots, video/ = product videos + posters
├── style.css / main.js
└── llms.txt / robots.txt / CNAME / site.webmanifest / 404.html
email-templates/            # Brevo double opt-in e-mails (not published)
specifications/             # setup notes and plans (not published); ANALYTICS_SETUP.md = how visit counting works
```

## Editing

* **Page copy** → the page's `.html` (below the `---` front matter). Change EN, PT and ES together: same file name under `pt/` and `es/`.
* **Titles / meta / OG** → front matter. Write HTML entities as they should appear (`&amp;`).
* **Structured data** → `_includes/schema/<page>.json` (pure JSON; validate before committing). Guides: regenerate the schema after editing so FAQ text stays identical.
* **Nav or footer** → `_includes/nav.html` / `footer.html`, once, for every page.
* **New SEO landing page** → copy an existing page's front matter, add a schema JSON, link to it from at least two pages. `sitemap.xml` is generated; never write one by hand.
* **Product update post** → add `docs/_updates/<slug>.md` (+ `.pt.md`, `.es.md`) with `update_product`, `lang`, `date`, `version`, `summary`. It appears on `/atlas/updates/` (or `/elenchon/updates/`) and in the feed.
* **Screenshots** → `docs/static/wpsm/` (see its `README.txt` for how they're made).
* **Product video** → `docs/static/video/atlas-<lang>.mp4` + `-poster.webp`, shown by `atlas-video.html`. Bump the `?v=` on the poster URL when you replace a poster, or browsers and Cloudflare keep the old one. The recorder lives in the Atlas repo (`scripts/video/`).
* **Old URLs** → GitHub Pages has no 301s: keep a stub page (layout null, `sitemap: false`, canonical + meta refresh to the new URL). Never reuse an old slug.

## Front matter reference

| key            | purpose                                              |
|----------------|------------------------------------------------------|
| `title`        | `<title>` (also OG/Twitter title unless overridden)  |
| `description`  | meta description (also OG unless overridden)         |
| `og_title` / `og_description` | social-card overrides                 |
| `og_image` / `og_image_alt` / `og_image_dims` | social image (defaults to favicon-512) |
| `schema`       | path under `_includes/` to the page's JSON-LD        |
| `noindex`      | robots noindex (404 only)                            |
| `minimal_head` / `hide_footer` / `sitemap: false` | 404-style pages   |

## Local preview

```
cd docs && bundle install && bundle exec jekyll serve --livereload
```
