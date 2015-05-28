// Write a class/constructor OddArray 
// which wraps around and accepts only 
// odd numbers.
// 
// The class should have it's own add() and get()
// 
// add(x) -> when x is odd, accept it, otherwise do nothing
// 
// get() when provided no arguments should 
// return the entire internal array
// 
// get(3) should return state[3]
// 
// The constructor should accept an initial array
// as an argument, and will set the internal array
// as only those numbers that are odd
// 
// i.e. new OddArray([1, 2, 3, 4]) --> {state: [1, 3]}

function OddArray(arr){
    this.state = (arr || []).filter(function(v){
    	return v%2 === 1
    })
}
//use of short circuiting

OddArray.prototype = {
    add: function(x){
    	if(x && x%2 === 1){
    		this.state.push(x)
    	}
    },
    get: function(x){
    	if(typeof x === "number" && x >= 0 && num < this.state.length){
    		return this.state[x]
    	}
    	return this.state
    }
}

// testing your code from above
var odd = new OddArray([1, 2, 3, 4, 5])
console.assert(odd.get().length, 3)
console.assert(odd.get()[0], 1)
console.assert(odd.get()[1], 3)
console.assert(odd.get()[2], 5)

odd.add(2)
console.assert(odd.get().length, 3)

odd.add(3)
console.assert(odd.get().length, 4)


// Define a function called Robot().
// Typically, we would create a new instance with new Robot().
// Instead, create a "factory" that creates more Robots with this call:
// Robot.new()
// When Robot.new() is called it should return a new instance with the prototype set to Robot e.g.:
// var robby = Robot.new();

function Robot(name){
	if(!(this instanceof Robot)) return undefined //failsafe incase forgotten to use 'new'
	this.name = name
	return this
}

Robot.new = function(){
	// the main job could be done just using: return new Robot()
	var args = Array.prototype.slice.call(arguments)
	return Robot.apply(new Robot(), args)
}