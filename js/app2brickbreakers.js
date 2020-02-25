///////////////////// CONSTANTS /////////////////////////////////////
var canvas = document.getElementById("brick-canvas")
var ctx= canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
///////////////////// APP STATE (VARIABLES) /////////////////////////

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = canvasLoad;
///////////////////// FUNCTIONS /////////////////////////////////////
function canvasLoad() {
  document.getElementById("brick-canvas").onclick = canvasDraw;
}
function canvasDraw() {
  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  drawBall();
  draw();
  ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}
