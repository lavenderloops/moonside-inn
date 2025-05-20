//stickers
var milkbun = document.getElementById("milkbun")

milkbun.addEventListener("mouseover", function () {
    milkbun.style.transition = ("transform 0.2s ease")
    milkbun.style.transform = "rotate(6deg) scale(.9)";
    milkbun.src = "/adventure-log/images/milkbun-1.png";
})

milkbun.addEventListener("mouseout", function () {
    milkbun.style.transform = "rotate(0deg)";
    milkbun.src = "/adventure-log/images/milkbun.png";
})


var dino = document.getElementById("dino");

dino.addEventListener("mouseover", function () {
    dino.style.transition = "transform 0.3s ease"; // Add transition
    dino.style.transform = "rotate(6deg) scale(1.2)"
    dino.src = "/adventure-log/images/dino-1.png";
});

dino.addEventListener("mouseout", function () {
    dino.src = "/adventure-log/images/dino.png";
    dino.style.transform = "rotate(0deg)"
});

// planner buttons
// var planner = document.getElementsByClassName("planner");
var i;
const buttons = document.querySelectorAll('button');


for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(onButtonClick) {
        const clickedButtonId = event.target.id;
        if (clickedButtonId === '0417') {
            this.style.backgroundColor = "red"
        }
    });
}


// for (i = 0; i < buttons.length; i++) {
//     // Correctly pass the function reference
//     buttons[i].addEventListener('click', function(event) {
//         // 'this' inside a regular function refers to the element that triggered the event
//         this.style.transform = "rotate(2deg)"; 
//     });
// }