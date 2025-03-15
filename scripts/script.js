var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
<<<<<<< Updated upstream
} 
=======
}

// load logbook

function loadLogbook() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("logbook").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "text/logbook.xml");
  xhttp.send();
}

loadLogbook()

// lastfm loader

{
  let user = 'harperka';
  let url = 'https://crossorigin.me/https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
  let song = document.querySelector('#song');
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      song.innerHTML = json['track']['name'] + ' - ' + json['track']['artist']['#text'];
    });
}

// modal

// Open the Modal
function openModal() {
  document.getElementById("galleryModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("galleryModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
>>>>>>> Stashed changes
