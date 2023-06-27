var pos = 0;
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];
let direction = 0;
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac() {
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
  
    // Randomly select an image from the available options
    let randomImageIndex = Math.floor(Math.random() * pacArray.length);
    let randomImage = pacArray[randomImageIndex];
    let randomImageSource = randomImage[Math.floor(Math.random() * randomImage.length)];
    
    newimg.src = randomImageSource;
    newimg.width = 100;
    newimg.style.left = position.x + 'px';
    newimg.style.top = position.y + 'px';
    game.appendChild(newimg);
 
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  var gameAreaWidth = window.innerWidth;
  var gameAreaHeight = window.innerHeight;

  var pacmanWidth = item.newimg.offsetWidth;
  var pacmanHeight = item.newimg.offsetHeight;

  var maxX = item.position.x + 100; 
  var maxY = item.position.y + 100;

  if (item.position.x <= 0 || maxX >= gameAreaWidth) {
    item.velocity.x *= -1; 
  }

  if (item.position.y <= 0 || maxY >= gameAreaHeight)  {
    item.velocity.y *= -1; 
  } 
}

function makeOne() {
  pacMen.push(makePac()); 
}
  module.exports = { checkCollisions, update, pacMen };
