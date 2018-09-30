// TEMPLATE FILE


// Base variables

var initialSeed;
var canvasID = "canvas";
var ctx, canvas, canvasSize;



function init(seed = generateSeed()) {
    
    canvas = document.getElementById(canvasID);
	ctx = canvas.getContext('2d');
    ctx.translate(0, 0);
    ctx.moveTo(0, 0);

	setup(seed);
    
    
	clearCanvas(ctx);
    ctx.translate(canvasSize.width/2, canvasSize.height/2);
   	
    window.requestAnimationFrame(main);
    
    
    //drawBackgroundGradient(0.3);
    drawBackground(0.9);

}




// Page logic

$(document).ready(function() { 
  
  init();
  
});