document.addEventListener('DOMContentLoaded', () => {
    // HAMBURGER MENU TOGGLE
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
});
