function drawCircle(ctx, x, y, opacity, diameter, colour = {r: 255, g: 255, b: 255}) {
  
  var radius = diameter / 2;
  ctx.save();
  ctx.translate(0, 0);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = 'rgb(' + colour.r + ', ' + colour.g + ', ' + colour.b + ')';
  ctx.beginPath();

  ctx.arc(x, y, radius, 0, 2*Math.PI);

  ctx.fill();
  ctx.restore();
  
}


function drawLine(ctx, start, end, colour, opacity, strokeWidth, stroke = true, fill = false) {
    console.log(start, end, colour, opacity, strokeWidth, stroke, fill);
    ctx.translate(0, 0);
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = 'rgb(' + (colour.r) + ', ' + (colour.g) + ', ' + (colour.b) + ')';
    ctx.fillStyle = 'rgb(' + (colour.r) + ', ' + (colour.g) + ', ' + (colour.b) + ')';
    ctx.lineWidth = strokeWidth;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    if ( stroke ) {
        ctx.stroke();
    }
    if ( fill ) {
        ctx.fill();   
    }
}


function drawBezier(ctx, bg, start, end, cp1, cp2, colour, opacity, stroke = false, fill = false) {
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = 'rgb(' + bg.r + ', ' +  bg.g + ', ' + bg.b + ')';
    ctx.fillStyle = 'rgb(' + (colour.r) + ', ' + (colour.g) + ', ' + (colour.b) + ')';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    if ( true ) {
        ctx.globalAlpha = 0.01;
        ctx.stroke();
    }
    if ( fill ) {
        ctx.globalAlpha = opacity;
        ctx.fill();   
    }
    
}

function drawCircle(ctx, x, y, opacity, diameter, colour = {r: 255, g: 255, b: 255}) {
    
        var radius = diameter / 2;
        ctx.save();
		ctx.translate(0, 0);
        ctx.globalAlpha = opacity;
		ctx.fillStyle = 'rgb(' + colour.r + ', ' + colour.g + ', ' + colour.b + ')';
		ctx.beginPath();
		
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        
		ctx.fill();
		ctx.restore();
}

function drawBox(ctx, x, y, w, h, fillColour = {r: 255, g: 255, b: 255}, strokeColour = {r: 0, g: 0, b: 0}, fill = true, stroke = false, fillOpacity = 1, strokeOpacity = 1, lineWidth = 5) {

  
		ctx.save();
		ctx.translate(x, y);
        
		ctx.beginPath();
        ctx.moveTo(w * -0.5, h * -0.5);
        ctx.lineTo(w *  0.5, h * -0.5);
        ctx.lineTo(w *  0.5, h *  0.5);
        ctx.lineTo(w * -0.5, h *  0.5);
        ctx.lineTo(w * -0.5, h * -0.5);
		
        if (fill) {
            ctx.globalAlpha = fillOpacity;
            ctx.fillStyle = 'rgb(' + fillColour.r + ', ' + fillColour.g + ', ' + fillColour.b + ')';
            ctx.fill();
        }
        if ( stroke ) {
            ctx.globalAlpha = strokeOpacity;
            ctx.strokeStyle = 'rgb(' + strokeColour.r + ', ' + strokeColour.g + ', ' + strokeColour.b + ')';
            ctx.lineWidth = lineWidth;   
            ctx.stroke();
            
        }
		ctx.restore();

}