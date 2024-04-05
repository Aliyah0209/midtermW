document.addEventListener('DOMContentLoaded', function () {
    const projectsCarousel = document.getElementById('projectsCarousel');
    projectsCarousel.addEventListener('shown.bs.carousel', function () {
        setTimeout(function () {
            nextSlide();
        }, 800);
    });
});

function nextSlide() {
    const projectsCarousel = document.getElementById('projectsCarousel');
    const carousel = bootstrap.Carousel.getInstance(projectsCarousel);
    carousel.next();
}