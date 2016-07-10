// Demonstrating object properties versus variables
var myObject = {};
myObject.color = 'blue';

var pointerToMyObjectColorButNotTheActualObjectProperty = myObject.color;

console.log('1. pointerToMyObjectColorButNotTheActualObjectProperty',
	pointerToMyObjectColorButNotTheActualObjectProperty); // will log 'blue'

console.log('2. myObject.color', myObject.color); // will log 'blue'

pointerToMyObjectColorButNotTheActualObjectProperty = 'red';

console.log('3. pointerToMyObjectColorButNotTheActualObjectProperty',
	pointerToMyObjectColorButNotTheActualObjectProperty); // will log 'red'

console.log('4. myObject.color', myObject.color); // will log 'blue'

myObject.color = 'yellow';

console.log('5. pointerToMyObjectColorButNotTheActualObjectProperty',
	pointerToMyObjectColorButNotTheActualObjectProperty); // will log 'red'

console.log('6. myObject.color', myObject.color); // will log 'yellow'