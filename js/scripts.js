function toggleMenu(menu) {
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
}

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle navigation menu on small screens
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            toggleMenu(menu);
        });
    }
});

if (typeof module !== 'undefined') {
    module.exports = { toggleMenu };
}
