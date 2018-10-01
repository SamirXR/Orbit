// Global variables
// TODO: handle these better
var seed, maxTimesteps, ctx, canvasSize, canvas;

// Custom variables
var mass; // The thing the satellites orbit
var satellites = [], numSatellites; // The things orbiting the mass

function drawMetadata() {
   
}

function createSatellite() {
  
  var satellite = {
    size: 1,
    opacity: randomBetween(4, 9) / 10,
    colour: randomNeonColour(),
    pos: {
      x: 0,
      y: randomBetween(canvasSize.height*0.25, canvasSize.height*0.75),
    },
    colourVariation: randomBetween(2, 10),
  }
  return satellite;
}

function setupMass() {
  mass = {
    pos: {
      x: canvasSize.width/2,
      y: canvasSize.height/2,
    },
    size: randomBetween(50, 200),
    fillColour: randomLightColour(),
    strokeColour: randomLightColour(),
  };
}

function setupSatellites(seed, maxTimesteps, ctx, canvasSize, canvas) {
  
  setupMass();
  
  seed = seed;
  maxTimesteps = maxTimesteps;
  ctx = ctx;
  canvasSize = canvasSize;
  canvas = canvas;
  
  xSpeed = randomBetween(4, 12) / 2;
  maxYVariation = randomBetween(5, 30);
  
  numSatellites = randomBetween(10,100);
  
  for ( var i = 0; i < numSatellites; i++ ) {
    satellites.push(createSatellite());  
  }
  
}


function updateSatellites(dt, currentTimestep, paused) {
  
  for ( var i = 0; i < numSatellites; i++ ) {
    
  }  
  
}


function drawMass() {
  //drawBox(ctx, mass.pos.x, mass.pos.y, mass.size, mass.size, mass.fillColour, mass.strokeColour, true, true, 1, 1, 5); 
  drawCircle(ctx, mass.pos.x, mass.pos.y, 1, mass.size, mass.fillColour);
  
}


function drawSatellites(ctx) {
  
  drawMass();
  for ( var i = 0; i < numSatellites; i++ ) {
     
  }
  
}