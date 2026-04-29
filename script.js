/**
 * 1. Theme Persistence
 * Saves the user's night/light mode preference to the browser
 */
const themeToggle = document.querySelector('#theme-toggle');

// Check for saved theme on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    themeToggle.checked = true;
}

// Listen for toggle changes
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

/**
 * 2. Scroll Reveal Animation
 * Triggers a "fade up" effect when elements enter the viewport
 */
const revealElements = () => {
    const reveals = document.querySelectorAll('.section, .project-card, .service-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Delay in pixels before revealing

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

/**
 * 3. Dynamic Navbar
 * Shrinks the navbar when the user scrolls down
 */
const handleNavbar = () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

/**
 * Initialize Listeners
 */
window.addEventListener('scroll', () => {
    revealElements();
    handleNavbar();
});

// Run on initial load
document.addEventListener('DOMContentLoaded', () => {
    // Manually trigger once to check items already in view
    revealElements();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});