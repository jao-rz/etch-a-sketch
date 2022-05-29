//GRID NODES
const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

//BUTTONS
const buttonsMenu = document.createElement('div');
buttonsMenu.classList.add('buttonsMenu');
container.appendChild(buttonsMenu);

const rainbowPen = document.createElement('button');
rainbowPen.classList.add ('rainbowPen');
rainbowPen.textContent = 'Rainbow Pen';
buttonsMenu.appendChild(rainbowPen);

const colorPickerPen = document.createElement('button');
colorPickerPen.classList.add('colorPickerPen');
colorPickerPen.textContent = 'Color Picker Pen';
buttonsMenu.appendChild(colorPickerPen);

const eyedropper = document.createElement('button');
eyedropper.classList.add('eyedropper');
eyedropper.textContent = 'Eyedropper';
buttonsMenu.appendChild(eyedropper);

const grayscaleButton = document.createElement('button');
grayscaleButton.classList.add('grayscaleButton');
grayscaleButton.textContent = 'Grayscale';
buttonsMenu.appendChild(grayscaleButton);

const eraserButton = document.createElement('button');
eraserButton.classList.add('eraserButton');
eraserButton.textContent = 'Eraser';
buttonsMenu.appendChild(eraserButton);

const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'Clear';
buttonsMenu.appendChild(clearButton);

const allButtons = document.querySelectorAll('button')

function createSquare() {
    let square = document.createElement("div");
    square.classList.add("square-css");
    row.appendChild(square);
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

createGrid(75);
let activeButton = null;

var squares = document.querySelectorAll('.square-css');
var isDrawing = false;

//TOGGLE BUTTON ON/OFF WHEN CLICKED 
allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        button.classList.toggle('on');
        if (activeButton != null && activeButton != e.currentTarget) {
            activeButton.classList.remove('on');
        }

        activeButton = e.currentTarget;
    });
});

document.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDrawing = true;
});

document.addEventListener('mouseup', (e) => {
    e.preventDefault();
    if (isDrawing === true) {
        isDrawing = false;
    };
});

clearButton.addEventListener('click', () => {
    if (clearButton.classList.contains('on')) {
        squares.forEach(square => square.style.backgroundColor = '');
    }
});

squares.forEach(square => square.addEventListener('click', (e)=> {
    if (eyedropper.classList.contains('on')) {
        selectedColor = square.style.backgroundColor;
        selectedColorWindow.style.backgroundColor = selectedColor;
    };
}));

squares.forEach(square => square.addEventListener('mouseenter', e => {
    e.preventDefault();
    if (colorPickerPen.classList.contains('on') && isDrawing) {
        square.style.backgroundColor = selectedColor;
    }
    if (eraserButton.classList.contains('on') && isDrawing) {
        square.style.backgroundColor = '';
    }
    if (grayscaleButton.classList.contains('on') && isDrawing) {
        if (square.style.backgroundColor == 'rgb(0, 0, 0)') {
            square.style.backgroundColor = 'rgb(0, 0, 0)'
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.9)') {
            square.style.backgroundColor = 'rgb(0, 0, 0)'
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.8)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.7)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.6)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.5)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.4)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.3)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.2)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
        else if (square.style.backgroundColor == 'rgba(0, 0, 0, 0.1)') {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        }
        else  {square.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
    }
    if (rainbowPen.classList.contains('on') && isDrawing === true) {
        square.style.backgroundColor = randomHexColor();
    }
}));

//COLOR PICKER AND SLIDER SCRIPT
const colorPickerCanvas = document.querySelector('.colorPickerCanvas');

const colorPickerWrapper = document.querySelector('.colorPickerWrapper');

const selectedColorWindow = document.createElement('div');
selectedColorWindow.classList.add('selectedColorWindow');
colorPickerWrapper.appendChild(selectedColorWindow);

const colorSlider = document.querySelector('.colorSlider');

const colorSliderWrapper = document.querySelector('.colorSliderWrapper');

const colorSliderMarker = document.createElement('div');
colorSliderMarker.classList.add('colorSliderMarker');
colorSliderWrapper.appendChild(colorSliderMarker);

const colorPickerMarker = document.createElement('div');
colorPickerMarker.classList.add('colorPickerMarker');
colorPickerWrapper.appendChild(colorPickerMarker);

let colorPickerCtx = colorPickerCanvas.getContext('2d');
var color = 'red';
var dragging = false;
var selectedColor = '';

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

colorPickerCanvas.addEventListener('click', (event) => {
  event.preventDefault()

  //GET THE COORDINATES OF CLICKED PIXEL
  let xCoordinates = event.offsetX;
  let yCoordinates = event.offsetY;

  //GET RGB VALUES OF CLICKED PIXEL
  let imgData = colorPickerCtx.getImageData(xCoordinates, yCoordinates, 1, 1);
  ctxR = imgData.data[0];
  ctxG = imgData.data[1];
  ctxB = imgData.data[2];

  //PLACE MARKER WHERE MOUSE IS CLICKED ON CANVAS
  colorPickerMarker.style.top =  event.offsetY - 8 + 'px';
  colorPickerMarker.style.left = event.offsetX - 8 + 'px';

  selectedColor = `rgb(${ctxR}, ${ctxG}, ${ctxB})`
  selectedColorWindow.style.backgroundColor = selectedColor;
});

document.addEventListener('mouseup', () => {
  dragging = false;
});

colorPickerMarker.addEventListener('mousedown', (event) => {
    event.preventDefault();
    dragging = true;
});


colorPickerCanvas.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (dragging) {
      colorPickerMarker.style.top = event.offsetY - 8 + 'px';
      colorPickerMarker.style.left = event.offsetX - 8 + 'px';

      //GET COORDINATES OF colorPickerMarker WHILE BEING DRAGGED
      let xCoordinates = event.offsetX;
      let yCoordinates = event.offsetY;

      //CHANGE THE BACKGROUND COLOR WHILE colorPickerMarker IS DRAGGED
      let imgData = colorPickerCtx.getImageData(xCoordinates, yCoordinates, 1, 1);
      ctxR = imgData.data[0];
      ctxG = imgData.data[1];
      ctxB = imgData.data[2];
      selectedColor = `rgb(${ctxR}, ${ctxG}, ${ctxB})`
      selectedColorWindow.style.backgroundColor = selectedColor;
    };
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
  let sliderX = event.offsetX;
  let sliderY = event.offsetY;

  //GET RGB VALUES OF CLICKED PIXEL
  let sliderImgData = colorSliderCtx.getImageData(sliderX, sliderY, 1, 1);
  sliderR = sliderImgData.data[0];
  sliderG = sliderImgData.data[1];
  sliderB = sliderImgData.data[2];
  let color = `rgb(${sliderR}, ${sliderG}, ${sliderB})`;

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

  //PLACE MARKER WHERE MOUSE IS CLICKED ON SLIDER
  colorSliderMarker.style.top = event.offsetY - 4 + 'px';
});

colorSliderMarker.addEventListener('mousedown', (e) => {
  e.preventDefault();
  dragging = true;
});

colorSlider.addEventListener('mousemove', (e) => {
  if (dragging == true) {
    colorSliderMarker.style.top = e.offsetY + 'px';

    let sliderX = e.offsetX;
    let sliderY = e.offsetY;
  
    //GET RGB VALUES OF CLICKED PIXEL
    let sliderImgData = colorSliderCtx.getImageData(sliderX, sliderY, 1, 1);
    sliderR = sliderImgData.data[0];
    sliderG = sliderImgData.data[1];
    sliderB = sliderImgData.data[2];
    let color = `rgb(${sliderR}, ${sliderG}, ${sliderB})`;
  
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
  };
});

document.addEventListener('mouseup', () => {dragging = false});