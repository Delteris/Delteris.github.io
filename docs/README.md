# Delteris marketing site

Static marketing site for delteris.com, built by **GitHub Pages' native Jekyll**
from this `docs/` folder. No CI workflow needed — push to the default branch and
Pages builds it.

## Structure

```
docs/
├── _config.yml            # site URL, plugins (jekyll-sitemap), defaults
├── _layouts/default.html  # the ONE place <head>, meta/OG tags & body shell live
├── _includes/
│   ├── nav.html           # top navigation (aria-current set automatically)
│   ├── footer.html        # footer + leadership block
│   └── schema/*.json      # per-page JSON-LD structured data
├── index.html …           # pages: YAML front matter + <main> content only
├── style.css / main.js / static/
├── llms.txt / robots.txt / CNAME / site.webmanifest
└── 404.html               # noindex, no footer, excluded from sitemap
```

## Editing

* **Page copy** → edit the page's `.html` file (content below the `---` front matter).
* **Titles / meta descriptions / OG** → the page's front matter. Write HTML
  entities as they should appear in output (e.g. `&amp;` for `&`).
* **Structured data** → `_includes/schema/<page>.json` (pure JSON — validate before committing).
* **Nav or footer** → `_includes/nav.html` / `_includes/footer.html`, once, for every page.
* **New SEO landing page** → copy an existing page's front matter, add a schema
  JSON, link to it from at least two existing pages. `sitemap.xml` is generated
  automatically — do not create one by hand.

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
