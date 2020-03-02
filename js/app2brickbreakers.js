
// Canvas
const canvas = document.getElementById("brick-breaker-game");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "green";
ctx.lineWidth = 2.5;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.textAlign = "center";
ctx.font = "40px Comic Sans MS";


// Variables
let dx;
let dxFactor;
let speed;
let gameStarted = false;

// Objects
let bottles = [];

let ball = {
  x: undefined,
  y: undefined,
  radius: 10,
  right: true,
  up: true
};

let platform = {
  x: (canvas.width / 2) - 40,
  y: canvas.height - 10,
  width: 80,
  height: 5,
  movement: 1
};



// Event Listeners
window.onload = function() {
  document.getElementById("brick-canvas").onclick = init;
  game();
}
document.addEventListener("keydown", getArrowKeys);
document.getElementById("brick-breaker-game").addEventListener("mousemove", getMouse);
