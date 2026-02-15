
// Infinite Gallery (Left to Right)
const setupGallery = () => {
    const track = document.querySelector('.slide-track');
    if (!track) return;

    // We have 12 images total (6 original + 6 duplicates).
    // Width of one slide is 250px.
    const slideWidth = 250;
    const totalSlides = 12;
    const halfSlides = 6;
    const totalWidth = slideWidth * totalSlides;
    const singleSetWidth = slideWidth * halfSlides; // Width of the original 6 images

    // We want to move Left to Right.
    // This means items enter from the left.
    // Conceptually: We start with the duplicate set (left set) visible or partially invisible?
    // Actually, to loop endlessly L->R:
    // We start at position X = -singleSetWidth (so the right set is visible, and the left set is ready to slide in).
    // We increment X.
    // When X >= 0, we reset to -singleSetWidth.

    let currentPosition = -singleSetWidth;
    const speed = 1.0; // Pixels per frame. Adjust for valid speed.

    function animate() {
        currentPosition += speed;

        // Reset condition
        if (currentPosition >= 0) {
            currentPosition = -singleSetWidth;
        }

        track.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(animate);
    }

    animate();
};

document.addEventListener('DOMContentLoaded', setupGallery);
