// // sticker hover
// var dino = document.getElementById("dino");

// dino.addEventListener("mouseover", function () {
//   dino.src = "images/dino-1.png";
// });

// dino.addEventListener("mouseout", function () {
//   dino.src = "images/dino.png";
// });

// collapsible button

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// load logbook

function loadLogbook() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("logbook").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "text/logbook.xhtml");
  xhttp.send();
}

loadLogbook()

// lastfm loader

{
  let user = 'harperka';
  let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
  let song = document.querySelector('#song');
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      song.innerHTML = json['track']['name'] + ' - ' + json['track']['artist']['#text'];
    });
}


// load recipe

// var coll = document.getElementsByClassName("recipeSelect");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     // var content = this.nextElementSibling;
//     // if (content.style.display === "block") {
//     //   content.style.display = "none";
//     // } else {
//     //   content.style.display = "block";
//     // }
//   });
// }