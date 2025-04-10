// Animations for Elite Group Facility Management

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add animation classes to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.classList.add('slide-in-bottom');
    });
    
    // Add animation classes to stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.classList.add('slide-in-bottom');
    });
    
    // Add animation to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.classList.add('fade-in');
    });
    
    // Add animation to about-content
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.classList.add('slide-in-left');
    }
});

// Initialize scroll animations for elements that should animate when they come into view
function initScrollAnimations() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate');
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% of the element must be visible
        rootMargin: '0px' // no margin around the viewport
    });
    
    // Elements to observe
    const elements = document.querySelectorAll('.service-grid, .stats, .testimonial-grid, .about-content, .section-title');
    
    // Start observing each element
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Add a class when scrolled past a certain point (for sticky header effect)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}); 