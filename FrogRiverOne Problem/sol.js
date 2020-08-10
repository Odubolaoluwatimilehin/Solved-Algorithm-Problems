function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let posSet = new Set();
    for(i=0;i<A.length;i++) {
        posSet.add(A[i]);
     if(posSet.size == X)return i;   
    }

    return -1;
}


