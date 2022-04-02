let container = document.querySelector('.container');
container.classList.add('.container');
        
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

createGrid(100);

let isDrawing = false;

let squares = document.querySelectorAll('.square-css');

document.addEventListener('mousedown', e => {
    e.preventDefault();
    isDrawing = true;
});

squares.forEach(square => square.addEventListener('mousemove', e => {
    e.preventDefault();
    if (isDrawing === true) {
        square.style.backgroundColor = 'yellow';
    };
}));

document.addEventListener('mouseup', e => {
    e.preventDefault();
    if (isDrawing === true) {
        isDrawing = false;
    };
});
