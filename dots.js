// Global variables
// TODO: handle these better
var seed, maxTimesteps, ctx, canvasSize, canvas;

// Custom variables
var dots = [], numDots, xSpeed, maxYVariation;


function drawMetadata() {
   
}

function createDot() {
  
  var dot = {
    size: 1,
    opacity: randomBetween(4, 9) / 10,
    colour: randomNeonColour(),
    pos: {
      x: 0,
      y: randomBetween(canvasSize.height*0.25, canvasSize.height*0.75),
    },
    colourVariation: randomBetween(2, 10),
  }
  return dot;
}

function setupDots(seed, maxTimesteps, ctx, canvasSize, canvas) {
  // Variable setup
  seed = seed;
  maxTimesteps = maxTimesteps;
  ctx = ctx;
  canvasSize = canvasSize;
  canvas = canvas;
  
  xSpeed = randomBetween(4, 12) / 2;
  maxYVariation = randomBetween(5, 30);
  
  numDots = randomBetween(10,100);
  
  for ( var i = 0; i < numDots; i++ ) {
    dots.push(createDot());  
  }
  
}


function updateDots(dt, currentTimestep, paused) {
  
  for ( var i = 0; i < numDots; i++ ) {
    
    
    dots[i].size = (dots[i].size + (randomBetween(2, 10) - 4)) / 1.2;

    if ( dots[i].size < 0 ) {
      dots[i].size = 1; 
    }

    dots[i].pos.x += xSpeed;
    dots[i].pos.y += randomBetween(1, maxYVariation) - maxYVariation / 2;
    dots[i].colour.r += randomBetween(1, dots[i].colourVariation) - dots[i].colourVariation/2;
    dots[i].colour.g += randomBetween(1, dots[i].colourVariation) - dots[i].colourVariation/2;
    dots[i].colour.b += randomBetween(1, dots[i].colourVariation) - dots[i].colourVariation/2;

    if ( dots[i].colour.r < 0 ) {
      dots[i].colour.r = 10;
    } else if ( dots[i].colour.r > 255 ) {
      dots[i].colour.r = 245; 
    }

    if ( dots[i].colour.g < 0 ) {
      dots[i].colour.g = 10;
    } else if ( dots[i].colour.g > 255 ) {
      dots[i].colour.g = 245; 
    }

    if ( dots[i].colour.b < 0 ) {
      dots[i].colour.b = 10;
    } else if ( dots[i].colour.b > 255 ) {
      dots[i].colour.b = 245; 
    }
    
  }
  
  
  
  
}


function drawDots(ctx) {
  
  for ( var i = 0; i < numDots; i++ ) {
    drawCircle(ctx, dots[i].pos.x, dots[i].pos.y, dots[i].opacity, dots[i].size, dots[i].colour);
    
  }
}