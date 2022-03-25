container = document.querySelector(".container");
    row = document.createElement("div");
    row.classList.add("row")
    container.appendChild(row)
 
        

function createSquare() {
    square = document.createElement("div");
    square.classList.add("square-css");
    row.appendChild(square);
}

function createSixteenSquares() {
    for (i=0; i < 16; i++) {
        createSquare();
    }
}

createSixteenSquares();