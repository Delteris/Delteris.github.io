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
            // Focus the search box so the user can type immediately (desktop).
            if (langSearch) { window.setTimeout(function () { langSearch.focus(); }, 0); }
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
        var copiedLabel = (document.documentElement.lang || 'en').slice(0, 2) === 'pt'
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

    /* ---------- Ambient network canvas ---------- */
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;

    const CONNECTION_DISTANCE = 160;
    const BLUE = '59, 130, 246'; // #3b82f6
    const FRAME_INTERVAL = 1000 / 30; // 30fps is plenty for an ambient backdrop

    let lastFrame = 0;

    function particleCount() {
        // Restrained density — the backdrop should never compete with the copy
        return window.innerWidth < 768 ? 24 : 52;
    }

    function resize() {
        // Render at device resolution so dots and lines stay crisp on retina
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.34;
        this.vy = (Math.random() - 0.5) * 0.34;
        this.radius = Math.random() * 1.1 + 0.9;
    }

    Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    };

    Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + BLUE + ', 0.34)';
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
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONNECTION_DISTANCE) {
                    const opacity = 1 - distance / CONNECTION_DISTANCE;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = 'rgba(' + BLUE + ', ' + opacity * 0.12 + ')';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    function drawFrame() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(function (p) {
            p.update();
            p.draw();
        });
        drawConnections();
    }

    function animate(now) {
        animationId = requestAnimationFrame(animate);
        if (now - lastFrame < FRAME_INTERVAL) return;
        lastFrame = now;
        drawFrame();
    }

    let resizeTimer = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            resize();
            buildParticles();
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
        // Render a single static frame — no motion
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

    var isPT = (document.documentElement.lang || 'en').slice(0, 2) === 'pt';

    var V_EN = {
        all: {
            sealed: [], tone: 'var(--cl-app)', spot: null,
            h: 'All three layers',
            b: 'Three nested post-quantum-safe tunnels — Link TLS (green), Ziti E2E (amber) and App TLS (blue). Each one is opened only at the endpoints, never on the network.'
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
            b: 'Três túneis aninhados resistentes a computação quântica — Link TLS (verde), Ziti E2E (âmbar) e App TLS (azul). Cada um é aberto apenas nos extremos, nunca na rede.'
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

    var V = isPT ? V_PT : V_EN;
    var DEFAULT_SEAL = isPT ? 'selado — não pode abrir' : 'sealed — cannot open';

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
     - click the IMAGE   -> cycle zoom  fit -> 1.75x -> 2.5x -> fit
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

    var ZOOM_STEPS = [1, 1.75, 2.5];   // fit, then in; wraps back to fit
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
            if (!down) return;
            var wasDrag = moved;
            down = null;
            if (wasDrag) { applyTransform(); return; }   // a pan, not a zoom step

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
                applyTransform();
            }
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
