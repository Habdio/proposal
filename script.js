// 1. SET THE BIRTHDAY DATE HERE
const birthdayDate = "December 31, 2026 00:00:00"; // Change this!

function updateCountdown() {
    const target = new Date(birthdayDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff > 0) {
        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
}

setInterval(updateCountdown, 1000);

// 2. CONFETTI LOGIC
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('confettiBtn');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
const colors = ['#ff477e', '#ff85a1', '#fbb1bd', '#f9bec7', '#ff0a54'];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            rotation: Math.random() * 360
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
        p.y += p.speed;
        p.rotation += p.speed;
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
    });
    requestAnimationFrame(animate);
}

btn.addEventListener('click', () => {
    createConfetti();
    animate();
});

// Auto-start a little confetti on load
window.onload = () => {
    createConfetti();
    animate();
    updateCountdown();
};
