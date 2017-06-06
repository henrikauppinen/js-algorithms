/*
MERGE SORT
*** Description
Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.
Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).
Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.
*** Exercises
- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]
*/

// correctly merges sorted lists
function merge(lists) {
	
	var result = []
	var left = lists[0]
	var right = lists[1]

	console.log('merge:', lists)

	while(left.length > 0 && right.length > 0) {
		console.log('loop sta:', left[0], right[0])
		if(left[0] > right[0]) {
			result.push(right.shift())
		} else {
			result.push(left.shift())
		}
		console.log('loop res:', result)
	}
	console.log(left, right)

	// merge sorting is done, one of the lists might have leftovers
	// which can be merged to the end of the sorted result
	if(left.length > 0) {
		result = result.concat(left)
	}

	if(right.length > 0) {
		result = result.concat(right)
	}
	return result
}

function split(list) {
	var size = list.length,
		first = [],
		second = []

	// base case for recursion
	if(list.length === 1) {
		return list
	}

	while(list.length > 0) {
		if(list.length > size / 2) {
			first.push(list.shift())
		} else {
			second.push(list.shift())
		}
	}

	return merge([split(first), split(second)])
}

console.log(JSON.stringify(split([1,4,2,3,6]), null, 4))

//console.log(merge([[1, 2, 4], [3, 5, 6]]))


