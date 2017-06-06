/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

function Tree (value) {
  this.value = value
  this.children = []
}

myTree = new Tree(0)

console.log(myTree)

// tree.addChild(value)
// => child node (new tree)
// add child to tree/subtree and return child node (which should be a tree instance)
Tree.prototype.addChild = function(value) {
	var newTree = new Tree(value)
  this.children.push(newTree)
  return newTree
};
// Time complexity:

myTree.addChild(1)
console.log("should return added subtree: ", myTree.addChild(2))
console.log(myTree)

// building a bigger tree to test contains()
myTree.addChild(3)
myTree.children[1].addChild(22)
myTree.children[1].addChild(23)

console.log( JSON.stringify(myTree, null, 4))
// tree.contains(value)
// => true/false
// Return true if value is in tree, false if not
Tree.prototype.contains = function(value) {

	if(this.value === value) return true
  
	function searchSubtree(subTree, value) {
		for (var child of subTree) {
  		if(child.value === value) return true

  		if(child.children.length > 0) {
  			return searchSubtree(child.children, value)
  		}
  	}

  	return false	
	}

	return searchSubtree(this.children, value)
};
// Time complexity:

console.log("should return true:", myTree.contains(0) )
console.log("should return true:", myTree.contains(2) )
console.log("should return false:", myTree.contains(4) )
console.log("should return true:", myTree.contains(23) )


// tree.traverseDepthFirst(callback)
// => undefined
// Invoke the callback for every node in a depth-first order
Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me...
};
// Time complexity:


// tree.traverseBreadthFirst(callback)
// => undefined
// Invoke the callback for every node in a breadth-first order
Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity: