// Iterative solution
function fibs(n) {
	// function which takes a number and returns an array containing that many numbers
	// from the Fibonacci sequence. Using an example input of 8, this function
	// should return the array [0, 1, 1, 2, 3, 5, 8, 13].
	let array = new Array();

	let a = 0;
	array.push(a);
	if (n === 0) return array;

	let b = 1;
	array.push(b);
	if (n === 1) return array;

	for (let i = 2; i < n; i++) {
		let c = a + b;

		array.push(c);

		a = b;
		b = c;
	}

	return array;
}

// Recursive solution
function fibsR(n, array) {
	// function which takes a number and returns an array containing that many numbers
	// from the Fibonacci sequence. Using an example input of 8, this function
	// should return the array [0, 1, 1, 2, 3, 5, 8, 13].
	if (n === 1) {
		if(array.length < 2) array.unshift(0);
		return 0;
	}

	if (n === 2) {
		if(array.length < 2) array.push(1);
		return 1;
	}

	let nthFib = fibsR(n - 1, array) + fibsR(n - 2, array);
	if(array.length < n) array.push(nthFib);

	return nthFib;
}

let array = [];
console.log(fibsR(55, array));
console.table(array);