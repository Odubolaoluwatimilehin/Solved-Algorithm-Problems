

function solution(N, A){
 
 let lastMaxCounter = 0; // save the last max counter is applied to all counters
  let counterArray = []; // counters result
  // init values by 0
  for (let i = 0; i < N; i++) {
    counterArray[i] = 0
  }
 let currentMaxCounter = 0; // save the current max counter each time any counter is increased
  let maxApplied = false;
  for (k = 0 ; k < A.length; k++) {
    if (A[k] <= N) {
      if (maxApplied && counterArray[A[k] - 1] < lastMaxCounter) {
        counterArray[A[k] - 1] = lastMaxCounter;
      }
      counterArray[A[k] - 1] = counterArray[A[k] - 1] + 1;
      if (currentMaxCounter < counterArray[A[k] - 1]) {
        currentMaxCounter = counterArray[A[k] - 1];
      }
    } else if (A[k] === N + 1) {
      maxApplied = true;
      lastMaxCounter = currentMaxCounter;
    }
  }
  // apply the lastMaxCounter to all counters
  for (let k = 0; k < counterArray.length; k++) {
    counterArray[k] = counterArray[k] < lastMaxCounter ? lastMaxCounter : counterArray[k];
  }
 
  return counterArray;

}





console.log(solution(5, [3,4,4,6,1,4,4]));
