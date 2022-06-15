//GRID NODES
const container = document.querySelector('.container');

const colorPickerTool = document.querySelector('.colorPickerTool');
const eyedropperTool = document.querySelector('.eyedropperTool');
const grayscaleTool = document.querySelector('.grayscaleTool');
const rainbowTool = document.querySelector('.rainbowTool');
const eraserTool = document.querySelector('.eraserTool');
const deleteTool = document.querySelector('.deleteTool');

const backgroundWrapper = document.createElement('div');
backgroundWrapper.classList.add('backgroundWrapper');
container.appendChild(backgroundWrapper);

const grid = document.createElement('div');
grid.classList.add('grid');
backgroundWrapper.appendChild(grid);

const selectedColorDivs = document.createElement('div');
selectedColorDivs.classList.add('selectedColorDivs');
backgroundWrapper.appendChild(selectedColorDivs);

const selectedColorWindow = document.createElement('div');
selectedColorWindow.classList.add('selectedColorWindow');
selectedColorDivs.appendChild(selectedColorWindow);

const selectedColorPen = document.createElement('div');
selectedColorPen.classList.add('selectedColorPen');
selectedColorPen.classList.add('tool');
selectedColorDivs.appendChild(selectedColorPen);

const penTool = document.createElement('img');
penTool.classList.add('penTool');
penTool.setAttribute("src", "images/signature.png");
selectedColorPen.appendChild(penTool);

const tools = document.querySelectorAll('.tool');

const modalWrapper = document.querySelector('.modalWrapper');
const modal = document.querySelector('.modal');
const colorPickerCanvas = document.querySelector('.colorPickerCanvas');
const colorPickerWrapper = document.querySelector('.colorPickerWrapper');
const colorSlider = document.querySelector('.colorSlider');
const colorSliderWrapper = document.querySelector('.colorSliderWrapper');
const colorSliderMarker = document.createElement('div');
colorSliderMarker.classList.add('colorSliderMarker');
colorSliderWrapper.appendChild(colorSliderMarker);
const colorPickerMarker = document.createElement('div');
colorPickerMarker.classList.add('colorPickerMarker');
colorPickerWrapper.appendChild(colorPickerMarker);

//INITIATE PROGRAM DEFAULT
createGrid(75);
var squares = document.querySelectorAll('.square-css');
let activeButton = null;
let clickedTool = null;
let activeTool = null;
var isDrawing = false;

tools.forEach(tool => {
  tool.addEventListener('click', (event)=>{
    let clickedTool = event.currentTarget;
  
    toggleClickedTool();
    if (colorPickerTool == clickedTool) {toggleModal()};
    if (selectedColorPen == clickedTool) {togglePen()}
    else{deactivatePen()};
    deactivateNonClickedTools();
    setActiveTool();
    if(modalIsActive() && colorPickerTool != activeTool) {hideModal()};

    function setActiveTool() {
      if (clickedTool.classList.contains('toolIsActive')) {return activeTool = clickedTool}
      else {return activeTool = null};
    };
    function toggleClickedTool() {
      return tool.classList.toggle('toolIsActive')
    };
    function deactivateNonClickedTools() {
      if (activeTool != null && activeTool != event.currentTarget) {
        return activeTool.classList.remove('toolIsActive');
      };
    };
    function deactivatePen() {
      selectedColorDivs.classList.remove('on')
    };
  });
});

function togglePen() {return selectedColorDivs.classList.toggle('on')};

backgroundWrapper.addEventListener('click', (event)=>{
  if(eventOutisdeModal(event) && modalIsActive()) {
    hideModal();
    deactivatecolorPickerTool();
    activeTool = null;
  };
});

function modalIsActive() {
  return modalWrapper.classList.contains('active');
};

function eventOutisdeModal(event) {
  return modal.contains(event.target) == false;
};

function toggleModal() {
  if(modalIsActive()) {return hideModal()}
  else {return showModal()};
};

function hideModal() {
  return modalWrapper.classList.remove('active');
};

function showModal() {
 return modalWrapper.classList.add('active');
};

function deactivatecolorPickerTool() {
  colorPickerTool.classList.remove('toolIsActive');
};

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
        };
    };
};

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

deleteTool.addEventListener('click', () => {
    if (deleteTool.classList.contains('toolIsActive')) {
        squares.forEach(square => square.style.backgroundColor = '');
    }
});

squares.forEach(square => square.addEventListener('click', (e)=> {
    if (eyedropperTool.classList.contains('toolIsActive')) {
        selectedColor = square.style.backgroundColor;
        selectedColorWindow.style.backgroundColor = selectedColor;
    };
}));

squares.forEach(square => square.addEventListener('mouseenter', e => {
    e.preventDefault();
    if (selectedColorPen.classList.contains('toolIsActive') && isDrawing) {
        square.style.backgroundColor = selectedColorWindow.style.backgroundColor;
    }
    if (eraserTool.classList.contains('toolIsActive') && isDrawing) {
        square.style.backgroundColor = '';
    }
    if (grayscaleTool.classList.contains('toolIsActive') && isDrawing) {
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
        else{square.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
    }
    if (rainbowTool.classList.contains('toolIsActive') && isDrawing === true) {
        square.style.backgroundColor = randomHexColor();
    }
}));

//COLOR PICKER AND SLIDER SCRIPT
var dragging = false;
var selectedColor = '';
var transparentColor = 'rgba(0, 0, 0, 0)';
var colorForColorPickerGradient = 'red';
const colorPickerCtx = colorPickerCanvas.getContext('2d');
const colorSliderCtx = colorSlider.getContext('2d');

createNewColorPickerGradient();
createColorSlider();

colorPickerCanvas.addEventListener('click', (event) => {
  event.preventDefault()
  setColorPickerMarkerOnEventLocation();
  selectedColorWindow.style.backgroundColor = getRGBOfEventLocationOnContext(colorPickerCtx);
});

colorPickerMarker.addEventListener('mousedown', (event) => {
  event.preventDefault();
  dragging = true;
});

document.addEventListener('mouseup', () => {
  dragging = false;
});

colorPickerCanvas.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (dragging) {
      setColorPickerMarkerOnEventLocation();
      selectedColorWindow.style.backgroundColor = getRGBOfEventLocationOnContext(colorPickerCtx);
    };
});

function setColorPickerMarkerOnEventLocation() {
  colorPickerMarker.style.top =  event.offsetY - 8 + 'px';
  colorPickerMarker.style.left = event.offsetX - 8 + 'px';  
};

colorSlider.addEventListener('click', (event) => {
  setColorSliderMarkerOnEventLocation();
  colorForColorPickerGradient = getRGBOfEventLocationOnContext(colorSliderCtx);
  createNewColorPickerGradient();
});

colorSliderMarker.addEventListener('mousedown', (event) => {
  event.preventDefault();
  dragging = true;
});

colorSlider.addEventListener('mousemove', (event) => {
  if (dragging == true) {
    setColorSliderMarkerOnEventLocation();
    colorForColorPickerGradient = getRGBOfEventLocationOnContext(colorSliderCtx);
    createNewColorPickerGradient();
  };
});

function getRGBOfEventLocationOnContext(contextName) {
  let imgData = contextName.getImageData(event.offsetX, event.offsetY, 1, 1);
  eventLocationR = imgData.data[0];
  eventLocationG = imgData.data[1];
  eventLocationB = imgData.data[2];
  return `rgb(${eventLocationR}, ${eventLocationG}, ${eventLocationB})`;
};

function createNewColorPickerGradient() {
  //CREATE A HORIZONTAL GRADIENT ON COLOR PICKER
  let horizontalGradient = colorPickerCtx.createLinearGradient(0, 0, 300, 0);
  horizontalGradient.addColorStop(0, 'white');
  horizontalGradient.addColorStop(1, colorForColorPickerGradient);
  colorPickerCtx.fillStyle = horizontalGradient;
  colorPickerCtx.fillRect(0, 0, 300, 300);

  //CREATE A VERTICAL GRADIENT ON COLOR PICKER
  let verticalGradient = colorPickerCtx.createLinearGradient(0, 0, 0, 300);
  verticalGradient.addColorStop(0, transparentColor);
  verticalGradient.addColorStop(1, 'black');
  colorPickerCtx.fillStyle = verticalGradient;
  colorPickerCtx.fillRect(0, 0, 300, 300);
};

function setColorSliderMarkerOnEventLocation() {
  colorSliderMarker.style.top = event.offsetY - 5 + 'px'; 
};

function createColorSlider() {
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
};