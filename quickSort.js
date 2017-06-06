/*
QUICK SORT
*** Description
Like merge sort, quick sort employs a divide and conquer strategy.
It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.
*** Exercises
- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity
- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)
*** Extra Credit
Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)
*/


function quickSort(list) {
	

	var swap = function swap(list, first, second) {
		var temp = list[first]
		list[first] = list[second]
		list[second] = temp
		return list 
	}

	var partition = function partition(list) {
		console.log("incoming list", list)
		var pivotPointer = list.length - 1
		var swapPointer = 0

		while(swapPointer <= pivotPointer - 1) {
			console.log("comparison", list[swapPointer],list[pivotPointer])
			if(list[swapPointer] > list[pivotPointer]) {

				list = swap(list, swapPointer, pivotPointer)
				pivotPointer -= 1
				list = swap(list, swapPointer, pivotPointer)
				if(list[swapPointer] < list[pivotPointer]) {
					console.log("increasing swapPointer")
					swapPointer += 1
				}
			} else {
				console.log("increasing swapPointer skip")
				swapPointer += 1
			}
		}
		console.log("partition done", list, swapPointer, pivotPointer)

		if(list.length < 3) {
			return list
		}
		

		return partition(
				list.slice(0, pivotPointer)
			)
			.concat(list[pivotPointer])
			.concat(
			partition(
				list.slice(pivotPointer + 1)
			)
		)
	}

	return partition(list)
}

console.log( "Quicksort:", quickSort([3,6,5,2,9,7,8,1,4]) )
