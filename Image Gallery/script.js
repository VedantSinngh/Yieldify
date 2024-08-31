window.addEventListener('scroll', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const scrollPosition = window.scrollY;

    // Adjust the speed by changing the multiplier
    const speed = 0.5;

    // Calculate the new position based on scroll position and speed
    const newX = 100 - (scrollPosition * speed);

    // Apply the transform
    galleryGrid.style.transform = `translateX(${newX}%)`;
});
