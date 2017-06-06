/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.
*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack
*** Additional Exercises:
Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
 */

function Stack(capacity) {
	this.capacity = capacity || Infinity
	this.storage = {}
	this.cursor = 0
}

Stack.prototype.push = function(value) {
	if(this.cursor >= this.capacity) {
		return 'Max capacity already reached. Remove element before adding a new one.'
	}
  this.storage[this.cursor] = value
  this.cursor += 1
};
// Time complexity:

Stack.prototype.pop = function() {
	if(this.cursor > 0) {
		this.cursor -= 1
		var current = this.storage[this.cursor]
		delete this.storage[this.cursor]
  	return current
	}
};
// Time complexity:

Stack.prototype.peek = function() {
	return this.storage[this.cursor - 1]
};
// Time complexity:

Stack.prototype.count = function() {
  return this.cursor
};
// Time complexity:

Stack.prototype.contains = function(searchString) {
	for(var i = 0; i < this.capacity; i++) {
		if(this.storage[i] === searchString) {
			return true
		}
	}
	return false
}

Stack.prototype.until = function(searchString) {
	for(var i = 0; i < this.capacity; i++) {
		if(this.storage[i] === searchString) {
			return this.cursor - i
		}
	}
}

Stack.prototype.min = function() {
	var min = null
	for(var i = 0; i < this.cursor; i++) {
		if(min === null) {
			min = this.storage[i]
		} else {
			min = min > this.storage[i] ? this.storage[i] : min
		}	
	}
	return min
}


function SQueue () {
	this.stacks = {
		'1': new Stack(),
		'2': new Stack()
	}
	this.cursor = '1'
}

SQueue.prototype.enqueue = function(value) {
	this.stacks[this.cursor].push(value)
}

SQueue.prototype.dequeue = function() {
	var stackSize = this.stacks[this.cursor].count()
	for(var i = 0; i < stackSize; i++) {
		this.stacks['2'].push(this.stacks['1'].pop())
	}
	return this.stacks['2'].pop()
}

superQueue = new SQueue()
superQueue.enqueue('first')
superQueue.enqueue('second')
superQueue.enqueue('third')
superQueue.enqueue('fourth')
console.log('should be first: ' + superQueue.dequeue())
console.log(JSON.stringify(superQueue, null, 4))
console.log('should be second: ' + superQueue.dequeue())
console.log('should be third: ' + superQueue.dequeue())
console.log('should be fourth: ' + superQueue.dequeue())


/*
*** Exercises:
1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
2. Sort a stack so that its elements are in ascending order.
3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */