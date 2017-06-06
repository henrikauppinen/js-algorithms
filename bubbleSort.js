/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/

// O(n2) linear
function bubbleSort(list) {
	
	function isSorted(list) {
		for(var i = 1; i < list.length; i++) {
			if (list[i - 1] > list[i]) {
				return false
			}
		}
		return true
	}

	function sort(list) {
		var notReady = false

		for(var i = 1; i < list.length; i++) {
			console.log(list[i - 1], list[i])

			if(list[i - 1] > list[i]) {
				var temp = list[i - 1]
				list[i - 1] = list[i]
				list[i] = temp
				notReady = true
				if(isSorted(list)) return list
			}
			console.log(list)
		}

		if(notReady) {
			return sort(list)
		} else {
			return list
		}
	}

	return sort(list)
}

function coctailSort(list) {
	

	function sort(list) {
		var done = true
		for(var i = 1; i < list.length; i++) {
			console.log(list[i-1], list[i])
			console.log(list)
			
			if(list[i - 1] > list[i]) {
				var temp = list[i - 1]
				list[i - 1] = list[i]
				list[i] = temp
				done = false
			}
		}		
		if(done) {
			return list
		} else {
			return sort(list)
		}
	}

	return sort(list)
}

// console.log(bubbleSort([3,5,4,1]))
console.log(coctailSort([3,5,9,1,6,4,7]))
