/*
LINKED LIST
Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.
*** Operations:
** Part 1
myList.forEach(callbackFn)
invoke callback function with the value of each node
myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')
myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode
myList.removeAfter(refNode)
=> removed node
remove node after the refNode
myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in
myList.removeHead()
=> removed head node
remove the head node of the linked list
myList.findNode(value)
=> first node that has a value matching what was passed in
* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?
myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in
myList.removeTail()
=> removed tail node
remove the tail node from the list
** Part 2
Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?
Think about time complexity. What would it be for your current implementation of a linked list?
How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?
Once you've come up with a plan, implement the following methods.
myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode
myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in
*** Additional Exercises:
Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list
Reimplement stack and queue data structures using linked lists.
 */


// PART 1

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
}

LinkedList.prototype.forEach = function(callback) {
  function each(node) {
    if(node.next !== null) each(node.next)
    return callback(node.value)
  }
  return each(this.head)
};
// Time complexity:

LinkedList.prototype.print = function() {
  var recursivePrint = function recursivePrint(node) {
    if(node.next === null) {
      return node.value
    } else {
      return recursivePrint(node.next) + ', ' + node.value
    }
  }

  return recursivePrint(this.head)
};
// Time complexity:

LinkedList.prototype.insertAfter = function(node, value) {
  var newNode = new Node(value)

  if(node.next !== null) {
    newNode.next = node.next
  }

  node.next = newNode
};
// Time complexity:

LinkedList.prototype.removeAfter = function(node) {
  var fixRef = node.next.next
  node.next = fixRef
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  var newHead = new Node(value)
  newHead.next = this.head
  this.head = newHead
};
// Time complexity:

LinkedList.prototype.removeHead = function() {
  var newHeadRef = this.head.next
  this.head = newHeadRef
}

LinkedList.prototype.findNode = function(value) {

  function find(node) {
    if(node.value === value) {
      return node
    }
    if(node.next !== null) {
      return find(node.next)
    }
  }

  return find(this.head)
};
// Time complexity:

LinkedList.prototype.appendToTail = function(value) {
  
  function toTail(pointer, value) {
    if(pointer.next !== null) {
      toTail(pointer.next, value)
    } else {
      var newTail = new Node(value)
      pointer.next = newTail
    }
  }

  toTail(this.head, value)
};
// Time complexity:


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:

var ll = new LinkedList(1)

ll.insertHead(2)
ll.insertHead(3)

console.log('should be 1,2,3: ', ll.print() )

var log = function(value) {
  console.log(value)
}

console.log( ll.forEach(log) )

var node2 = ll.findNode(2)

console.log(node2)

ll.insertAfter(node2, 1.5)



console.log( ll.print() )

var toBeRemoved = ll.findNode(2)

console.log(toBeRemoved.next.value)

ll.removeAfter(toBeRemoved)

console.log(JSON.stringify(ll, null, 4))

ll.removeHead()

console.log(JSON.stringify(ll, null, 4))

ll.appendToTail(0.5)

console.log(JSON.stringify(ll, null, 4))

/*
*** Exercises:
1. Implement a stack using a linked list.
2. Implement a queue using a linked list.
3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
4. Reverse a linked list. Do not use any additional storage structures.
5. Find the kth to last element of a singly linked list.
6. Detect if a linked list has a loop.
7. Check if a linked list is a palindrome.
8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)
 */