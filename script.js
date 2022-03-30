container = document.querySelector(".container");
        
function createSquare() {
    let square = document.createElement("div");
    square.classList.add("square-css");
    row.appendChild(square);
}

function createGrid(n) {
    for (i=0; i < n; i++) {
        row = document.createElement("div");
        row.classList.add("row")
        container.appendChild(row)

        for (j=0; j < n; j++) {
            createSquare();
        }
    }
}


let isDrawing = false;

createGrid(16);

let squares = document.querySelectorAll('.square-css');

container.addEventListener('mousedown', e => {
    e.preventDefault();
    isDrawing = true;
});

squares.forEach(square => square.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        square.style.backgroundColor = 'yellow';
    };
}));

container.addEventListener('mouseup', e => {
    e.preventDefault();
    if (isDrawing === true) {
        isDrawing = false;
    };
    console.log("mouse is up")
});
