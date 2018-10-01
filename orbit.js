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
  
  //if ( currentNumSatellites < maxNumSatellites ) {
    var satellite = {
      size: 1,
      growthSpeed: randomBetween(1, 5) / 10,
      fadeSpeed: randomBetween(1, 10) / 10000,
      active: true,
      opacity: randomBetween(4, 9) / 10,
      colour: randomNeonColour(),
      pos: {
        x: x,
        y: y,
      },
      fillColour: randomNeonColour()
    }

    satellites.push(satellite); 
    currentNumSatellites++;
  }
//}

function setupMass() {
  mass = {
    pos: {
      x: canvasSize.width/2,
      y: canvasSize.height/2,
    },
    size: randomBetween(50, 200),
    fillColour: randomDarkColour(),
    strokeColour: randomLightColour(),
  };
}

function setupLeader() {
  var distanceFromMass = randomBetween(100, 200);
  leader = {
    distanceFromMass: distanceFromMass * randomSign(),
    speed: randomBetween(1, 10) / 2,
    pos: {
      x: distanceFromMass * randomSign(),
      y: distanceFromMass * randomSign(),
    },
    size: 1,
    fillColour: randomLightColour(),
    theta: randomBetween(1, 10) / 10,
    speed: randomBetween(1, 10) / 100,
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
  
  //maxNumSatellites = randomBetween(100,10000);
  currentNumSatellites = 0;
  
  
}


function updateLeader(dt) {

  leader.theta += leader.speed / randomBetween(1, 3);

  leader.pos.x = calculateOrbitX(leader.distanceFromMass, leader.theta, canvas.width/2);
  leader.pos.y = calculateOrbitY(leader.distanceFromMass, leader.theta, canvas.height/2)

  //if ( currentNumSatellites < maxNumSatellites ) {
    if ( true ) {
      createSatellite(leader.pos.x, leader.pos.y); 
    }  
  //}
  
  
}


function updateSatellites(dt, currentTimestep, paused) {
  
  if ( !paused ) {
    updateLeader(dt);
  }
  
  for ( var i = 0; i < currentNumSatellites; i++ ) {
    if ( satellites[i].active ) {
      satellites[i].opacity -= satellites[i].fadeSpeed;
      satellites[i].size += satellites[i].growthSpeed;

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
  //drawCircle(ctx, leader.pos.x, leader.pos.y, 1, leader.size, leader.fillColour);
  
}

function drawSatellites(ctx) {
  
  drawLeader(); // Only for debug
  
  for ( var i = 0; i < currentNumSatellites; i++ ) {
    if ( satellites[i].active ) {
       drawCircle(ctx, satellites[i].pos.x, satellites[i].pos.y, satellites[i].opacity, satellites[i].size, satellites[i].fillColour);
    }
  }
  
  drawMass();
  
  
}


function calculateOrbitX(radius, theta, offset) {
    return radius * Math.cos(theta) + offset;
}

function calculateOrbitY(radius, theta, offset) {
    return radius * Math.sin(theta) + offset;
}