const pixel = document.querySelector('#meme-image-container');
const input = document.querySelector('#text-input');
const button = document.querySelector('#vai');
const buttonClear = document.querySelector('#clear');
let div = document.createElement('div');

function createText() {
  div.id = 'meme-text';

  div.appendChild(document.createTextNode(input.value));
  pixel.appendChild(div);
  input.value = '';
}

input.addEventListener('input', createText);

function clearText() {
  div.parentNode.removeChild(div);
}

buttonClear.addEventListener('click', clearText);
