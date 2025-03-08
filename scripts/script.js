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
} 


function loadLogbook() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("logbook").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "logbook.xml");
  xhttp.send();
}

loadLogbook()
=======



var spoil = document.getElementsByClassName("spoiler");
var i;

for (i = 0; i < spoil.length; i++) {
  spoil[i].addEventListener("click", function () {
    // Toggle the 'active' class
    this.classList.toggle("active");

    var content = this
    // Check if the 'active' class is present and change the background color accordingly
    if (this.classList.contains("active")) {
      this.style.backgroundColor = "yellow"; // Reveals the text with a background color change (you can choose the color)
      this.style.color = "black"; // Optionally, change the text color to make it more visible
    } else {
      this.style.backgroundColor = "black"; // Original background color (or color you want when the text is hidden)
      this.style.color = "black"; // Keep text color black when it's hidden
    }
  });
}

