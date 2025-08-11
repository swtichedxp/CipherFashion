document.addEventListener('DOMContentLoaded', () => {
    // HAMBURGER MENU TOGGLE
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // HERO SLIDER
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.opacity = '0';
        });
        slides[index].style.opacity = '1';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);
});
