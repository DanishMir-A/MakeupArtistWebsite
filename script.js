// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const navItems = document.querySelectorAll('.nav-links a');

    function toggleMenu(isOpen) {
        const shouldOpen = typeof isOpen === 'boolean' ? isOpen : !navLinks.classList.contains('active');
        
        if (shouldOpen) {
            menuToggle.classList.add('active');
            navLinks.classList.add('active');
            menuBackdrop.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('no-scroll');
        } else {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuBackdrop.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => toggleMenu());
    }

    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', () => toggleMenu(false));
    }

    // Close mobile menu when a nav link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    // Intersection Observer for scroll animations (fade-in)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });
});
