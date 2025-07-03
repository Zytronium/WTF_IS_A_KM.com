document.addEventListener('DOMContentLoaded', () => {
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';

        const particleCount = 30; // increased from 20
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 160 + 60; // 60–220px radius
            const dx = Math.cos(angle) * distance + 'px';
            const dy = Math.sin(angle) * distance + 'px';

            particle.style.setProperty('--dx', dx);
            particle.style.setProperty('--dy', dy);
            particle.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;

            firework.appendChild(particle);
        }

        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
    }

    for (let i = 0; i < 6; i++) {
        setInterval(createFirework, Math.random() * 4900 + 100);
    }
})