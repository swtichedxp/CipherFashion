document.addEventListener('DOMContentLoaded', () => {
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.getElementById('navLinks');
const scrollElements = document.querySelectorAll('.animate-on-scroll');
// Header Animation
setTimeout(() => {
    navbar.classList.add('loaded');
}, 100); // Small delay to ensure smooth transition

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, {
    threshold: 0.15 // Trigger animation when 15% of the element is visible
});

scrollElements.forEach((el) => {
    observer.observe(el);
});

});
