//GRID NODES
const container = document.querySelector('.container');

const colorPickerTool = document.querySelector('.colorPickerTool');
const eyedropperTool = document.querySelector('.eyedropperTool');
const grayscaleTool = document.querySelector('.grayscaleTool');
const rainbowTool = document.querySelector('.rainbowTool');
const eraserTool = document.querySelector('.eraserTool');
const deleteTool = document.querySelector('.deleteTool');

const modalWrapper = document.querySelector('.modalWrapper');
const modal = document.querySelector('.modal');

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
selectedColorPen.classList.add('icon');
selectedColorDivs.appendChild(selectedColorPen);

const penIcon = document.createElement('img');
penIcon.classList.add('penIcon');
penIcon.setAttribute("src", "images/signature.png");
selectedColorPen.appendChild(penIcon);

const icons = document.querySelectorAll('.icon');

let clickedIcon = null;
let activeIcon = null;

icons.forEach(icon => {
  icon.addEventListener('click', (event)=>{
    let clickedIcon = event.currentTarget;
  
    toggleClickedIcon();
    if (colorPickerTool == clickedIcon) {toggleModal()};
    if (selectedColorPen == clickedIcon) {togglePen()}
    else{deactivatePen()};
    deactivateNonClickedIcons();
    setActiveIcon();
    console.log(activeIcon);
    if(modalIsActive() && colorPickerTool != activeIcon) {hideModal()};

    function setActiveIcon() {
      if (clickedIcon.classList.contains('iconIsActive')) {return activeIcon = clickedIcon}
      else {return activeIcon = null};
    };
    function toggleClickedIcon() {
      return icon.classList.toggle('iconIsActive')
    };
    function deactivateNonClickedIcons() {
      if (activeIcon != null && activeIcon != event.currentTarget) {
        return activeIcon.classList.remove('iconIsActive');
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
    activeIcon = null;
    console.log(activeIcon);
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
  colorPickerTool.classList.remove('iconIsActive');
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
        }
    }
}

//INITIATE PROGRAM DEFAULT

createGrid(75);
let activeButton = null;

var squares = document.querySelectorAll('.square-css');
var isDrawing = false;

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
    if (deleteTool.classList.contains('iconIsActive')) {
        squares.forEach(square => square.style.backgroundColor = '');
    }
});

squares.forEach(square => square.addEventListener('click', (e)=> {
    if (eyedropperTool.classList.contains('iconIsActive')) {
        selectedColor = square.style.backgroundColor;
        selectedColorWindow.style.backgroundColor = selectedColor;
    };
}));

squares.forEach(square => square.addEventListener('mouseenter', e => {
    e.preventDefault();
    if (selectedColorPen.classList.contains('iconIsActive') && isDrawing) {
        square.style.backgroundColor = selectedColorWindow.style.backgroundColor;
    }
    if (eraserTool.classList.contains('iconIsActive') && isDrawing) {
        square.style.backgroundColor = '';
    }
    if (grayscaleTool.classList.contains('iconIsActive') && isDrawing) {
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
    if (rainbowTool.classList.contains('iconIsActive') && isDrawing === true) {
        square.style.backgroundColor = randomHexColor();
    }
}));

//COLOR PICKER AND SLIDER SCRIPT
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

let colorPickerCtx = colorPickerCanvas.getContext('2d');
var dragging = false;
var selectedColor = '';
var transparentColor = 'rgba(0, 0, 0, 0)';
var color = 'red';

//CREATE A HORIZONTAL GRADIENT ON THE CANVAS
let horizontalGradient = colorPickerCtx.createLinearGradient(0, 0, 300, 0);
horizontalGradient.addColorStop(0, 'white');
horizontalGradient.addColorStop(1, color);
colorPickerCtx.fillStyle = horizontalGradient;
colorPickerCtx.fillRect(0, 0, 300, 300);

//CREATE A VERTICAL GRADIENT ON THE CANVAS
let verticalGradient = colorPickerCtx.createLinearGradient(0, 0, 0, 300);
verticalGradient.addColorStop(0, transparentColor);
verticalGradient.addColorStop(1, 'black');
colorPickerCtx.fillStyle = verticalGradient;
colorPickerCtx.fillRect(0, 0, 300, 300);  

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

colorPickerCanvas.addEventListener('click', (event) => {
  event.preventDefault()
  setMarkerOnEventLocation(colorPickerMarker);
  selectedColorWindow.style.backgroundColor = getRGBValuesOfEventLocationOnColorPicker();
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
      setMarkerOnEventLocation(colorPickerMarker);
      selectedColorWindow.style.backgroundColor = getRGBValuesOfEventLocationOnColorPicker();
    };
});

function getRGBValuesOfEventLocationOnColorPicker() {
  let imgData = colorPickerCtx.getImageData(event.offsetX, event.offsetY, 1, 1);
  eventLocationR = imgData.data[0];
  eventLocationG = imgData.data[1];
  eventLocationB = imgData.data[2];
  return eventLocationRGB = `rgb(${eventLocationR}, ${eventLocationG}, ${eventLocationB})`;
};

function setMarkerOnEventLocation(marker) {
  marker.style.top =  event.offsetY - 8 + 'px';
  marker.style.left = event.offsetX - 8 + 'px';  
};

colorSlider.addEventListener('click', (event) => {

  //SET POSITION OF COLOR SLIDER MARKER
  colorSliderMarker.style.top = event.offsetY + 'px'; //marker only moves up and down
  color = getRGBValuesOfEventLocationOnColorSlider();
  createNewColorPickerGradient();
});

colorSliderMarker.addEventListener('mousedown', (event) => {
  event.preventDefault();
  dragging = true;
});

colorSlider.addEventListener('mousemove', (event) => {
  if (dragging == true) {
    //SET POSITION OF COLOR SLIDER MARKER
    colorSliderMarker.style.top = event.offsetY + 'px'; //marker only moves up and down
    color = getRGBValuesOfEventLocationOnColorSlider();
    createNewColorPickerGradient();
  };
});

function getRGBValuesOfEventLocationOnColorSlider() {
  let sliderImgData = colorSliderCtx.getImageData(event.offsetX, event.offsetY, 1, 1);
  eventLocationR = sliderImgData.data[0];
  eventLocationG = sliderImgData.data[1];
  eventLocationB = sliderImgData.data[2];
  return `rgb(${eventLocationR}, ${eventLocationG}, ${eventLocationB})`;
};

function createNewColorPickerGradient() {
  //CREATE A HORIZONTAL GRADIENT ON THE CANVAS USING SLIDER MARKER
  let horizontalGradient = colorPickerCtx.createLinearGradient(0, 0, 300, 0);
  horizontalGradient.addColorStop(0, 'white');
  horizontalGradient.addColorStop(1, color);
  colorPickerCtx.fillStyle = horizontalGradient;
  colorPickerCtx.fillRect(0, 0, 300, 300);

  //CREATE A VERTICAL GRADIENT ON THE CANVAS USING SLIDER MARKER
  let verticalGradient = colorPickerCtx.createLinearGradient(0, 0, 0, 300);
  verticalGradient.addColorStop(0, transparentColor);
  verticalGradient.addColorStop(1, 'black');
  colorPickerCtx.fillStyle = verticalGradient;
  colorPickerCtx.fillRect(0, 0, 300, 300);
};