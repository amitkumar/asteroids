var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var rectWidth = width/5;
var rectHeight = height/5;

var x = 0;
var y = 0 - rectHeight;

var movementRate = 1;

function draw(){
	// call clearRect with the entire size of the canvas to clear the whole thing
	
	// Fill the whole canvas with a black rectangle
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);
	
	drawTriangle(context, x, y, rectWidth, rectHeight);

	// Update x and y for the next draw operation
	y = y + movementRate;

	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);



function drawTriangle(context, x, y, rectWidth, rectHeight){
	// Draw a triangle with paths
	context.strokeStyle = 'red';
	// Start a new path
	context.beginPath();
	// Now define the path with .moveTo() and .lineTo() methods
	context.moveTo(x, y);
	context.lineTo(x + rectWidth, y);
	context.lineTo(x + rectWidth/2, y + rectHeight);
	context.closePath();

	// The path is only made visible when we call .stroke()
	context.stroke();
}