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

var movementRate = 0.1;
var rotationRate = 0.1;

function draw(){
	// call clearRect with the entire size of the canvas to clear the whole thing
	
	// Fill the whole canvas with a black rectangle
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);
	
	drawTriangle(context, x, y, rectWidth, rectHeight, rotationDegrees);

	// Update x and y for the next draw operation
	y = y + movementRate;
	// x = x + movementRate;
	rotationDegrees = rotationDegrees + rotationRate;

	if (rotationDegrees > 360){
		rotationDegrees = 0;
	}

	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);



function drawTriangle(context, x, y, rectWidth, rectHeight, rotationDegrees){
	context.save();
	
	var centerX = x + rectWidth/2;
	var centerY = y + rectHeight/2;

	context.translate(centerX, centerY); // Translate to center of rectangle
	console.log('context.translate(centerX, centerY)', centerX, centerY);
	
	context.strokeStyle = 'white';
	context.strokeRect(0, 0, width, height);


	// Convert degrees to radians, because context.rotate needs radians
	var radians = rotationDegrees * (Math.PI/180);
	context.rotate(radians);
	console.log('rotationDegrees', rotationDegrees);
	console.log('context.rotate(radians)', radians);

	context.strokeStyle = 'yellow';
	context.strokeRect(0, 0, width, height);

	context.translate(-centerX, -centerY);
	console.log('context.translate(-centerX, -centerY);', -centerX, -centerY);


	context.strokeStyle = 'green';
	context.strokeRect(0, 0, width, height);


	// Draw a triangle with paths
	context.strokeStyle = 'white';
	// Start a new path
	context.beginPath();

	// Now define the path with .moveTo() and .lineTo() methods
	context.moveTo(x, y);
	context.lineTo(x + rectWidth, y);
	context.lineTo(x + rectWidth/2, y + rectHeight);

	context.closePath();

	// The path is only made visible when we call .stroke()
	context.stroke();

	context.restore();
}