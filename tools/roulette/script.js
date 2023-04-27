var canvas;
var ctx;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
}

function draw() {
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(200, 20);
  ctx.stroke();
}

init();
draw();