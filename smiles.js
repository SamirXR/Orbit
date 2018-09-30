// Metadata
var version = 1;

// Global variables
// TODO: handle these better
var seed, maxTimesteps, ctx, canvasSize, canvas;

// Custom variables
var smileSize, smileColour, smileGrowth, smilePos;


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
  smileColour = randomColour();
  smileGrowth = randomBetween(1, 50) / 100;
  smilePos = {
    x: 0,
    y: canvasSize.height/2
  }
}


function updateSmiles(dt, currentTimestep, paused) {
  smileSize = randomBetween(0, 1) * smileGrowth;
  smilePos.x += 1;
  smilePos.y += randomBetween(0, 50) - 25;
}


function drawSmiles(ctx) {
  drawCircle(ctx, smilePos.x, smilePos.y, 0.1, smileSize, smileColour);
}