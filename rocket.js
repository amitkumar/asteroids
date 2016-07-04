class Rocket {
	constructor(
		context,
		canvasWidth,
		canvasHeight,
		width, 
		height, 
		rotationDegrees, 
		rotationRate, 
		xVector, 
		yVector,
		movementRate,
		x,
		y,
		color) {
		// "this" refers to the instance of Rocket that I'm currently working with
		// Add properties to "this" when each instance of the class should have that property

		this.context = context;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.width = width;
		this.height = height;
		this.rotationDegrees = rotationDegrees;
		this.rotationRate = rotationRate;
		this.xVector = xVector;
		this.yVector = yVector;
		this.movementRate = movementRate;
		this.x = x;
		this.y = y;
		this.color = color;


		window.addEventListener('keydown', event => this.handleKeydown(event));
	}

	handleKeydown(event){
		var rotationDegrees = this.rotationDegrees;
		var rotationRate = this.rotationRate;
		var movementRate = this.movementRate;
		var xVector = this.xVector;
		var yVector = this.yVector;
			
		console.log('keydown event.which', event.which);

		// var rotationDegrees = rotationDegrees;

		switch(event.which){
			case 37:
			console.log('left');
			this.rotationDegrees = rotationDegrees - rotationRate;
			break;
			case 38:
			console.log('up');
			this.xVector = movementRate * Math.cos(rotationDegrees * Math.PI / 180);
			this.yVector = movementRate * Math.sin(rotationDegrees * Math.PI / 180);
			break;
			case 39:
			console.log('right');
			this.rotationDegrees = rotationDegrees + rotationRate;
			break;
			case 40:
			console.log('down');
			this.xVector = 0;
			this.yVector = 0;
			break;
			default:
		}
	}

	update(){
		// var x = this.x;
		// x = 2;
		// this.x did not get changed to 2. Only the variable x got updated.
		// To change this.x, I have to say this.x = 2;
		// Variable x only lets me refer to the value of this.x from the time
		// I did the variable assignment.

		

		this.x = this.x + this.xVector;
		this.y = this.y + this.yVector;

		console.log('update(), this.rotationDegrees', this.rotationDegrees);

		if (this.rotationDegrees > 360){
			this.rotationDegrees = 0;
		}

		if (this.isRocketAtBoundary()){
			this.stopRocket();
		}
	}

	isRocketAtBoundary(){
		var result = false;

		// At right boundary
		if (this.x >= (this.canvasWidth - this.width)){
			result = true;
		}

		// At bottom boundary
		if (this.y >= (this.canvasHeight - this.height)){
			result = true;
		}

		// At left boundary
		if (this.x < 0){
			result = true;
		}
		
		// At top boundary
		if (this.y < 0){
			result = true;
		}

		return result;
	}

	stopRocket(){
		this.xVector = 0;
		this.yVector = 0;
	}

	draw(){
		this.update();

		var context = this.context;
		var x = this.x;
		var y = this.y;
		var width = this.width;
		var height = this.height;
		var rotationDegrees = this.rotationDegrees;

		context.save();
	
		var centerX = x + width/2;
		var centerY = y + height/2;

		context.translate(centerX, centerY); // Translate to center of rectangle

		// Convert degrees to radians, because context.rotate needs radians
		var radians = rotationDegrees * (Math.PI/180);
		context.rotate(radians);
		
		// Draw a triangle with paths
		context.strokeStyle = this.color;
		// Start a new path
		context.beginPath();

		// Now define the path with .moveTo() and .lineTo() methods
		var triangleOriginX = -width/2;
		var triangleOriginY = -height/2;

		context.moveTo(triangleOriginX, triangleOriginY);
		context.lineTo(triangleOriginX + width, triangleOriginY + height/2);
		context.lineTo(triangleOriginX, triangleOriginY + height);

		context.closePath();

		// The path is only made visible when we call .stroke()
		context.stroke();

		context.restore();

	}
}