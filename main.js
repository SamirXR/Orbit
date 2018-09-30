// Base variables

var projectName = "Template";

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



function setupAll() {
 
  // Base variable setup
	dt = 1;
	currentTimestep = 1;
	paused = false;
	maxTimesteps = 50000;
    
   canvasSize = {
		width: 1000,
		height: 450
	};
  
	var container = $("#canvas-container");
	canvas.width = canvasSize.width;
	canvas.height = canvasSize.height;
  
  setupBackground();
  
}


function drawBackground(opacity = 1) {
  var oldAlpha = ctx.globalAlpha;
  ctx.globalAlpha = opacity;
	ctx.fillStyle = 'rgb(' + bg.r + ', ' + bg.g + ', ' + bg.b + ')';	
	ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = oldAlpha;
}





function init(seed) {
    
  canvas = document.getElementById(canvasID);
	ctx = canvas.getContext('2d');
  ctx.translate(0, 0);
  ctx.moveTo(0, 0);
  
  setupAll();

	//setupSmiles(seed, dt, currentTimestep, paused, maxTimesteps, canvasSize, canvas);
  
    
	clearCanvas(ctx);
  ctx.translate(canvasSize.width/2, canvasSize.height/2);

  //window.requestAnimationFrame(main);
  
  //drawBackgroundGradient(0.3);
  drawBackground(0.9);
  

}






// Page logic

$(document).ready(function() { 
  
  seed = generateSeed();
  init();
  
  $("#seed-label").html(seed);
  $("#project-name").html(projectName);
  
});