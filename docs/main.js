/* ==========================================================
   WeldTrack by FacTrack — landing page behavior
   1. Ambient network canvas (brand blue #3b82f6)
   2. Mobile navigation toggle
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

    /* ---------- Ambient network canvas ---------- */
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;

    const CONNECTION_DISTANCE = 150;
    const BLUE = '59, 130, 246'; // #3b82f6

    function particleCount() {
        // Fewer particles on small screens to keep scrolling smooth
        return window.innerWidth < 768 ? 35 : 80;
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 1;
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
        ctx.fillStyle = 'rgba(' + BLUE + ', 0.5)';
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
                    ctx.strokeStyle = 'rgba(' + BLUE + ', ' + opacity * 0.2 + ')';
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

    function animate() {
        drawFrame();
        animationId = requestAnimationFrame(animate);
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
