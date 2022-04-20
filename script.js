//DOM NODES
const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

const colorPickerCanvas = document.querySelector('.colorPickerCanvas')

const colorSlider = document.querySelector('.colorSlider');

const marker = document.createElement('div');
marker.classList.add('marker');
container.appendChild(marker);

//BUTTONS
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

//COLOR PICKER CONTEXT
let colorPickerCtx = colorPickerCanvas.getContext('2d');

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

//INITIATE PROGRAM DEFAULT

var color = 'blue';

//CREATE A HORIZONTAL GRADIENT ON THE CANVAS
let horizontalGradient = colorPickerCtx.createLinearGradient(0, 0, 300, 0);

horizontalGradient.addColorStop(0, 'white');
horizontalGradient.addColorStop(1, color);
colorPickerCtx.fillStyle = horizontalGradient;
colorPickerCtx.fillRect(0, 0, 300, 300);

//CREATE A VERTICAL GRADIENT ON THE CANVAS
let verticalGradient = colorPickerCtx.createLinearGradient(0, 0, 0, 300);

verticalGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
verticalGradient.addColorStop(1, 'black');
colorPickerCtx.fillStyle = verticalGradient;
colorPickerCtx.fillRect(0, 0, 300, 300);

//COLOR PICKER ON CLICK EVENTS
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

    //PLACE MARKER WHERE MOUSE IS CLICKED ON CANVAS
    marker.style.top =  event.pageY - 8 + 'px';
    marker.style.left = event.pageX - 8 + 'px';
});

//ADD 2D CONTEXT TO COLOR SLIDER
let colorSliderCtx = colorSlider.getContext('2d');

//CREATE A VERTICAL GRADIENT ON THE COLOR SLIDER
let sliderGradient = colorSliderCtx.createLinearGradient(0, 0, 0, 300);
sliderGradient.addColorStop(0, 'red');
sliderGradient.addColorStop(0.1, 'orange');
sliderGradient.addColorStop(0.2, 'yellow');
sliderGradient.addColorStop(0.4, 'lime');
sliderGradient.addColorStop(0.5, 'skyblue');
sliderGradient.addColorStop(0.7, 'blue');
sliderGradient.addColorStop(0.9, 'magenta');
sliderGradient.addColorStop(1, 'red');
colorSliderCtx.fillStyle = sliderGradient;
colorSliderCtx.fillRect(0, 0, 40, 300);

colorSlider.addEventListener('click', (event) => {
  //GET THE COORDINATES OF CLICKED PIXEL
  let sliderX = event.pageX - colorSlider.offsetLeft;
  let sliderY = event.pageY - colorSlider.offsetTop;
  console.log(sliderX)
  
  //GET RGB VALUES OF CLICKED PIXEL
  let sliderImgData = colorSliderCtx.getImageData(sliderX, sliderY, 1, 1);
  sliderR = sliderImgData.data[0];
  sliderG = sliderImgData.data[1];
  sliderB = sliderImgData.data[2];
  let color = `rgb(${sliderR}, ${sliderG}, ${sliderB})`

  //CREATE A HORIZONTAL GRADIENT ON THE CANVAS
  let horizontalGradient = colorPickerCtx.createLinearGradient(0, 0, 300, 0);
  
  horizontalGradient.addColorStop(0, 'white');
  horizontalGradient.addColorStop(1, color);
  colorPickerCtx.fillStyle = horizontalGradient;
  colorPickerCtx.fillRect(0, 0, 300, 300);
  //CREATE A VERTICAL GRADIENT ON THE CANVAS
  let verticalGradient = colorPickerCtx.createLinearGradient(0, 0, 0, 300);
  verticalGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  verticalGradient.addColorStop(1, 'black');
  colorPickerCtx.fillStyle = verticalGradient;
  colorPickerCtx.fillRect(0, 0, 300, 300);

  //PLACE MARKER WHERe MOUSE IS CLICKED ON SLIDER

});

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



