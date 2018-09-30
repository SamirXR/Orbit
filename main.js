// TEMPLATE FILE


// Base variables

var initialSeed, seed;
var canvasID = "canvas";
var ctx, canvas, canvasSize;
var bg;

var dt, currentTimestep, paused, maxTimesteps;





function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function setupBackground() {
 
  bg = {
		r: randomBetween(0,255),
		g: randomBetween(0,255),
		b: randomBetween(0,255),
	};
  
}


function drawBackground(opacity = 1) {
  var oldAlpha = ctx.globalAlpha;
  ctx.globalAlpha = opacity;
	ctx.fillStyle = 'rgb(' + bg.r + ', ' + bg.g + ', ' + bg.b + ')';	
	ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = oldAlpha;
}





function init(seed = generateSeed()) {
    
  canvas = document.getElementById(canvasID);
	ctx = canvas.getContext('2d');
  ctx.translate(0, 0);
  ctx.moveTo(0, 0);
  
  setupBackground();

	setupSmiles(seed, dt, currentTimestep, paused, maxTimesteps, canvasSize, canvas);
  
    
	clearCanvas(ctx);
  ctx.translate(canvasSize.width/2, canvasSize.height/2);

  window.requestAnimationFrame(main);
  
  //drawBackgroundGradient(0.3);
  drawBackground(0.9);
  

}






// Page logic

$(document).ready(function() { 
  
  init();
  
});