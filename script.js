
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const uploadButton = document.getElementById('upload');
const saveButton = document.getElementById('save');
const brightnessInput = document.getElementById('brightness');
const contrastInput = document.getElementById('contrast');
const saturationInput = document.getElementById('saturation');
const cropButton = document.getElementById('crop');
const resizeButton = document.getElementById('resize');
const filtersSelect = document.getElementById('filters');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');
const imageUpload = document.getElementById('image-upload');

let image;
let history = [];
let historyIndex = -1;

uploadButton.addEventListener('click', () => {
  imageUpload.click();
});

imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      history = [];
      historyIndex = -1;
    };
    image.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

saveButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'image.png';
  link.click();
});

brightnessInput.addEventListener('input', () => {
  const brightness = brightnessInput.value;
  ctx.filter = `brightness(${brightness}%)`;
  ctx.drawImage(image, 0, 0);
  historyPush();
});

contrastInput.addEventListener('input', () => {
  const contrast = contrastInput.value;
  ctx.filter = `contrast(${contrast}%)`;
  ctx.drawImage(image, 0, 0);
  historyPush();
});

saturationInput.addEventListener('input', () => {
  const saturation = saturationInput.value;
  ctx.filter = `saturate(${saturation}%)`;
  ctx.drawImage(image, 0, 0);
  historyPush();
});

cropButton.addEventListener('click', () => {
  const cropWidth = prompt('Enter crop width:');
  const cropHeight = prompt('Enter crop height:');
  const cropX = prompt('Enter crop X:');
  const cropY = prompt('Enter crop Y:');
  ctx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
  historyPush();
});

resizeButton.addEventListener('click', () => {
  const resizeWidth = prompt('Enter resize width:');
  const resizeHeight = prompt('Enter resize height:');
  canvas.width = resizeWidth;
  canvas.height = resizeHeight;
  ctx.drawImage(image, 0, 0, resizeWidth, resizeHeight);
  historyPush();
});

filtersSelect.addEventListener('change', () => {
  const filter = filtersSelect.value;
  if (filter === 'grayscale') {
    ctx.filter = 'grayscale(100%)';
  } else if (filter === 'sepia') {
    ctx.filter = '
