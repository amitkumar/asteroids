class Rocket {
	constructor(
		context,
		canvasWidth,
		canvasHeight,
		width, 
		height, 
		orientationDirection, 
		rotationRate, 
		xVector, 
		yVector,
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
		this.orientationDirection = orientationDirection;
		this.rotationRate = rotationRate;
		this.xVector = xVector;
		this.yVector = yVector;
		this.movementRate = 0;
		this.x = x;
		this.y = y;
		this.color = color;
		this.movementDirection = this.orientationDirection;

		window.addEventListener('keydown', event => this.handleKeydown(event));
	}

	handleKeydown(event){
		var orientationDirection = this.orientationDirection;
		var rotationRate = this.rotationRate;
		var movementRate = this.movementRate;
		var xVector = this.xVector;
		var yVector = this.yVector;
			
		switch(event.which){
			case 37:
			// left
			this.orientationDirection = orientationDirection - rotationRate;
			break;
			case 38:
			// up
			this.movementRate = this.movementRate + 1;
			this.movementDirection = this.orientationDirection;
			break;
			case 39:
			// right
			this.orientationDirection = orientationDirection + rotationRate;
			break;
			case 40:
			// down
			this.movementRate = this.movementRate - 1;
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

		
		if (this.movementRate < 0){
			this.movementRate = 0;
		}
		this.xVector = this.movementRate * Math.cos(this.movementDirection * Math.PI / 180);
		this.yVector = this.movementRate * Math.sin(this.movementDirection * Math.PI / 180);

		this.x = this.x + this.xVector;
		this.y = this.y + this.yVector;

		// console.log('update(), this.orientationDirection', this.orientationDirection);

		if (this.orientationDirection > 360){
			this.orientationDirection = 0;
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
		var orientationDirection = this.orientationDirection;

		context.save();
	
		var centerX = x + width/2;
		var centerY = y + height/2;

		context.translate(centerX, centerY); // Translate to center of rectangle

		// Convert degrees to radians, because context.rotate needs radians
		var radians = orientationDirection * (Math.PI/180);
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