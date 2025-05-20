//stickers
var milkbun = document.getElementById("milkbun")

milkbun.addEventListener("mouseover", function () {
    milkbun.style.transition = ("transform 0.2s ease")
    milkbun.style.transform = "rotate(6deg) scale(.9)";
    milkbun.src = "images/milkbun-1.png";
})

milkbun.addEventListener("mouseout", function () {
    milkbun.style.transform = "rotate(0deg)";
    milkbun.src = "images/milkbun.png";
})


var dino = document.getElementById("dino");

dino.addEventListener("mouseover", function () {
    dino.style.transition = "transform 0.3s ease"; // Add transition
    dino.style.transform = "rotate(6deg) scale(1.2)"
    dino.src = "images/dino-1.png";
});

dino.addEventListener("mouseout", function () {
    dino.src = "images/dino.png";
    dino.style.transform = "rotate(0deg)"
});

// planner buttons

