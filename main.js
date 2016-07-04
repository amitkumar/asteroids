var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var rectWidth = width/20;
var rectHeight = height/40;

var x = 0;
var y = 0;
var rotationDegrees = 0;
var xVector = 0;
var yVector = 0;

var movementRate = 2;
var rotationRate = 10;


var myRocket = new Rocket(
	context,
	canvas.width,
	canvas.height,
	rectWidth, 
	rectHeight, 
	rotationDegrees, 
	rotationRate, 
	xVector, 
	yVector,
	movementRate,
	x,
	y,
	'red');

console.log('myRocket', myRocket);


function draw(){
	// call clearRect with the entire size of the canvas to clear the whole thing
	
	// Fill the whole canvas with a black rectangle
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);
	
	myRocket.draw();

	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);



