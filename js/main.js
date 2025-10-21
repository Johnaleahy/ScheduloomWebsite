// Scheduloom - Main JavaScript

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.navbar');

// Early guard: ensure critical elements exist
if (!navbar) {
    console.warn('Navbar element not found. Some features may not work.');
}

if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener('click', () => {
        navbar.classList.toggle('mobile-active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (navbar) {
    document.querySelectorAll('.nav-item a, .nav-right a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('mobile-active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        });
    });
}

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
if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }, { passive: true });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class to trigger CSS animation
            entry.target.classList.add('fade-in-visible');
            entry.target.classList.remove('fade-in-initial');
            // Stop observing this element to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.logo-item, .footer-card').forEach(el => {
    // Apply initial hidden state via CSS class
    el.classList.add('fade-in-initial');
    observer.observe(el);
});

// Console welcome message
console.log('%cWelcome to Scheduloom!', 'font-size: 20px; font-weight: bold; color: #000;');
console.log('%cSmart Scheduling Made Simple', 'font-size: 14px; color: #666;');
