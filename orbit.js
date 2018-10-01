// Global variables
// TODO: handle these better
var seed, maxTimesteps, ctx, canvasSize, canvas;

// Custom variables
var mass; // The thing the satellites orbit
var satellites = [], currentNumSatellites, maxNumSatellites; // The things orbiting the mass
var leader; // The invisible orbiting thing that decides whether to poop out satellites

function drawMetadata() {
   
}

function createSatellite(x, y) {
  
  var satellite = {
    size: 1,
    active: true,
    opacity: randomBetween(4, 9) / 10,
    colour: randomNeonColour(),
    pos: {
      x: x,
      y: y,
    },
    fillColour: randomNeonColour()
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

function setupLeader() {
  var distanceFromMass = randomBetween(220, 500);
  leader = {
    distanceFromMass: distanceFromMass,
    speed: 1,
    pos: {
      x: distanceFromMass,
      y: distanceFromMass,
    },
    size: 10,
    fillColour: randomLightColour(),
  }
}

function setupSatellites(seed, maxTimesteps, ctx, canvasSize, canvas) {
  
  setupMass();
  setupLeader();
  
  seed = seed;
  maxTimesteps = maxTimesteps;
  ctx = ctx;
  canvasSize = canvasSize;
  canvas = canvas;
  
  xSpeed = randomBetween(4, 12) / 2;
  maxYVariation = randomBetween(5, 30);
  
  maxNumSatellites = randomBetween(10,100);
  currentNumSatellites = 0;
  
  
}


function updateSatellites(dt, currentTimestep, paused) {
  
  
  for ( var i = 0; i < currentNumSatellites; i++ ) {
    if ( satellites[i].active ) {
      satellites[i].opacity -= 0.01;
      satellites[i].size += 0.01;

      if ( satellites[i].opacity < 0 ) {
        satellites[i].active = false; 
      }
    }
  }  
  
}


function drawMass() {
  //drawBox(ctx, mass.pos.x, mass.pos.y, mass.size, mass.size, mass.fillColour, mass.strokeColour, true, true, 1, 1, 5); 
  drawCircle(ctx, mass.pos.x, mass.pos.y, 1, mass.size, mass.fillColour);
  
}


function drawLeader() {
  drawCircle(ctx, leader.pos.x, leader.pos.y, 1, leader.size, leader.fillColour);
  
  if ( currentNumSatellites < maxNumSatellites ) {
    if ( randomBetween(1, 10) == 5 ) {
      createSatellite(leader.x, leader.y); 
    }  
  }
  
  
}

function drawSatellites(ctx) {
  
  drawMass();
  drawLeader(); // Only for debug
  
  for ( var i = 0; i < currentNumSatellites; i++ ) {
    if ( satellites[i].active ) {
       drawCircle(ctx, satellites[i].pos.x, satellites[i].pos.y, 1, satellites[i].size, satellites[i].fillColour);
    }
  }
  
}