// Base variables

var projectName = "Template";
var projectVersion = 1;

var seed;
var canvasID = "canvas";
var ctx, canvas, canvasSize;
var bg;
var dt, currentTimestep, paused, maxTimesteps;



function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}



function setupBackground() {
  bg = randomDarkColour();
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
  
  
  initSeedSystem();
  
  setupBackground();
  
  setupSmiles(seed, maxTimesteps, ctx, canvasSize, canvas);
  
}




function init(seed) {
    
  canvas = document.getElementById(canvasID);
	ctx = canvas.getContext('2d');
  ctx.globalAlpha = 1;
  ctx.translate(0, 0);
  ctx.moveTo(0, 0);

  setupAll();    
	clearCanvas(ctx);

  drawBackground(1);
  
  window.requestAnimationFrame(main);
  
}



function drawBackground(opacity = 1) {
  var oldAlpha = ctx.globalAlpha;
  ctx.globalAlpha = opacity;
	ctx.fillStyle = 'rgb(' + bg.r + ', ' + bg.g + ', ' + bg.b + ')';	
	ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = oldAlpha;
}



function draw() {
  
  drawBackground(0.001);
  drawSmiles(ctx);
  
}



function update() {
  currentTimestep += 1;
    
  if ( currentTimestep % 1 == 0 ) {
      updateSmiles(dt, currentTimestep, paused);
  }

  if ( currentTimestep > maxTimesteps ) {
      paused = true;
  }  
}



function main() {
	if (!paused) {
		update();
		draw();
		if (currentTimestep < maxTimesteps) {
			currentTimestep++;
			window.requestAnimationFrame(main);	
		} else {
			console.log("COMPLETE");
		}
	}
}



// Page logic

$(document).ready(function() { 
  
  seed = generateSeed();
  init();
  
  $("#seed-label").html(seed);
  $("#project-name").html(projectName);
  $("#project-version").html(projectVersion);
  
  $("#reseed").click(function() {
    // TODO: reseed without refreshing whole page
    window.location.href = window.location.pathname + window.location.search + window.location.hash;
  });
  
});