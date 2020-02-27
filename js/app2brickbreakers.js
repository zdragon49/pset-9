///////////////////// CONSTANTS /////////////////////////////////////
var canvas = document.getElementById("brick-canvas")
var ctx= canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var colorBall = 0;
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
  ctx.fillStyle = ballColor()
  ctx.fill();
  ctx.closePath();
}

function ballColor(colorBall) {
 if(colorBall == 1) {
    colorBall = "#ff0000"
  } else if(colorBall == 2) {
     colorBall = "#ffa500"
  } else if(colorBall == 3) {
     colorBall = "#ffff00"
  } else if(colorBall == 4) {
      colorBall = "#008000"
  } else if(colorBall == 5) {
      colorBall = "#0000ff"
  } else if(colorBall == 5) {
      colorBall = "#0000ff"
  } else if(colorBall == 6) {
      colorBall = "#4b0082"
  } else if(colorBall == 7) {
      colorBall = "#ee82ee"
  }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        colorBall++
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
       colorBall++
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);
