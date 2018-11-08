//This comes from data.js
let gifs = window.data.data;
console.log(gifs);

function gifGenerator() {
  let element = document.getElementById('gif');
  element.src =  gifs[gifGenerator].images.original.url
  let gifGenerator = Math.floor(Math.random() * gifs.length);
}
let button = document.querySelector('button');
button.addEventListener('click', gifGenerator);
