

var nthFibonacci = function(n) {  
	if (nthFibonacci.memo[n]) {
		return nthFibonacci.memo[n];
	}
	for (var i = 2; i <= n; i++) {
		nthFibonacci.memo[i] = nthFibonacci.memo[i - 1] + nthFibonacci.memo[i - 2];
	}

	
	return nthFibonacci.memo[n];
};
nthFibonacci.memo = [0,1]

// var bubbleSort = function(array) {
//   // loop to go througth array start from length - 1 until 0
// 	for (var i = array.length - 1; i >= 0; i--) {
// 	  // loop to go through array again and comapre each elem with next elem
// 		for (var j = 0; j < i ; j++) {
// 			   if(array[j] > array[j + 1]){
//           // do swap
// 			   	var temp = array[j];
// 			   	array[j] = array[j + 1];
// 			   	array[j + 1] = temp;
// 			   }
// 		}
// 	}
// 	return array;

// };


// console.log(bubbleSort([20, -10, -10, 2, 4, 299]));
// console.log(bubbleSort( [2, 2, 2, 2, 2, 22, 2, 2, 222, 2222, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22]));
// console.log(bubbleSort([18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36]));
