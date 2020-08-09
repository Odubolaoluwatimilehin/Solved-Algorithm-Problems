// Correct but not efficent- time complexity is o(n^2)

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let leftWeight = 0;
	let rightWeight, newDiff;
	let diff = 0
	let arraydiff = []

	for(let i =0; i < A.length-1; i++){    //loop through array
	  leftWeight+=A[i];
	  rightWeight = A.slice(i+1).reduce(reducer);
	  diff = Math.abs(rightWeight - leftWeight);
	  arraydiff.push(diff);
	}
	return (Math.min(...arraydiff));    //loop through array o(n^2)
}

