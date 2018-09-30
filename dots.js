// Metadata
var version = 1;

// Global variables
// TODO: handle these better
var seed, maxTimesteps, ctx, canvasSize, canvas;

// Custom variables
var smileSize, smileColour, smilePos, colourVariation;


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
  smileColour = randomNeonColour();
  smilePos = {
    x: 0,
    y: canvasSize.height/2
  };
  
  colourVariation = 10;
}


function updateSmiles(dt, currentTimestep, paused) {
  smileSize = smileSize + (randomBetween(0, 20) - 10);
  
  if ( smileSize < 0 ) {
    smileSize = 1; 
  }
  
  smilePos.x += 1;
  smilePos.y += randomBetween(0, 20) - 10;
  smileColour.r += randomBetween(0, colourVariation) - colourVariation/2;
  smileColour.g += randomBetween(0, colourVariation) - colourVariation/2;
  smileColour.b += randomBetween(0, colourVariation) - colourVariation/2;
  
  if ( smileColour.r < 0 ) {
    smileColour.r = 10;
  } else if ( smileColour.r > 255 ) {
    smileColour.r = 245; 
  }
  
  if ( smileColour.g < 0 ) {
    smileColour.g = 10;
  } else if ( smileColour.g > 255 ) {
    smileColour.g = 245; 
  }
  
  if ( smileColour.b < 0 ) {
    smileColour.b = 10;
  } else if ( smileColour.b > 255 ) {
    smileColour.b = 245; 
  }
  
}


function drawSmiles(ctx) {
  drawCircle(ctx, smilePos.x, smilePos.y, 0.5, smileSize, smileColour);
}