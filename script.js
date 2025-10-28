// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.about-card, .stock-item, .feature-card, .result-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Stock card hover effect with random price changes (simulation)
const stockCards = document.querySelectorAll('.stock-card');
stockCards.forEach(card => {
    setInterval(() => {
        const changeElement = card.querySelector('.stock-change');
        const currentChange = parseFloat(changeElement.textContent);
        const newChange = (currentChange + (Math.random() - 0.5) * 0.5).toFixed(1);
        changeElement.textContent = `${newChange > 0 ? '+' : ''}${newChange}%`;
        changeElement.className = `stock-change ${newChange >= 0 ? 'positive' : 'negative'}`;
    }, 3000);
});