#!/usr/bin/env bash
# serve.sh — run the Delteris site locally, exactly as GitHub Pages builds it.
#
#   ./serve.sh                 serve with live reload at http://localhost:4000
#   ./serve.sh build           one-off production build into _site/
#   ./serve.sh --docker        same, but inside a Ruby container (no Ruby on host)
#   ./serve.sh build --docker  containerized production build
#
# Native mode needs: sudo pacman -S --needed ruby base-devel
# Everything installs into ./vendor/ — nothing touches the system gem dirs.

set -euo pipefail
cd "$(dirname "$0")"

CMD="serve"
DOCKER=0
for arg in "$@"; do
    case "$arg" in
        build)    CMD="build" ;;
        serve)    CMD="serve" ;;
        --docker) DOCKER=1 ;;
        *) echo "unknown argument: $arg" >&2; exit 2 ;;
    esac
done

JEKYLL_ARGS=()
if [[ "$CMD" == "serve" ]]; then
    JEKYLL_ARGS=(serve --livereload --host 127.0.0.1 --port 4000 --incremental)
else
    # JEKYLL_ENV=production makes absolute URLs use the real domain, like Pages does
    JEKYLL_ARGS=(build)
    export JEKYLL_ENV=production
fi

if [[ "$DOCKER" == 1 ]]; then
    exec docker run --rm -it \
        -v "$PWD":/site -w /site \
        -p 4000:4000 -p 35729:35729 \
        -e JEKYLL_ENV="${JEKYLL_ENV:-development}" \
        -e BUNDLE_PATH=/site/vendor/bundle-docker \
        ruby:3.3 \
        bash -c "bundle install --quiet && bundle exec jekyll ${JEKYLL_ARGS[*]/127.0.0.1/0.0.0.0}"
fi

# ---- native (Arch) ----------------------------------------------------------
if ! command -v ruby >/dev/null || ! command -v gem >/dev/null; then
    echo "Ruby not found. Install it with:" >&2
    echo "    sudo pacman -S --needed ruby base-devel" >&2
    echo "(or run: ./serve.sh --docker)" >&2
    exit 1
fi

# Keep every gem project-local, out of ~/.gem and the system
export GEM_HOME="$PWD/vendor/gems"
export PATH="$GEM_HOME/bin:$PATH"
export BUNDLE_PATH="$PWD/vendor/bundle"

command -v bundle >/dev/null || gem install bundler --no-document

bundle check >/dev/null 2>&1 || bundle install

echo
[[ "$CMD" == "serve" ]] && echo ">>> http://localhost:4000  (Ctrl-C to stop)"
exec bundle exec jekyll "${JEKYLL_ARGS[@]}"
