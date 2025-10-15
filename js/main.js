// Scheduloom - Main JavaScript

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.navbar');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navbar.classList.toggle('mobile-active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-item a, .nav-right a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('mobile-active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.logo-item, .footer-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Console welcome message
console.log('%cWelcome to Scheduloom!', 'font-size: 20px; font-weight: bold; color: #000;');
console.log('%cSmart Scheduling Made Simple', 'font-size: 14px; color: #666;');
