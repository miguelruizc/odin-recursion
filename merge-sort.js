// pseudo code
// -sort the left half of the array (assuming n > 1)
// -sort the right haft of the array (assuming n > 1)
// merge the two halves together

function mergeSort(array) {
	// Base case (1 element array)
	if (array.length === 1) {
		return array;
	}

	// Rercursive case (more than 1 element -> split, mergeSort)
	if (array.length > 1) {
		//SPLIT IN HALF
		let midPoint = array.length / 2;
		let left = array.slice(0, midPoint);
		let right = array.slice(midPoint, array.length);

		// SORT LEFT
		left = mergeSort(left);

		// SORT RIGHT
		right = mergeSort(right);

		// MERGE
		let merged = [];

		let indexL = 0;
		let indexR = 0;
		let isMerged = false;

		//Compare left elements to right elements
		while (!isMerged) {
			// If equal:
			if (left[indexL] === right[indexR]) {
				merged.push(left[indexL]);
				merged.push(right[indexR]);
				indexL++;
				indexR++;
			}
			// If left smaller (or alone)
			else if (
				left[indexL] < right[indexR] ||
				right[indexR] === undefined
			) {
				merged.push(left[indexL]);
				indexL++;
			}
			// If right smaller (or alone)
			else if (
				right[indexR] < left[indexL] ||
				left[indexL] === undefined
			) {
				merged.push(right[indexR]);
				indexR++;
			}

			// Check if merge is complete
			if (left[indexL] === undefined && right[indexR] === undefined)
				isMerged = true;
		}

		// Return sorted array
		return merged;
	}
}

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
