const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
const numStars = 200;

// Mouse interaction variables
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.baseSpeed = (Math.random() * 0.5) + 0.1;
        this.speed = this.baseSpeed;
        this.alpha = Math.random();
    }

    update() {
        // Subtle parallax effect based on mouse movement
        const dx = (targetX - width / 2) * 0.0005 * this.size;
        const dy = (targetY - height / 2) * 0.0005 * this.size;
        
        this.y -= (this.speed + dy);
        this.x -= dx;

        if (this.y < 0) this.y = height;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    resize();
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }
    window.addEventListener('resize', resize);
    
    // Track mouse for parallax
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Smooth easing for mouse target
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    stars.forEach(star => {
        star.update();
        star.draw();
    });
    
    requestAnimationFrame(animate);
}

init();
animate();
