const pixel = document.querySelector('#meme-image-container');
const input = document.querySelector('#text-input');
const div = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');

function createText(e) {
  div.appendChild(document.createTextNode(e.key));
  pixel.appendChild(div);
}
input.addEventListener('keypress', createText);

function addMeme() {
  image.appendChild(memeInsert);
}
memeInsert.addEventListener('click', addMeme);

// Bônus:

const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

function changeBorderFire() {
  pixel.style.border = '3px dashed red';
}
buttonFire.addEventListener('click', changeBorderFire);

function changeBorderWater() {
  pixel.style.border = 'blue 5px double';
}
buttonWater.addEventListener('click', changeBorderWater);

function changeBorderEarth() {
  pixel.style.border = 'groove green 6px';
}
buttonEarth.addEventListener('click', changeBorderEarth);

// Bônus:

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

function chooseMeme(event) {
  image.setAttribute('src', event.target.src);
}
meme1.addEventListener('click', chooseMeme);
meme2.addEventListener('click', chooseMeme);
meme3.addEventListener('click', chooseMeme);
meme4.addEventListener('click', chooseMeme);
