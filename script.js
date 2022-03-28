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

createGrid(16);

let squares = document.querySelectorAll('.square-css');

squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'yellow';
    }
));





//['event1', 'event2'].forEach(event => square.addEventListener(event, doSomething));

