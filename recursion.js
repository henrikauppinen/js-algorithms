//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

// function exponent(base, expo) {
// 	var exponent = base
// 	while(expo > 1) {
// 		exponent *= base
// 		expo -= 1
// 	}
// 	return exponent
// }

// console.log(exponent(2,3))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(base, expo) {
	var exponent = base

	function recursive(base, expo) {
		console.log(base, expo)
		if(expo === 1) {
		return exponent
		} else {
			exponent *= base
			return recursive(base, expo - 1)
		}	
	}
	return recursive(base, expo)
	
}

// console.log(recursiveExponent(2, 3))

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
	return arr.map(row => row * num)
}

// console.log(recursiveMultiplier([1,2,3], 5))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
	var reversed = []

	// for(var i = 1; i <= arr.length; i++) {
	// 	reversed.push(arr[arr.length - i])
	// }

	function recursive(arr) {
		if(arr.length === 0) {
			return reversed
		} else {
			reversed.push(arr.pop())
			return recursive(arr)
		}
	}

	return recursive(arr)
}

// console.log( recursiveReverse([1,2,3]) )

function factorial(n) {
	if(n === 1) {
		return n
	} else {
		return n * factorial(n - 1)
	}
}

// console.log(factorial(5))

function gcd(a, b) {
	
}

console.log("should be 4: " + gcd(8, 12) )
