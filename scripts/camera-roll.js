document.addEventListener("DOMContentLoaded", function () {
    const cameraRoll = document.querySelector(".camera-roll");
    const images = [
        "/images/camera-roll/reserve.png",
        "/images/camera-roll/clouds.png",
        "/images/camera-roll/sunset.png",
        "/images/camera-roll/hilltop.png",
        "/images/camera-roll/lumitube.png",
        "/images/camera-roll/bunbuns.png",
    ];

    let currentIndex = 0;

    function updateImage() {
        cameraRoll.innerHTML = `<img src="${images[currentIndex]}" alt="">`;
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    document.querySelector(".back").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Initialize with the first image
    updateImage();
});