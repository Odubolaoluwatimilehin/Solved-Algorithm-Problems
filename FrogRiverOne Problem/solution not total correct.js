function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)

 let posSet = [...new Set(A)];
    for (let i = 1; i <= X; i++){
	if (posSet.indexOf(i) == -1){
		return posSet.indexOf(i);
	}
    }
    let time = A.indexOf(X);
    return time;
  
}

