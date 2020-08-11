

function solution(N, A){
 let counterArray = [];
  for( i = 0 ; i < N ; i++){
	counterArray.push(0);	 
}
  for( k = 0 ; k < A.length; k++){
	if(A[k] <= N){
	counterArray[A[k]-1] += 1;
       } else {

	let maxCounter = Math.max(...counterArray);  		  for( i = 0 ; i < N ; i++){
		counterArray[i]= maxCounter;	 
	}

}


}
return counterArray;

}

