document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const themeToggle = document.querySelector('#theme-toggle');

    // 1. Smooth Cursor Follower
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor interaction
    document.querySelectorAll('a, label, .project-card').forEach(link => {
        link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
        link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });

    // 2. Theme Persistence
    if (localStorage.getItem('theme') === 'dark') themeToggle.checked = true;
    themeToggle.addEventListener('change', () => {
        localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
    });

    // 3. Intersection Observer for Scroll Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .project-card, .service-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
        observer.observe(el);
    });

    // Reveal Logic
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.active').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    });
});