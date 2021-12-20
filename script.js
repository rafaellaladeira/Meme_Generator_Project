const pixel = document.querySelector('#meme-image-container');
let input = document.querySelector('#text-input');
const div = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
pixel.style.border = 'black solid 1px';

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

function chooseMeme1() {
  image.src = './imgs/meme1.png';
}
meme1.addEventListener('click', chooseMeme1);

function chooseMeme2() {
  meme2.style.width = '500px';
  meme2.style.height = '500px';
  image.appendChild(meme2);
}
meme2.addEventListener('click', chooseMeme2);

function chooseMeme3() {
  meme3.style.width = '500px';
  meme3.style.height = '500px';
  image.appendChild(meme3);
}
meme3.addEventListener('click', chooseMeme3);

function chooseMeme4() {
  meme4.style.width = '500px';
  meme4.style.height = '500px';
  image.appendChild(meme4);
}
meme4.addEventListener('click', chooseMeme4);
