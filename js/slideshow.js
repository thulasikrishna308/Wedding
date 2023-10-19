document.addEventListener('DOMContentLoaded', function () {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.slideshow img');

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.style.transform = 'translateX(-' + (index * 100) + '%)';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
});
