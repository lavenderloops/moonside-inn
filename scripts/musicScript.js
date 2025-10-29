// var week = document.getElementById("week")

// week.addEventListener("mouseover", function () {
//     week.style.backgroundColor = "var(--alert)";
//     week.style.color = "black";
// })

// week.addEventListener("mouseout", function () {
//     week.style.backgroundColor = "";
//     week.style.color = "";
// })

document.addEventListener("DOMContentLoaded", function () {
    // Select all <td> elements inside the playlist table
    const cells = document.querySelectorAll(".playlist-table td");

    cells.forEach(cell => {
        // Hover effect on cell
        cell.addEventListener("mouseover", function () {
            this.style.backgroundColor = "var(--alert)";
            this.style.color = "black";
            
        });

        cell.addEventListener("mouseout", function () {
            this.style.backgroundColor = "";
            this.style.color = "";
        });
    });
});
