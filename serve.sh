#!/usr/bin/env bash
# serve.sh — run the Delteris site locally in Docker. No Ruby on the host.
#
#   ./serve.sh            serve with live reload at http://localhost:4000
#   ./serve.sh build      one-off production build into docs/_site/
#
# Works from the repo root or from inside docs/ — it finds the Gemfile itself.
# Gems are cached in docs/vendor/bundle-docker (gitignored), so only the first
# run is slow.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ -f "$SCRIPT_DIR/Gemfile" ]]; then
    SITE_DIR="$SCRIPT_DIR"
elif [[ -f "$SCRIPT_DIR/docs/Gemfile" ]]; then
    SITE_DIR="$SCRIPT_DIR/docs"
else
    echo "error: no Gemfile next to this script or in ./docs — is this the site repo?" >&2
    exit 1
fi

case "${1:-serve}" in
    serve)
        JEKYLL_CMD="jekyll serve --host 0.0.0.0 --port 4000 --livereload --livereload-port 35729"
        ENV=development
        echo ">>> http://localhost:4000  (Ctrl-C to stop; first run compiles gems, be patient)"
        ;;
    build)
        JEKYLL_CMD="jekyll build"
        ENV=production   # absolute URLs use https://delteris.com, exactly like Pages
        ;;
    *)
        echo "usage: $0 [serve|build]" >&2
        exit 2
        ;;
esac

exec docker run --rm -it \
    --user "$(id -u):$(id -g)" \
    -v "$SITE_DIR":/site -w /site \
    -p 4000:4000 -p 35729:35729 \
    -e HOME=/tmp \
    -e JEKYLL_ENV="$ENV" \
    -e BUNDLE_PATH=/site/vendor/bundle-docker \
    -e BUNDLE_APP_CONFIG=/tmp/.bundle \
    ruby:3.3 \
    bash -c "bundle install --quiet && exec bundle exec $JEKYLL_CMD"
