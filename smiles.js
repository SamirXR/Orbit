// Metadata
var version = 1;

// Global variables
// TODO: handle these better
var seed, maxTimesteps, ctx, canvasSize, canvas;

// Custom variables
var smileSize;


function drawMetadata() {
   
}

function setupSmiles(seed, maxTimesteps, ctx, canvasSize, canvas) {
  // Variable setup
  seed = seed;
  maxTimesteps = maxTimesteps;
  ctx = ctx;
  canvasSize = canvasSize;
  canvas = canvas;
  
  smileSize = 1;
}


function updateSmiles(dt, currentTimestep, paused) {
  smileSize = currentTimestep;
}


function drawSmiles() {
  drawCircle(ctx, 0, 0, 1, smileSize, randomColour);
}