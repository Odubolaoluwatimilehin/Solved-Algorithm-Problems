function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let i = 1;
	let leftWeight = A[i-1];
	let rightWeight = A.slice(i).reduce(reducer);
	let diff = Math.abs(leftWeight - rightWeight);


	for(i; i < A.length-1; i++){
	   leftWeight += A[i];
	   rightWeight -= A[i];
	   minDiff = Math.abs(leftWeight - rightWeight);

	   if(minDiff < diff){
	     diff = minDiff
	    }	
	}
	return diff;
}



