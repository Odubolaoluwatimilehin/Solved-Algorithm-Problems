

function solution(X, Y, D) {

 //slow solution : time complexity of O(Y-X) which is equal to O(N)
    // let count = 0;

    // while(X < Y){
    //     count++;
    //     X = X +  D;    
    // }
    // return count;
//fast solution: time complexity of 0(1)
// X + nD >= Y solvee for n 
    return  Math.ceil((Y-X)/D);

}


console.log(solution(1, 5, 2));