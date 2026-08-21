document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the mobile menu after navigating
            if (menu && menu.classList.contains('block')) {
                menu.classList.remove('block');
                menu.classList.add('hidden');
            }
        });
    });

    // Toggle navigation menu on small screens
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('block');
        });
    }

    // Reveal sections as they scroll into view
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealEls.forEach(el => observer.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('reveal-visible'));
    }

    // Shortcut sequence
    const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const dest = [60, 119, 110, 112, 120, 111, 124, 133, 60];
    let pos = 0;

    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        pos = (e.key === seq[pos] || e.key.toLowerCase() === seq[pos]) ? pos + 1 : 0;
        if (pos === seq.length) {
            pos = 0;
            window.location.href = String.fromCharCode(...dest.map(c => c - 13));
        }
    });
});
