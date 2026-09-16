/* ==========================================================
   Elenchon by Delteris — landing page behavior
   1. Mobile navigation toggle
   2. Copy-to-clipboard on the contact page
   3. Ambient network canvas (brand blue #3b82f6)
   ========================================================== */

(function () {
    'use strict';

    /* ---------- Mobile navigation ---------- */
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        // Close the menu after choosing a destination. Skip the language switcher —
        // its options live inside nav-links but opening the language menu shouldn't
        // collapse the mobile nav.
        navLinks.querySelectorAll('a').forEach(function (link) {
            if (link.closest('[data-lang-switch]')) return;
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open menu');
            });
        });
    }

    /* ---------- Products dropdown (mirrors the language switcher pattern) ---------- */
    const productsWrap = document.querySelector('[data-nav-dropdown]');
    if (productsWrap) {
        const productsBtn = productsWrap.querySelector('.nav-dropdown-btn');
        const productsMenu = productsWrap.querySelector('.nav-dropdown-menu');

        const closeProducts = function () {
            if (productsMenu.hidden) return;
            productsMenu.hidden = true;
            productsBtn.setAttribute('aria-expanded', 'false');
        };
        const openProducts = function () {
            productsMenu.hidden = false;
            productsBtn.setAttribute('aria-expanded', 'true');
        };

        productsBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (productsMenu.hidden) openProducts(); else closeProducts();
        });

        /* Sticky product label: the button stays the neutral "Products" word while browsing,
           and only a manual dropdown pick changes it — persisted across the visit in
           localStorage, until the visitor picks the other product. Navigation and direct
           landings never change it. Storage is wrapped in try/catch (private mode, etc.). */
        (function () {
            var labelEl = productsBtn.querySelector('.nav-dropdown-btn-label');
            if (!labelEl) return;
            var KEY = 'delteris:selectedProduct';   // stores 'elenchon' | 'wpsm'
            var defaultLabel = productsBtn.getAttribute('data-label-default') || labelEl.textContent;
            var items = productsMenu.querySelectorAll('a[data-product]');
            var byKey = {};
            items.forEach(function (a) { byKey[a.getAttribute('data-product')] = a; });

            function applySaved() {
                var saved;
                try { saved = localStorage.getItem(KEY); } catch (err) { saved = null; }
                if (saved && byKey[saved]) {
                    var lbl = byKey[saved].getAttribute('data-product-label');
                    if (lbl) {
                        labelEl.textContent = lbl;
                        productsBtn.classList.add('is-selected');
                    }
                }
                // No saved pick → leave the default label untouched.
            }
            applySaved();

            function resetToDefault() {
                try { localStorage.removeItem(KEY); } catch (err) {}
                labelEl.textContent = defaultLabel;
                productsBtn.classList.remove('is-selected');
            }

            items.forEach(function (a) {
                a.addEventListener('click', function () {
                    // Let the navigation proceed; just record the pick first so the next
                    // page (and this one, briefly) shows it.
                    var key = a.getAttribute('data-product');
                    var lbl = a.getAttribute('data-product-label');
                    try { localStorage.setItem(KEY, key); } catch (err) {}
                    if (lbl) {
                        labelEl.textContent = lbl;
                        productsBtn.classList.add('is-selected');
                    }
                });
            });

            // Clicking the site logo goes to the Elenchon home, so the sticky product
            // label must reset to the neutral default — otherwise it keeps showing the
            // last-picked product (e.g. "WPS Manager") while on the Elenchon home page.
            var navLogo = document.querySelector('.nav-logo');
            if (navLogo) {
                navLogo.addEventListener('click', resetToDefault);
            }
        })();
        // Close on outside click and on Escape.
        document.addEventListener('click', function (e) {
            if (!productsWrap.contains(e.target)) closeProducts();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeProducts();
        });
    }

    /* ---------- Language switcher dropdown (mirrors the in-app LangGlobe) ---------- */
    const langSwitch = document.querySelector('[data-lang-switch]');
    if (langSwitch) {
        const langBtn = document.getElementById('lang-globe-btn');
        const langMenu = document.getElementById('lang-menu');
        const langSearch = document.getElementById('lang-menu-search');
        const langOptions = Array.prototype.slice.call(langMenu.querySelectorAll('.lang-option'));
        const langEmpty = langMenu.querySelector('.lang-menu-empty');

        const closeLang = function () {
            if (langMenu.hidden) return;
            langMenu.hidden = true;
            langBtn.setAttribute('aria-expanded', 'false');
            if (langSearch) { langSearch.value = ''; filterLang(''); }
        };

        const openLang = function () {
            langMenu.hidden = false;
            langBtn.setAttribute('aria-expanded', 'true');
            // Focus the search box so the user can type immediately — desktop only.
            // On touch devices this summons the on-screen keyboard over the language list.
            if (langSearch && !(window.matchMedia && window.matchMedia('(pointer: coarse)').matches)) {
                window.setTimeout(function () { langSearch.focus(); }, 0);
            }
        };

        const filterLang = function (raw) {
            const q = raw.trim().toLowerCase();
            let visible = 0;
            langOptions.forEach(function (opt) {
                const hay = (opt.getAttribute('data-search') || '') + ' ' + opt.textContent.toLowerCase();
                const show = !q || hay.indexOf(q) !== -1;
                opt.hidden = !show;
                if (show) visible++;
            });
            if (langEmpty) langEmpty.hidden = visible !== 0;
        };

        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (langMenu.hidden) { openLang(); } else { closeLang(); }
        });

        if (langSearch) {
            langSearch.addEventListener('input', function () { filterLang(langSearch.value); });
            // Keep clicks inside the search box from bubbling to the close-on-outside handler.
            langSearch.addEventListener('click', function (e) { e.stopPropagation(); });
        }

        // Close on outside click and on Escape.
        document.addEventListener('click', function (e) {
            if (!langSwitch.contains(e.target)) closeLang();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { closeLang(); langBtn.focus(); }
        });
    }

    /* ---------- Hero scroll cue (fade out once scrolling starts) ---------- */
    const scrollCue = document.querySelector('.scroll-cue');
    if (scrollCue) {
        let cueHidden = false;
        const hideCue = function () {
            if (cueHidden) return;
            if (window.scrollY > 40) {
                scrollCue.classList.add('is-hidden');
                cueHidden = true;
                window.removeEventListener('scroll', hideCue);
            }
        };
        window.addEventListener('scroll', hideCue, { passive: true });
        hideCue();
    }

    /* ---------- Copy-to-clipboard (contact page) ---------- */
    const copyBtn = document.getElementById('copy-email');

    if (copyBtn) {
        var docLang = (document.documentElement.lang || 'en').slice(0, 2);
        var copiedLabel = (docLang === 'pt' || docLang === 'es')
            ? 'Copiado \u2713'
            : 'Copied \u2713';
        copyBtn.addEventListener('click', function () {
            const address = copyBtn.dataset.email;
            const restore = function () {
                copyBtn.textContent = address;
            };

            const confirm = function () {
                copyBtn.textContent = copiedLabel;
                setTimeout(restore, 2000);
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(address).then(confirm).catch(function () {
                    window.location.href = 'mailto:' + address;
                });
            } else {
                window.location.href = 'mailto:' + address;
            }
        });
    }

    /* ---------- Ambient network canvas ----------
       A living constellation: glowing nodes drift and gently pulse, links
       brighten as nodes near each other, the cursor lights up (and nudges)
       nearby nodes, and pulses of light periodically travel the links —
       evoking a live traceability network. Tuned to read clearly against the
       dark hero without ever competing with the copy. */
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    // The canvas box is inset from the viewport (below the navbar, above the
    // footer), so its top-left no longer sits at (0,0). These hold that offset
    // in CSS pixels, so pointer coords (which are viewport-relative) can be
    // translated into the canvas's own space for the node interaction.
    let offsetX = 0;
    let offsetY = 0;
    let particles = [];
    let pulses = [];              // travelling light packets on the links
    let animationId = null;
    let frame = 0;

    const CONNECTION_DISTANCE = 165;
    const BLUE = '96, 165, 250';        // #60a5fa — a brighter, easier-to-see blue
    const BLUE_CORE = '191, 219, 254';  // #bfdbfe — near-white node cores
    const MOUSE_RADIUS = 190;           // cursor influence radius

    // Cursor interaction is a pointer-with-hover affordance (desktop/trackpad).
    // On touch devices there's no hover, and a tap would just clump nodes under
    // the finger and leave them there — so we disable it entirely and keep the
    // background a calm, self-contained animation.
    const CAN_HOVER = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // Cursor state (in CSS pixels). active=false until the pointer moves,
    // so nothing lights up before the user interacts.
    const mouse = { x: -9999, y: -9999, active: false };

    function particleCount() {
        // Fewer particles on small screens to keep scrolling smooth
        return window.innerWidth < 768 ? 40 : 90;
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const prevW = width, prevH = height;
        // Width comes from the live box; height is PINNED to a stable value so the
        // canvas never resizes mid-scroll. On mobile the URL bar shows/hides as you
        // scroll, which changes the viewport height (and dvh) continuously — if the
        // canvas tracked that, the browser would re-rasterize this fixed layer on
        // every scroll frame (the "reload on scroll" the user saw). Instead we lock
        // the height to the TALLEST the band can be (largest viewport, URL bar
        // retracted) once, and set it explicitly in pixels so CSS dvh/lvh can't
        // move it. The footer still masks the bottom, so an over-tall canvas is
        // invisible; a stable canvas is smooth.
        const navH = offsetY || canvas.getBoundingClientRect().top || 0;
        const stableViewportH = Math.max(
            window.innerHeight,
            document.documentElement.clientHeight || 0
        );
        width = Math.max(1, Math.round(window.innerWidth));
        height = Math.max(1, Math.round(stableViewportH - navH));
        const r0 = canvas.getBoundingClientRect();
        offsetX = r0.left;
        offsetY = r0.top;
        // Pin the CSS box height in pixels (overrides the lvh fallback) so it can
        // never be nudged by URL-bar-driven viewport changes.
        canvas.style.height = height + 'px';
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (prevW && prevH && particles.length) {
            const sx = width / prevW, sy = height / prevH;
            for (let i = 0; i < particles.length; i++) {
                particles[i].x *= sx;
                particles[i].y *= sy;
            }
        }
    }

    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;
        this.radius = Math.random() * 1.6 + 1.2;
        // Each node breathes on its own phase/speed for a subtle twinkle
        this.phase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.015 + Math.random() * 0.02;
    }

    Particle.prototype.update = function () {
        // Cursor gently pushes nearby nodes, so the whole field reacts to the pointer
        if (mouse.active) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MOUSE_RADIUS && dist > 0.01) {
                const force = (1 - dist / MOUSE_RADIUS) * 0.6;
                this.vx += (dx / dist) * force;
                this.vy += (dy / dist) * force;
            }
        }
        // Light friction so cursor-added energy bleeds off and drift stays calm
        this.vx *= 0.98;
        this.vy *= 0.98;
        // Keep a minimum drift so nodes never fully stall
        const sp = Math.hypot(this.vx, this.vy);
        if (sp < 0.18) {
            const a = Math.random() * Math.PI * 2;
            this.vx += Math.cos(a) * 0.06;
            this.vy += Math.sin(a) * 0.06;
        }
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));
        this.phase += this.pulseSpeed;
    };

    Particle.prototype.draw = function () {
        // Twinkle: radius and brightness breathe together
        const t = (Math.sin(this.phase) + 1) / 2;        // 0..1
        const r = this.radius * (0.85 + t * 0.5);
        // Extra brightness when the cursor is close
        let near = 0;
        if (mouse.active) {
            const d = Math.hypot(this.x - mouse.x, this.y - mouse.y);
            if (d < MOUSE_RADIUS) near = 1 - d / MOUSE_RADIUS;
        }
        const glowA = 0.05 + t * 0.05 + near * 0.22;
        const coreA = 0.26 + t * 0.16 + near * 0.32;

        // Soft radial glow (drawn additively for a neon feel)
        const halo = r * 5;
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, halo);
        g.addColorStop(0, 'rgba(' + BLUE + ', ' + glowA + ')');
        g.addColorStop(1, 'rgba(' + BLUE + ', 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.x, this.y, halo, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + BLUE_CORE + ', ' + Math.min(1, coreA) + ')';
        ctx.fill();
    };

    function buildParticles() {
        particles = [];
        const count = particleCount();
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distance = Math.hypot(dx, dy);

                if (distance < CONNECTION_DISTANCE) {
                    let opacity = 1 - distance / CONNECTION_DISTANCE;
                    // Links near the cursor glow brighter, tracing where you point
                    if (mouse.active) {
                        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
                        const md = Math.hypot(mx - mouse.x, my - mouse.y);
                        if (md < MOUSE_RADIUS) opacity += (1 - md / MOUSE_RADIUS) * 0.9;
                    }
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = 'rgba(' + BLUE + ', ' + Math.min(0.4, opacity * 0.19) + ')';
                    ctx.lineWidth = 1.1;
                    ctx.stroke();
                }
            }
        }
        // The cursor no longer draws links to nearby nodes — it repels them
        // (same-polarity magnet) and brightens them, but stays visually unattached.
    }

    // ---- Travelling data pulses: bright packets that glide between two nearby
    //      nodes, read as data moving through a live network. ----
    function Pulse(from, to) {
        this.from = from;
        this.to = to;
        this.t = 0;
        this.speed = 0.008 + Math.random() * 0.012;
    }
    Pulse.prototype.update = function () { this.t += this.speed; return this.t < 1; };
    Pulse.prototype.draw = function () {
        const a = this.from, b = this.to;
        // Fade out if the endpoints have drifted apart
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > CONNECTION_DISTANCE * 1.3) { this.t = 1; return; }
        const x = a.x + (b.x - a.x) * this.t;
        const y = a.y + (b.y - a.y) * this.t;
        const fade = Math.sin(this.t * Math.PI); // bright in the middle of the trip
        const rr = 2.6 * fade + 0.6;
        const halo = rr * 4;
        const g = ctx.createRadialGradient(x, y, 0, x, y, halo);
        g.addColorStop(0, 'rgba(' + BLUE_CORE + ', ' + (0.4 * fade) + ')');
        g.addColorStop(1, 'rgba(' + BLUE + ', 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, halo, 0, Math.PI * 2);
        ctx.fill();
    };

    function spawnPulse() {
        if (particles.length < 2) return;
        // Find a random node with a nearby neighbour and fire a packet along that link
        const a = particles[(Math.random() * particles.length) | 0];
        let best = null, bestD = CONNECTION_DISTANCE;
        for (let k = 0; k < particles.length; k++) {
            const b = particles[k];
            if (b === a) continue;
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < bestD && Math.random() < 0.5) { best = b; bestD = d; }
        }
        if (best) pulses.push(new Pulse(a, best));
    }

    function drawFrame() {
        ctx.clearRect(0, 0, width, height);

        // Additive blending gives the whole field a soft neon glow
        ctx.globalCompositeOperation = 'lighter';

        for (let i = 0; i < particles.length; i++) particles[i].update();
        drawConnections();
        for (let i = 0; i < particles.length; i++) particles[i].draw();

        // Occasionally emit a new data pulse (density scaled to node count)
        if (!prefersReducedMotion && frame % 26 === 0 && pulses.length < 14) spawnPulse();
        pulses = pulses.filter(function (p) {
            const alive = p.update();
            if (alive) p.draw();
            return alive;
        });

        ctx.globalCompositeOperation = 'source-over';
        frame++;
    }

    function animate() {
        drawFrame();
        animationId = requestAnimationFrame(animate);
    }

    // ---- Pointer tracking — cursor (desktop) and finger (touch) ----
    // The field follows the pointer while it moves and releases the moment it
    // stops interacting, so nodes never get clumped and left there. The old
    // touch problem was two things: (1) the field "refreshed" mid-scroll — fixed
    // by the width-only resize guard below; and (2) a tap had no hover to end, so
    // nodes stayed bunched under the finger. We solve (2) by clearing interaction
    // on touchend/cancel and on scroll, so lifting the finger — or starting to
    // scroll — settles the field straight back to a calm drift.
    if (!prefersReducedMotion) {
        if (CAN_HOVER) {
            window.addEventListener('mousemove', function (e) {
                // Translate viewport coords into the canvas's inset box
                mouse.x = e.clientX - offsetX;
                mouse.y = e.clientY - offsetY;
                mouse.active = true;
            }, { passive: true });
            window.addEventListener('mouseleave', function () { mouse.active = false; });
        } else {
            // Touch: track the finger as a temporary cursor. Listeners are passive
            // so native scrolling is never blocked — the page scrolls exactly as
            // before and the field just reacts to where the finger is.
            function trackTouch(e) {
                if (!e.touches || !e.touches.length) return;
                const t = e.touches[0];
                mouse.x = t.clientX - offsetX;
                mouse.y = t.clientY - offsetY;
                mouse.active = true;
            }
            window.addEventListener('touchstart', trackTouch, { passive: true });
            window.addEventListener('touchmove', trackTouch, { passive: true });
            window.addEventListener('touchend', function () { mouse.active = false; }, { passive: true });
            window.addEventListener('touchcancel', function () { mouse.active = false; }, { passive: true });
        }
        // Dropping interaction while scrolling lets the field settle back to calm —
        // this is what keeps a scroll gesture from dragging the whole field around.
        window.addEventListener('scroll', function () { mouse.active = false; }, { passive: true });
    }

    // ---- Resize: only act on a REAL width change. ----
    // Mobile browsers fire `resize` constantly as the URL bar shows/hides while
    // scrolling (innerHeight changes, width doesn't). Rebuilding there is what
    // made the background "refresh" mid-scroll. We track the last real width and
    // ignore height-only changes; a genuine width change (rotation, desktop
    // window resize) just re-fits the existing nodes — never regenerates them.
    let lastWidth = window.innerWidth;
    let resizeTimer = null;
    window.addEventListener('resize', function () {
        if (window.innerWidth === lastWidth) return; // height-only jitter → ignore
        lastWidth = window.innerWidth;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            resize();               // rescales existing particles into the new box
            if (prefersReducedMotion) drawFrame();
        }, 150);
    });

    // Pause the animation when the tab is hidden (battery friendly)
    document.addEventListener('visibilitychange', function () {
        if (prefersReducedMotion) return;
        if (document.hidden) {
            if (animationId) cancelAnimationFrame(animationId);
            animationId = null;
        } else if (!animationId) {
            animate();
        }
    });

    resize();
    buildParticles();

    if (prefersReducedMotion) {
        // Render a single static frame — no motion, no pulses
        drawFrame();
    } else {
        animate();
    }
})();

/* ==========================================================
   Encryption-layers interactive (security.html)
   Observer selector — seals the layers an observer cannot read
   and spotlights where it sits on the path. All three tunnels are
   post-quantum-safe and opened only at the endpoints.
   ========================================================== */
(function () {
    'use strict';

    var stage = document.getElementById('L-link');
    if (!stage) return; // only on the security page

    var secLang = (document.documentElement.lang || 'en').slice(0, 2);

    var V_EN = {
        all: {
            sealed: [], tone: 'var(--cl-app)', spot: null,
            h: 'All three layers',
            b: 'Three nested tunnels — Link TLS (green) and App TLS (blue) are post-quantum-safe. Ziti E2E (amber) already encrypts its payload with a quantum-fine cipher; only its X25519 key exchange is classical, and Link TLS shields that on the wire — so it is never a harvest-now-decrypt-later exposure. Each is opened only at the endpoints, never on the network.'
        },
        internet: {
            sealed: ['link', 'e2e', 'app'], tone: 'var(--cl-link)',
            spot: { x: 150, y: 240, w: 402, h: 24, color: '#43c08f', lx: 351, ly: 298, t: 'quantum-safe ciphertext only' },
            h: 'On the wire',
            b: 'A recorder on the network captures only the outer <b>Link TLS</b>, which is <b>quantum-safe</b>. There are no keys here to open — so recording now to decrypt later does not work.',
            seals: { link: 'quantum-safe ciphertext — all that crosses the network' }
        },
        phrakton: {
            sealed: ['e2e', 'app'], tone: 'var(--cl-e2e)',
            spot: { x: 242, y: 214, w: 132, h: 160, color: '#ecab45', lx: 308, ly: 390, t: 'opens Link TLS only' },
            h: 'A Phrakton router or host',
            b: 'A router terminates <b>Link TLS</b>, but the traffic stays sealed inside <b>Ziti E2E</b> and <b>App TLS</b>. Routers relay it without holding those keys, so the operator cannot read a tenant’s app data.',
            seals: { e2e: 'still sealed — routers relay, they don’t hold this key' }
        },
        box: {
            sealed: [], tone: 'var(--danger, #e86f60)',
            spot: { x: 586, y: 214, w: 530, h: 160, color: '#e86f60', lx: 851, ly: 390, t: 'endpoint — reaches the data' },
            h: 'A breached box',
            b: 'Ziti E2E and App TLS both terminate on the box, so control of the box means access to the data — <b>for that one tenant only</b>. This is an insider or physical-access risk, not a network one.'
        },
        device: {
            sealed: [], tone: 'var(--cl-muted)',
            spot: { x: 30, y: 214, w: 132, h: 76, color: '#93a4bb', lx: 96, ly: 306, t: 'the intended reader' },
            h: 'The worker’s own device',
            b: 'The worker’s browser is the far end of every layer and holds the keys to its <b>own</b> data. This is the intended reader — nothing unexpected.'
        }
    };

    var V_PT = {
        all: {
            sealed: [], tone: 'var(--cl-app)', spot: null,
            h: 'As três camadas',
            b: 'Três túneis aninhados — o Link TLS (verde) e o App TLS (azul) são resistentes a computação quântica. O Ziti E2E (âmbar) já cifra o conteúdo com uma cifra resistente a quântica; apenas a sua troca de chaves X25519 é clássica, e o Link TLS protege-a na rede — pelo que nunca fica exposta a «capturar agora, decifrar depois». Cada um é aberto apenas nos extremos, nunca na rede.'
        },
        internet: {
            sealed: ['link', 'e2e', 'app'], tone: 'var(--cl-link)',
            spot: { x: 150, y: 240, w: 402, h: 24, color: '#43c08f', lx: 351, ly: 298, t: 'apenas texto cifrado resistente a quântica' },
            h: 'Na rede',
            b: 'Um gravador na rede capta apenas o <b>Link TLS</b> exterior, que é <b>resistente a computação quântica</b>. Não há aqui chaves para abrir — por isso gravar agora para decifrar depois não funciona.',
            seals: { link: 'texto cifrado resistente a quântica — tudo o que atravessa a rede' }
        },
        phrakton: {
            sealed: ['e2e', 'app'], tone: 'var(--cl-e2e)',
            spot: { x: 242, y: 214, w: 132, h: 160, color: '#ecab45', lx: 308, ly: 390, t: 'abre só o Link TLS' },
            h: 'Um router ou host Phrakton',
            b: 'Um router termina o <b>Link TLS</b>, mas o tráfego permanece selado dentro do <b>Ziti E2E</b> e do <b>App TLS</b>. Os routers reencaminham-no sem deter essas chaves, por isso o operador não consegue ler os dados de aplicação de um inquilino.',
            seals: { e2e: 'ainda selado — os routers reencaminham, não detêm esta chave' }
        },
        box: {
            sealed: [], tone: 'var(--danger, #e86f60)',
            spot: { x: 586, y: 214, w: 530, h: 160, color: '#e86f60', lx: 851, ly: 390, t: 'extremo — alcança os dados' },
            h: 'Um equipamento comprometido',
            b: 'O Ziti E2E e o App TLS terminam ambos no equipamento, por isso o controlo do equipamento significa acesso aos dados — <b>apenas para esse inquilino</b>. Isto é um risco de insider ou de acesso físico, não um risco de rede.'
        },
        device: {
            sealed: [], tone: 'var(--cl-muted)',
            spot: { x: 30, y: 214, w: 132, h: 76, color: '#93a4bb', lx: 96, ly: 306, t: 'o leitor pretendido' },
            h: 'O próprio dispositivo do trabalhador',
            b: 'O navegador do trabalhador é o extremo de cada camada e detém as chaves dos <b>seus próprios</b> dados. Este é o leitor pretendido — nada de inesperado.'
        }
    };

    var V_ES = {
        all: {
            sealed: [], tone: 'var(--cl-app)', spot: null,
            h: 'Las tres capas',
            b: 'Tres túneles anidados — el Link TLS (verde) y el App TLS (azul) son resistentes a la computación cuántica. El Ziti E2E (ámbar) ya cifra su contenido con un cifrado resistente a lo cuántico; solo su intercambio de claves X25519 es clásico, y el Link TLS lo protege en la red — por lo que nunca queda expuesto a «capturar ahora, descifrar después». Cada uno se abre únicamente en los extremos, nunca en la red.'
        },
        internet: {
            sealed: ['link', 'e2e', 'app'], tone: 'var(--cl-link)',
            spot: { x: 150, y: 240, w: 402, h: 24, color: '#43c08f', lx: 351, ly: 298, t: 'solo texto cifrado resistente a lo cuántico' },
            h: 'En la red',
            b: 'Un grabador en la red capta únicamente el <b>Link TLS</b> exterior, que es <b>resistente a la computación cuántica</b>. Aquí no hay claves que abrir — por eso grabar ahora para descifrar después no funciona.',
            seals: { link: 'texto cifrado resistente a lo cuántico — todo lo que atraviesa la red' }
        },
        phrakton: {
            sealed: ['e2e', 'app'], tone: 'var(--cl-e2e)',
            spot: { x: 242, y: 214, w: 132, h: 160, color: '#ecab45', lx: 308, ly: 390, t: 'abre solo el Link TLS' },
            h: 'Un router o host Phrakton',
            b: 'Un router termina el <b>Link TLS</b>, pero el tráfico permanece sellado dentro del <b>Ziti E2E</b> y del <b>App TLS</b>. Los routers lo reenvían sin poseer esas claves, por lo que el operador no puede leer los datos de aplicación de un inquilino.',
            seals: { e2e: 'sigue sellado — los routers reenvían, no poseen esta clave' }
        },
        box: {
            sealed: [], tone: 'var(--danger, #e86f60)',
            spot: { x: 586, y: 214, w: 530, h: 160, color: '#e86f60', lx: 851, ly: 390, t: 'extremo — alcanza los datos' },
            h: 'Un equipo comprometido',
            b: 'El Ziti E2E y el App TLS terminan ambos en el equipo, por lo que controlar el equipo significa acceder a los datos — <b>solo para ese inquilino</b>. Esto es un riesgo de insider o de acceso físico, no de red.'
        },
        device: {
            sealed: [], tone: 'var(--cl-muted)',
            spot: { x: 30, y: 214, w: 132, h: 76, color: '#93a4bb', lx: 96, ly: 306, t: 'el lector previsto' },
            h: 'El propio dispositivo del trabajador',
            b: 'El navegador del trabajador es el extremo de cada capa y posee las claves de <b>sus propios</b> datos. Este es el lector previsto — nada inesperado.'
        }
    };

    var V = secLang === 'pt' ? V_PT : (secLang === 'es' ? V_ES : V_EN);
    var DEFAULT_SEAL = secLang === 'pt' ? 'selado — não pode abrir' : (secLang === 'es' ? 'sellado — no se puede abrir' : 'sealed — cannot open');

    var layers = ['link', 'e2e', 'app'];
    var $ = function (id) { return document.getElementById(id); };

    function apply(v) {
        var c = V[v];
        layers.forEach(function (id) {
            var n = $('L-' + id);
            n.classList.toggle('is-sealed', c.sealed.indexOf(id) !== -1);
            var seal = n.querySelector('[data-seal="' + id + '"]');
            seal.textContent = (c.seals && c.seals[id]) ? c.seals[id] : DEFAULT_SEAL;
        });
        $('L-data').style.opacity = c.sealed.indexOf('app') !== -1 ? '.22' : '1';
        $('cl-v-h').textContent = c.h;
        $('cl-v-b').innerHTML = c.b;
        $('cl-verdict').style.borderLeftColor = c.tone;

        var A = $('cl-spotA'), L = $('cl-spotL');
        if (c.spot) {
            A.setAttribute('x', c.spot.x); A.setAttribute('y', c.spot.y);
            A.setAttribute('width', c.spot.w); A.setAttribute('height', c.spot.h);
            A.setAttribute('stroke', c.spot.color); A.setAttribute('stroke-width', '2');
            A.setAttribute('fill', c.spot.color); A.setAttribute('fill-opacity', '.09'); A.setAttribute('opacity', '1');
            L.setAttribute('x', c.spot.lx); L.setAttribute('y', c.spot.ly);
            L.setAttribute('fill', c.spot.color); L.textContent = c.spot.t; L.setAttribute('opacity', '1');
        } else {
            A.setAttribute('opacity', '0'); L.setAttribute('opacity', '0');
        }
        document.querySelectorAll('.cl-vbtn').forEach(function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.v === v));
        });
    }

    document.querySelectorAll('.cl-vbtn').forEach(function (b) {
        b.addEventListener('click', function () { apply(b.dataset.v); });
    });

    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var o = 0;
        var f = document.querySelectorAll('.cl-flow');
        setInterval(function () {
            o = (o - 1) % 10;
            f.forEach(function (x) { x.style.strokeDashoffset = o; });
        }, 70);
    }

    apply('all');
})();

/* ==========================================================
   Pricing view toggle (pricing.html)
   Segmented control switches between the plan cards and the
   full feature-comparison matrix. Progressive enhancement:
   without JS both panels' markup is present and the simple
   view shows by default (the detailed panel carries `hidden`).
   ========================================================== */
(function () {
    'use strict';

    var btnSimple = document.getElementById('toggle-simple');
    var btnDetailed = document.getElementById('toggle-detailed');
    var viewSimple = document.getElementById('view-simple');
    var viewDetailed = document.getElementById('view-detailed');

    if (!btnSimple || !btnDetailed || !viewSimple || !viewDetailed) return;

    function show(detailed) {
        viewDetailed.classList.toggle('is-hidden', !detailed);
        viewDetailed.hidden = !detailed;
        viewSimple.classList.toggle('is-hidden', detailed);
        viewSimple.hidden = detailed;

        btnDetailed.classList.toggle('is-active', detailed);
        btnSimple.classList.toggle('is-active', !detailed);
        btnDetailed.setAttribute('aria-selected', String(detailed));
        btnSimple.setAttribute('aria-selected', String(!detailed));
    }

    btnSimple.addEventListener('click', function () { show(false); });
    btnDetailed.addEventListener('click', function () { show(true); });

    // Arrow-key movement between the two tabs, per the tablist pattern.
    [btnSimple, btnDetailed].forEach(function (btn) {
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                var toDetailed = (e.key === 'ArrowRight');
                show(toDetailed);
                (toDetailed ? btnDetailed : btnSimple).focus();
            }
        });
    });

    // Deep-link: #compare or ?view=compare opens the matrix directly.
    if (window.location.hash === '#compare' ||
        /[?&]view=compare/.test(window.location.search)) {
        show(true);
    }

    /* "Show only differences" filter for the feature matrix. Compares the two
       live plans (Lite vs Standard) and hides feature rows where they match;
       the Premium column is a placeholder and is ignored. Group headers hide
       when they have no visible feature rows left under them. Auto-detected
       from cell content, so it stays correct as rows are added or edited. */
    var diffToggle = document.getElementById('diff-only');
    var matrix = viewDetailed.querySelector('.feature-matrix');
    if (diffToggle && matrix) {
        var norm = function (cell) {
            return cell ? cell.textContent.replace(/\s+/g, ' ').trim() : '';
        };
        var rowsSame = function (row) {
            var lite = row.querySelector('td[data-plan="Lite"]');
            var std = row.querySelector('td[data-plan="Standard"]');
            if (!lite || !std) return true; // not a comparable feature row
            return norm(lite) === norm(std);
        };
        var applyFilter = function (diffOnly) {
            var groups = matrix.querySelectorAll('tbody > tr');
            var currentGroupHeader = null;
            var groupHasVisible = false;
            var flushGroup = function () {
                if (currentGroupHeader) {
                    currentGroupHeader.hidden = diffOnly && !groupHasVisible;
                }
            };
            groups.forEach(function (row) {
                if (row.classList.contains('fm-group')) {
                    flushGroup();
                    currentGroupHeader = row;
                    groupHasVisible = false;
                    return;
                }
                var hide = diffOnly && rowsSame(row);
                row.hidden = hide;
                if (!hide) groupHasVisible = true;
            });
            flushGroup();
        };
        diffToggle.addEventListener('change', function () {
            applyFilter(diffToggle.checked);
        });
    }
})();

/* ==========================================================
   Screenshot lightbox — click any zoomable app screenshot to
   view it full-screen, then click the image to cycle zoom.

   Interaction model
   -----------------
   Presence: OPEN builds the overlay and appends it to the DOM;
   CLOSE removes it from the DOM outright. Visibility is never
   controlled by opacity/hidden/timers, so a closed lightbox can
   never linger invisibly over the page.

   Inside an open lightbox:
     - click the IMAGE   -> cycle zoom  fit -> 1.75x -> fit
                            (zoom is centred on the click point)
     - drag the IMAGE    -> pan around while zoomed (not a zoom step)
     - click the BACKDROP -> if zoomed, reset to fit; if already
                            at fit, close
     - the X button      -> always close
     - Escape            -> always close
   ========================================================== */
(function () {
    'use strict';

    var triggers = document.querySelectorAll('[data-zoomable]');
    if (!triggers.length) return;

    var ZOOM_STEPS = [1, 1.75];        // fit, then one zoom level; wraps back to fit
    var DRAG_THRESHOLD = 6;            // px moved before a press counts as a drag

    var overlay = null;
    var overlayImg = null;
    var lastFocused = null;
    var onKeydown = null;

    // per-open zoom/pan state
    var zoomIndex = 0;                 // index into ZOOM_STEPS
    var panX = 0, panY = 0;           // current translate (px)
    var origin = { x: 50, y: 50 };    // transform-origin (%) — the click point

    function applyTransform() {
        var scale = ZOOM_STEPS[zoomIndex];
        overlayImg.style.transformOrigin = origin.x + '% ' + origin.y + '%';
        overlayImg.style.transform = 'translate(' + panX + 'px,' + panY + 'px) scale(' + scale + ')';
        overlayImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
        overlayImg.classList.toggle('is-zoomed', scale > 1);
    }

    function resetZoom() {
        zoomIndex = 0; panX = 0; panY = 0; origin = { x: 50, y: 50 };
        applyTransform();
    }

    function closeBox() {
        if (!overlay) return;
        var el = overlay;
        overlay = null; overlayImg = null;
        if (onKeydown) { document.removeEventListener('keydown', onKeydown); onKeydown = null; }
        document.body.style.overflow = '';
        if (el.parentNode) el.parentNode.removeChild(el);
        if (lastFocused && typeof lastFocused.focus === 'function') { try { lastFocused.focus(); } catch (e) {} }
        lastFocused = null;
    }

    function openBox(img, caption) {
        if (overlay) closeBox();
        lastFocused = document.activeElement;
        zoomIndex = 0; panX = 0; panY = 0; origin = { x: 50, y: 50 };

        overlay = document.createElement('div');
        overlay.className = 'app-lightbox';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Screenshot');

        overlayImg = document.createElement('img');
        overlayImg.src = img.currentSrc || img.src;
        overlayImg.alt = img.alt || '';
        overlayImg.className = 'app-lightbox-img';
        overlayImg.draggable = false;

        var overlayCap = document.createElement('p');
        overlayCap.className = 'app-lightbox-cap';
        if (caption) { overlayCap.textContent = caption; } else { overlayCap.style.display = 'none'; }

        var close = document.createElement('button');
        close.type = 'button';
        close.className = 'app-lightbox-close';
        close.setAttribute('aria-label', 'Close');
        close.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>';
        close.addEventListener('click', function (e) { e.stopPropagation(); closeBox(); });

        overlay.appendChild(overlayImg);
        overlay.appendChild(overlayCap);
        overlay.appendChild(close);

        // ---- backdrop click: reset if zoomed, else close ----
        overlay.addEventListener('click', function (e) {
            if (e.target === overlayImg) return;       // image handles its own clicks
            if (e.target === close) return;            // close handles itself
            if (ZOOM_STEPS[zoomIndex] > 1) { resetZoom(); }
            else { closeBox(); }
        });

        // ---- image: click cycles zoom, drag pans ----
        var down = null;     // {x,y,panX,panY} while a press is active
        var moved = false;

        overlayImg.addEventListener('pointerdown', function (e) {
            down = { x: e.clientX, y: e.clientY, panX: panX, panY: panY };
            moved = false;
            if (ZOOM_STEPS[zoomIndex] > 1) {
                overlayImg.style.cursor = 'grabbing';
                try { overlayImg.setPointerCapture(e.pointerId); } catch (err) {}
            }
        });

        overlayImg.addEventListener('pointermove', function (e) {
            if (!down) return;
            var dx = e.clientX - down.x, dy = e.clientY - down.y;
            if (!moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) moved = true;
            if (moved && ZOOM_STEPS[zoomIndex] > 1) {
                panX = down.panX + dx;
                panY = down.panY + dy;
                applyTransform();
            }
        });

        overlayImg.addEventListener('pointerup', function (e) {
            try { overlayImg.releasePointerCapture(e.pointerId); } catch (err) {}
            if (!down) { applyTransform(); return; }
            var wasDrag = moved;
            down = null;

            if (wasDrag) {
                // a pan, not a zoom step — re-sync the cursor away from 'grabbing'
                applyTransform();
                return;
            }

            // a genuine click -> advance the zoom cycle, centred on the click
            var next = (zoomIndex + 1) % ZOOM_STEPS.length;
            if (next === 0) {
                resetZoom();
            } else {
                var rect = overlayImg.getBoundingClientRect();
                origin.x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
                origin.y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
                panX = 0; panY = 0;      // re-centre pan on each fresh zoom step
                zoomIndex = next;
            }
            // always restore the correct cursor for the resulting zoom state,
            // so a press that set 'grabbing' can never get stuck
            applyTransform();
        });

        // if the gesture is cancelled (e.g. pointer capture lost), never leave
        // the cursor stuck on 'grabbing' — restore it to match the zoom state
        overlayImg.addEventListener('pointercancel', function (e) {
            try { overlayImg.releasePointerCapture(e.pointerId); } catch (err) {}
            down = null; moved = false;
            applyTransform();
        });

        // swallow the trailing click so it doesn't reach the backdrop handler
        overlayImg.addEventListener('click', function (e) { e.stopPropagation(); });

        onKeydown = function (e) { if (e.key === 'Escape') closeBox(); };
        document.addEventListener('keydown', onKeydown);

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        applyTransform();
    }

    triggers.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var img = btn.querySelector('img');
            var fig = btn.closest('figure');
            var cap = fig ? fig.querySelector('figcaption') : null;
            if (img) openBox(img, cap ? cap.textContent.trim() : '');
        });
    });
})();
