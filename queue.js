// Queue

function Queue(capacity) {
	this.storage = {}
	this.capacity = capacity || Infinity
}

Queue.prototype.enqueue = function(value) {
	if(Object.keys(this.storage).length >= this.capacity) {
		return 'Sorry, queue is full!'
	} else {
		this.storage[Object.keys(this.storage).length] = value	
	}
	
}

Queue.prototype.dequeue = function() {
	if(this.storage[0] === undefined) return undefined
	var oldest = this.storage[0]
	delete this.storage[0]
	
	// shift keys
	for(var i = 0; i < Object.keys(this.storage).length; i++) {
		this.storage[i] = this.storage[i + 1]
	}
	delete this.storage[Object.keys(this.storage).length - 1]

	return oldest
}

Queue.prototype.peek = function () {
	return this.storage[0]
}

Queue.prototype.count = function () {
	return Object.keys(this.storage).length
}

Queue.prototype.contains = function(searchTerm) {
	for(var i = 0; i < Object.keys(this.storage).length; i++) {
		if(this.storage[i] === searchTerm) {
			return true
		}
	}
	return false
}

Queue.prototype.until = function(searchTerm) {
	for(var i = 0; i < Object.keys(this.storage).length; i++) {
		if(this.storage[i] === searchTerm) {
			return i + 1
		}
	}
	return false
}

var myQueue = new Queue();

myQueue.enqueue("first")
myQueue.enqueue("second")
myQueue.enqueue("third")

console.log("Should have three attributes:\n" + JSON.stringify(myQueue, null, 4))

console.log("dequeue: " + myQueue.dequeue())
console.log("dequeue: " + myQueue.dequeue())

console.log("should have one attributes:\n" + JSON.stringify(myQueue, null, 4))

myQueue.enqueue("second")
console.log("Should return third:" + myQueue.peek())
console.log('Should return 2:' + myQueue.count())
console.log(myQueue)

limitedQueue = new Queue(4)
limitedQueue.enqueue(1)
limitedQueue.enqueue(2)
limitedQueue.enqueue(3)
limitedQueue.enqueue(4)
console.log(limitedQueue.enqueue(5))
console.log("should return true:" + limitedQueue.contains(4))
console.log("should return false:" + limitedQueue.contains(8))
console.log("should return 1:" + limitedQueue.until(1))
console.log("should return 3:" + limitedQueue.until(3))
