// General helpers

function difference(x, y) {
    var result = 0;
    if ( x > y ) {
        result = x - y;
    } else {
        result = y - x;
    }
    return result;
}



// Colour palette helpers

function getNeonColour(variant = randomBetween(1, 6)) {
    
    var maxJiggle = randomBetween(0, 15);
    
    var colour = {};
    var r, g, b;
    
    switch (variant) {
        case 1:
            r = 60; g = 240; b = 200;
            break;
        case 2:
            r = 240; g = 60; b = 200;
            break;
        case 3:
            r = 200; g = 240; b = 60;
            break;
        case 4:
            r = 60; g = 200; b = 240;
            break;
        case 5:
            r = 240; g = 200; b = 60;
            break;
        case 6:
            r = 200; g = 60; b = 240;
            break;
        default:
            r = 235; g = 235; b = 235;
            break;
    }
    
    colour = {
        r: r + randomBetween(0, maxJiggle),
        g: g + randomBetween(0, maxJiggle),
        b: b + randomBetween(0, maxJiggle)
    }
    
    return colour;
}




// Random number helpers, including seeding

var workingSeed;
var seedRange = 10000;

function initSeedSystem(seed) {
    workingSeed = seed;
}


function generateSeed() {
	var result = Math.floor(Math.random() * seedRange); // This is the only place where Math.random should be used. After the seed is generated, use random() instead.
    console.log("SEED: ", result);
	return result;
}


function random() {
    var x = Math.sin(workingSeed++) * seedRange;
    return x - Math.floor(x);
}



function randomBetween(min, max) {
	// TODO: don't assume it's an int
	var range = max - min;
	var result = Math.floor(random() * range) + min;
	return result;
}

function pureRandomBetween(min, max) { // a random not in the seed system
	// TODO: don't assume it's an int
	var range = max - min;
	var result = Math.floor(Math.random() * range) + min;
	return result;
}


function randomSign() {
	// returns 1 or -1, randomly
	if ( random() <= 0.5 ) {
		return -1;
	} else {
		return 1;
	}
}

function randomTinyVariation(startingPoint) {
	var random = random();
	return (startingPoint*random) * randomSign();
}

function randomColour() {
	return randomBetween(0, 255);
}


function randomMidColour() {
	return randomBetween(70, 200);
}

function randomDarkColour() {
	return randomBetween(0, 100);
}

function randomLightColour() {
	return randomBetween(200, 255);
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
