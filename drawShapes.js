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