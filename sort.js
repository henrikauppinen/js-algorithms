// insertion sort

var insertionSort = function(list) {

	for(var origPointer = 1; origPointer < list.length; origPointer++) {
		console.log(list[origPointer])
		for(var k = 0; k < origPointer; k++) {
			if(list[k] > list[origPointer]) {
				var temp = list[origPointer]
				list[origPointer] = list[k]
				list[k] = temp
			}			
		}
	}
	return list
}

console.log("should be [1,2,5,6,8]: " +
	insertionSort(
		[88, 1,6,8,2,5,99]
	)
)


// [1,3,2]

// 1
// 3

// 1 < 3
