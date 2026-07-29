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

        // Close the menu after choosing a destination
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open menu');
            });
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
        copyBtn.addEventListener('click', function () {
            const address = copyBtn.dataset.email;
            const restore = function () {
                copyBtn.textContent = address;
            };

            const confirm = function () {
                copyBtn.textContent = 'Copied \u2713';
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

    var V = {
        all: {
            sealed: [], tone: 'var(--cl-app)', spot: null,
            h: 'All three layers',
            b: 'Three nested post-quantum-safe tunnels — Link TLS (green), Ziti E2E (amber) and App TLS (blue). Each one is opened only at the endpoints, never on the network.'
        },
        internet: {
            sealed: ['link', 'e2e', 'app'], tone: 'var(--cl-link)',
            spot: { x: 150, y: 238, w: 400, h: 30, color: '#43c08f', lx: 350, ly: 292, t: 'quantum-safe ciphertext only' },
            h: 'On the wire',
            b: 'A recorder on the network captures only the outer <b>Link TLS</b>, which is <b>quantum-safe</b>. There are no keys here to open — so recording now to decrypt later does not work.',
            seals: { link: 'quantum-safe ciphertext — all that crosses the network' }
        },
        phrakton: {
            sealed: ['e2e', 'app'], tone: 'var(--cl-e2e)',
            spot: { x: 250, y: 184, w: 120, h: 96, color: '#ecab45', lx: 310, ly: 300, t: 'opens Link TLS only' },
            h: 'A Phrakton router or host',
            b: 'A router terminates <b>Link TLS</b>, but the traffic stays sealed inside <b>Ziti E2E</b> and <b>App TLS</b>. Routers relay it without holding those keys, so the operator cannot read a tenant’s app data.',
            seals: { e2e: 'still sealed — routers relay, they don’t hold this key' }
        },
        box: {
            sealed: [], tone: 'var(--danger, #e86f60)',
            spot: { x: 568, y: 216, w: 292, h: 72, color: '#e86f60', lx: 714, ly: 304, t: 'endpoint — reaches the data' },
            h: 'A breached box',
            b: 'Ziti E2E and App TLS both terminate on the box, so control of the box means access to the data — <b>for that one tenant only</b>. This is an insider or physical-access risk, not a network one.'
        },
        device: {
            sealed: [], tone: 'var(--cl-muted)',
            spot: { x: 26, y: 220, w: 118, h: 64, color: '#93a4bb', lx: 85, ly: 300, t: 'the intended reader' },
            h: 'The worker’s own device',
            b: 'The worker’s browser is the far end of every layer and holds the keys to its <b>own</b> data. This is the intended reader — nothing unexpected.'
        }
    };

    var layers = ['link', 'e2e', 'app'];
    var $ = function (id) { return document.getElementById(id); };

    function apply(v) {
        var c = V[v];
        layers.forEach(function (id) {
            var n = $('L-' + id);
            n.classList.toggle('is-sealed', c.sealed.indexOf(id) !== -1);
            var seal = n.querySelector('[data-seal="' + id + '"]');
            seal.textContent = (c.seals && c.seals[id]) ? c.seals[id] : 'sealed — cannot open';
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
