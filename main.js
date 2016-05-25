var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var rectWidth = width/5;
var rectHeight = height/5;

var x = 0;
var y = 0;
var rotationDegrees = 0;

var movementRate = 1;
var rotationRate = 1;

function draw(){
	// call clearRect with the entire size of the canvas to clear the whole thing
	
	// Fill the whole canvas with a black rectangle
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);
	
	drawTriangle(context, x, y, rectWidth, rectHeight, rotationDegrees);

	// drawTriangle(context, x * 2, y * 2, rectWidth * 2, rectHeight * 2);

	// Update x and y for the next draw operation
	// y = y + movementRate;
	rotationDegrees = rotationDegrees + 1;

	if (rotationDegrees > 360){
		rotationDegrees = 0;
	}

	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);



function drawTriangle(context, x, y, rectWidth, rectHeight, rotationDegrees){
	context.save();
	
	// var centerOfTriangle = {
	// 	x : x + rectWidth/2,
	// 	y : y + rectHeight/2
	// };

	var centerX = x + rectWidth/2;
	var centerY = y + rectHeight/2;

	context.translate(centerX, centerY); // Translate to center of rectangle
	
	// Convert degrees to radians, because context.rotate needs radians
	var radians = rotationDegrees * (Math.PI/180);
	context.rotate(radians); 

	// Draw a triangle with paths
	context.strokeStyle = 'red';
	// Start a new path
	context.beginPath();

	// Now define the path with .moveTo() and .lineTo() methods
	var offsetTriangleX = x - rectWidth/2;
	var offsetTriangleY = y - rectHeight/2;

	context.moveTo(offsetTriangleX, offsetTriangleY);
	context.lineTo(offsetTriangleX + rectWidth, offsetTriangleY);
	context.lineTo(offsetTriangleX + rectWidth/2, offsetTriangleY + rectHeight);

	context.closePath();

	// The path is only made visible when we call .stroke()
	context.stroke();

	context.restore();
}