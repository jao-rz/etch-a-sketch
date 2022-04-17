const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

const colorPickerCanvas = document.querySelector('.colorPickerCanvas')
container.appendChild(colorPickerCanvas)

let colorPickerCtx = colorPickerCanvas.getContext('2d');

//CREATE A HORIZONTAL GRADIENT ON THE CANVAS
let horizontalGradient = colorPickerCtx.createLinearGradient(0, 0, 300, 0);

horizontalGradient.addColorStop(0, 'white');
horizontalGradient.addColorStop(1, 'blue');
colorPickerCtx.fillStyle = horizontalGradient;
colorPickerCtx.fillRect(0, 0, 300, 300);

//CREATE A VERTICAL GRADIENT ON THE CANVAS
let verticalGradient = colorPickerCtx.createLinearGradient(0, 0, 0, 300);

verticalGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
verticalGradient.addColorStop(1, 'black');
colorPickerCtx.fillStyle = verticalGradient;
colorPickerCtx.fillRect(0, 0, 300, 300);

colorPickerCanvas.addEventListener('click', (event) => {
    //GET THE COORDINATES OF CLICKED PIXEL
    let xCoordinates = event.pageX - colorPickerCanvas.offsetLeft;
    let yCoordinates = event.pageY - colorPickerCanvas.offsetTop;
    console.log('X coordinates are: ' + xCoordinates + ' and Y coordinates are: ' + yCoordinates)

    //GET RGB VALUES OF CLICKED PIXEL
    let imgData = colorPickerCtx.getImageData(xCoordinates, yCoordinates, 1, 1);
    ctxR = imgData.data[0];
    ctxG = imgData.data[1];
    ctxB = imgData.data[2];
    console.log('Blue value is: ' + ctxB)
    squares.forEach(square => square.addEventListener('mouseenter', e => {
        e.preventDefault();
        if (isDrawing === true) {
            square.style.backgroundColor = `rgb(${ctxR}, ${ctxG}, ${ctxB})`;
        };
    }));
});








const buttonsMenu = document.createElement('div');
buttonsMenu.classList.add('buttonsMenu');
container.appendChild(buttonsMenu);

const rainbowPen = document.createElement('button');
rainbowPen.classList.add ('rainbowPen');
rainbowPen.textContent = 'Rainbow Pen';
buttonsMenu.appendChild(rainbowPen);

const blackPen = document.createElement('button');
blackPen.classList.add('blackPen');
blackPen.textContent = 'Black Pen';
buttonsMenu.appendChild(blackPen)

const grayScalePen = document.createElement('button');
grayScalePen.classList.add('grayScalePen');
grayScalePen.textContent = 'Grayscale';
buttonsMenu.appendChild(grayScalePen);

const eraserButton = document.createElement('button');
eraserButton.classList.add('eraserButton');
eraserButton.textContent = 'Eraser';
buttonsMenu.appendChild(eraserButton);

const clearGridButton = document.createElement('button');
clearGridButton.classList.add('clearGridButton');
clearGridButton.textContent = 'Clear';
buttonsMenu.appendChild(clearGridButton);
 
function createSquare() {
    let square = document.createElement("div");
    square.classList.add("square-css");
    row.appendChild(square);
}

function createGrid(n) {
    for (i=0; i < n; i++) {
        row = document.createElement("div");
        row.classList.add("row")
        grid.appendChild(row)

        for (j=0; j < n; j++) {
            createSquare();
        }
    }
}

function randomNumberBetweenZeroAnd(num) {
   return Math.floor(Math.random()*(num + 1));
}

function randomRGBColor() {
   let r = randomNumberBetweenZeroAnd(255);
   let g = randomNumberBetweenZeroAnd(255);
   let b = randomNumberBetweenZeroAnd(255);
   return [r, g, b]; 
}

function randomHexColor() {
    let [r, g, b] = randomRGBColor();

    let hexr = r.toString(16).padStart(2, '0');
    let hexg = g.toString(16).padStart(2, '0');
    let hexb = b.toString(16).padStart(2, '0');
    
    return '#' + hexr + hexg + hexb;
}

createGrid(20);
let squares = document.querySelectorAll('.square-css');
let isDrawing = false;


document.addEventListener('mousedown', e => {
    e.preventDefault();
    isDrawing = true;
});

document.addEventListener('mouseup', e => {
    e.preventDefault();
    if (isDrawing === true) {
        isDrawing = false;
    };
});

//THIS IS GRAYSCALE FUNCTION
/*squares.forEach(square => square.addEventListener('mouseenter', e => {
    e.preventDefault();
    if (isDrawing === true) {
        if (square.style.backgroundColor == '') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.1)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.2)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.3)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.4)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.5)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.6)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.7)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.8)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.9)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, )';
        }
    }
}));*/

//THIS IS RAINBOW PEN FUNCTION
/*squares.forEach(square => square.addEventListener('mousemove', e => {
    e.preventDefault();
    if (isDrawing === true) {
        square.style.backgroundColor = randomHexColor();
    };
}));*/



