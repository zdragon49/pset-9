///////////////////// CONSTANTS /////////////////////////////////////
var ctx = document.getElementById("brick-canvas").getContext("2d");
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
  ctx.arc(240, 160, 20, 0, Math.PI*2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
