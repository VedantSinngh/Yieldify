document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const subSection = document.querySelector('.sub');
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroSection.offsetHeight / 2) {
        heroSection.classList.add('hidden');
        subSection.classList.add('visible');
    } else {
        heroSection.classList.remove('hidden');
        subSection.classList.remove('visible');
    }
});

// Script to handle the slideshow effect on scroll
document.addEventListener('scroll', function() {
    const slideshow = document.getElementById('slideshow');
    const images = document.querySelectorAll('.gallery-image');
    const rect = slideshow.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const slideshowTop = rect.top + scrollTop;
    const slideshowBottom = slideshowTop + rect.height;

    if (scrollTop >= slideshowTop && scrollTop <= slideshowBottom) {
        const index = Math.floor((scrollTop - slideshowTop) / (rect.height / images.length));
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    } else {
        images.forEach(img => img.classList.remove('active'));
    }
});

// JavaScript for Gallery Slideshow Effect
document.addEventListener('scroll', function () {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    galleryImages.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        const imgTop = rect.top + scrollTop;

        if (scrollTop > imgTop - window.innerHeight + 200) {
            img.style.transform = 'scale(1)';
            img.style.opacity = '1';
        } else {
            img.style.transform = 'scale(0.8)';
            img.style.opacity = '0';
        }
    });
});

// Initialization
window.addEventListener('load', function () {
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach(img => {
        img.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        img.style.transform = 'scale(0.8)';
        img.style.opacity = '0';
    });
});
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
        let answer = item.querySelector('.faq-answer');
        if (item.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            item.setAttribute('aria-expanded', 'true');
        } else {
            answer.style.maxHeight = '0';
            item.setAttribute('aria-expanded', 'false');
        }
    });
});