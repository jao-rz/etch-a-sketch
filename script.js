//GRID NODES
const container = document.querySelector('.container');

const toolbar = document.createElement('div');
toolbar.classList.add('toolbar')
container.appendChild(toolbar);

const toolList = document.createElement('ul');
toolList.classList.add('toolList');
toolbar.appendChild(toolList);

const colorPickerTool = document.createElement('li');
colorPickerTool.classList.add('.colorPickerTool');
colorPickerTool.setAttribute('title', 'Color Picker');
toolList.appendChild(colorPickerTool);

const eyedropperTool = document.createElement('li');
eyedropperTool.classList.add('.eyedropperTool');
eyedropperTool.setAttribute('title', 'Eyedropper')
toolList.appendChild(eyedropperTool);

const grayscaleTool = document.createElement('li');
grayscaleTool.classList.add('.grayscaleTool');
grayscaleTool.setAttribute('title', 'Grayscale Pen');
toolList.appendChild(grayscaleTool);

const rainbowTool = document.createElement('li');
rainbowTool.classList.add('.rainbowTool');
rainbowTool.setAttribute('title', 'Rainbow Pen');
toolList.appendChild(rainbowTool);

const eraserTool = document.createElement('li');
eraserTool.classList.add('.eraserTool');
eraserTool.setAttribute('title', 'Eraser');
toolList.appendChild(eraserTool);

const deleteTool = document.createElement('li');
deleteTool.classList.add('.deleteTool');
deleteTool.setAttribute('title', 'Delete');
toolList.appendChild(deleteTool);

const toolbarIcons = document.querySelectorAll('li');
for (const toolbarIcon of toolbarIcons) {toolbarIcon.classList.add('tool')};

const colorPickerImageWrapper = document.createElement('div');
colorPickerTool.appendChild(colorPickerImageWrapper);

const eyedropperImageWrapper = document.createElement('div');
eyedropperTool.appendChild(eyedropperImageWrapper);

const grayscaleImageWrapper = document.createElement('div');
grayscaleTool.appendChild(grayscaleImageWrapper);

const rainbowImageWrapper = document.createElement('div');
rainbowTool.appendChild(rainbowImageWrapper);

const eraserImageWrapper = document.createElement('div');
eraserTool.appendChild(eraserImageWrapper);

const deleteImageWrapper = document.createElement('div');
deleteTool.appendChild(deleteImageWrapper);

const imageWrappers = document.querySelectorAll('li > div');
for (const imageWrapper of imageWrappers) {imageWrapper.classList.add('imageWrapper');}

const colorPickerImage = document.createElement('img');
colorPickerImage.setAttribute('src', 'images/color-selection.png') //<a href="https://www.flaticon.com/free-icons/color" title="color icons">Color icons created by Freepik - Flaticon</a>
colorPickerImageWrapper.appendChild(colorPickerImage);

const eyedropperImage = document.createElement('img');
eyedropperImage.setAttribute('src', 'images/eyedropper.png'); //<a href="https://www.flaticon.com/free-icons/eyedropper" title="eyedropper icons">Eyedropper icons created by Good Ware - Flaticon</a>
eyedropperImageWrapper.appendChild(eyedropperImage);

const grayscaleImage = document.createElement('img');
grayscaleImage.setAttribute('src', 'images/gradient.png'); //<a href="https://www.flaticon.com/free-icons/gradient" title="gradient icons">Gradient icons created by Freepik - Flaticon</a>
grayscaleImageWrapper.appendChild(grayscaleImage);

const rainbowImage = document.createElement('img');
rainbowImage.setAttribute('src', 'images/rainbow-flag.png'); //<a href="https://www.flaticon.com/free-icons/pride" title="pride icons">Pride icons created by Freepik - Flaticon</a>
rainbowImageWrapper.appendChild(rainbowImage);

const eraserImage = document.createElement('img');
eraserImage.setAttribute('src', 'images/eraser.png'); //<a href="https://www.flaticon.com/free-icons/rubber" title="rubber icons">Rubber icons created by Freepik - Flaticon</a>
eraserImageWrapper.appendChild(eraserImage);

const deleteImage = document.createElement('img');
deleteImage.setAttribute('src', 'images/delete.png'); //<a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Design Circle - Flaticon</a>
deleteImageWrapper.appendChild(deleteImage);

const backgroundWrapper = document.createElement('div');
backgroundWrapper.classList.add('backgroundWrapper');
container.appendChild(backgroundWrapper);

const grid = document.createElement('div');
grid.classList.add('grid');
backgroundWrapper.appendChild(grid);

const selectedColorDivs = document.createElement('div');
selectedColorDivs.classList.add('selectedColorDivs');
backgroundWrapper.appendChild(selectedColorDivs);

const footer = document.createElement('div');
footer.classList.add('footer');
container.appendChild(footer);

const creditsLink = document.createElement('a');
creditsLink.setAttribute('href', 'credits.html');
creditsLink.textContent = 'CREDITS';
footer.appendChild(creditsLink);

const selectedColorWindow = document.createElement('div');
selectedColorWindow.classList.add('selectedColorWindow');
selectedColorDivs.appendChild(selectedColorWindow);

const selectedColorPen = document.createElement('div');
selectedColorPen.classList.add('selectedColorPen');
selectedColorPen.classList.add('tool');
selectedColorDivs.appendChild(selectedColorPen);

const penTool = document.createElement('img');
penTool.classList.add('penTool');
penTool.setAttribute("src", "images/signature.png");//<a href="https://www.flaticon.com/free-icons/pen" title="pen icons">Pen icons created by yut1655 - Flaticon</a>
selectedColorPen.appendChild(penTool);

const tools = document.querySelectorAll('.tool');

const modalWrapper = document.createElement('div')
modalWrapper.classList.add('modalWrapper');
container.appendChild(modalWrapper);

const modal = document.createElement('div');
modal.classList.add('modal');
modalWrapper.appendChild(modal);

const colorPickerWrapper = document.createElement('div');
colorPickerWrapper.classList.add('colorPickerWrapper');
modal.appendChild(colorPickerWrapper);

const colorPickerCanvas = document.createElement('canvas');
colorPickerCanvas.setAttribute('width', '300px');
colorPickerCanvas.setAttribute('height', '300px');
colorPickerCanvas.classList.add('colorPickerCanvas');
colorPickerWrapper.appendChild(colorPickerCanvas);

const colorSliderWrapper = document.createElement('div');
colorSliderWrapper.classList.add('colorSliderWrapper');
modal.appendChild(colorSliderWrapper);

const colorSlider = document.createElement('canvas');
colorSlider.setAttribute('width', '40px');
colorSlider.setAttribute('height', '300px');
colorSlider.classList.add('colorSlider');
colorSliderWrapper.appendChild(colorSlider);

const colorSliderMarker = document.createElement('div');
colorSliderMarker.classList.add('colorSliderMarker');
colorSliderWrapper.appendChild(colorSliderMarker);
const colorPickerMarker = document.createElement('div');
colorPickerMarker.classList.add('colorPickerMarker');
colorPickerWrapper.appendChild(colorPickerMarker);

//INITIATE PROGRAM DEFAULT
askGridSize()
createGrid(gridSize)

function askGridSize() {
  gridSize = prompt("Enter a number between 20 and 100 for canvas pixel size: ")
  if (gridSize < 20 || gridSize > 100) {
    alert("Entered size is not between 20 and 100.")
    return askGridSize()
  }
  else {return gridSize}
}

function createSquare() {
  let square = document.createElement("div");
  square.classList.add("square-css");
  row.appendChild(square);
}

function createGrid(gridSize) {
    for (i=0; i < gridSize; i++) {
        row = document.createElement("div");
        row.classList.add("row")
        grid.appendChild(row)

        for (j=0; j < gridSize; j++) {
            createSquare();
        };
    };
};

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