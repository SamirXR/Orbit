// Metadata
var algoName = "WIP";
var algoVersion = 1;

// Custom variables


function drawMetadata() {
   
}



function setup() {
    
  // Base variable setup
	dt = 1;
	currentTimestep = 1;
	paused = false;
	maxTimesteps = 50000;
    
   canvasSize = {
		width: 2000,
		height: 800
	};
    
	bg = {
		r: randomBetween(0,10),
		g: randomBetween(0,10),
		b: randomBetween(0,10),
	};
	
	var container = $("#canvas-container");
	canvas.width = canvasSize.width;
	canvas.height = canvasSize.height;
    
    
    // Custom variable setup
    
    
    
    var colourPicker = randomSign();
    var c;
    if ( colourPicker == 1 ) {
        c = 0;
    } else {
        c = 255;   
    }
    outerCircleGuide = {
        x: canvasSize.width/2,
        y: canvasSize.height/2,
        radius: randomBetween(700, 4000),
        colour: {
            r: c,
            g: c,
            b: c
        }
    };
    
    
    var roughWidth = randomBetween(1600, 3000);
    var roughHeight = randomBetween(30, 200);
    var maxVariation = randomBetween(1, 100);
    
    innerQuadGuide = {
        pos1: {
            x: canvasSize.width/2 - roughWidth + randomBetween(0, maxVariation) * randomSign(),
            y: canvasSize.height/2 - roughHeight + randomBetween(0, maxVariation) * randomSign()
        },
        pos2: {
            x: canvasSize.width/2 - roughWidth + randomBetween(0, maxVariation) * randomSign(),
            y: canvasSize.height/2 + roughHeight + randomBetween(0, maxVariation) * randomSign()
        },
        pos3: {
            x: canvasSize.width/2 + roughWidth + randomBetween(0, maxVariation) * randomSign(),
            y: canvasSize.height/2 + roughHeight + randomBetween(0, maxVariation) * randomSign()
        },
        pos4: {
            x: canvasSize.width/2 + roughWidth + randomBetween(0, maxVariation) * randomSign(),
            y: canvasSize.height/2 - roughHeight + randomBetween(0, maxVariation) * randomSign()
        }
    };
    
    
    innerQuads = [];
    var numQuads = randomBetween(1, 2);
    
    for ( var i = 0; i < numQuads; i++ ) {
        createInnerQuad();   
    }
    
    outerCurves = [];
    var numCurves = randomBetween(1, 8);
    
    for ( var i = 0; i < numCurves; i++) {
        createOuterCurve();   
    }
    
    
}

