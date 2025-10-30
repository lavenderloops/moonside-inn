document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector("#moonplayer .play");
    const pauseButton = document.querySelector("#moonplayer .pause");
    const audio = document.getElementById("song");

    audio.volume = 0.6;

    // Play button
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    });

    // Pause button
    pauseButton.addEventListener("click", function () {
        audio.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    });
});

