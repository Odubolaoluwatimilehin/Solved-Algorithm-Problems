



function solution(A, K) {

    let shift; let fin ;
    if (A.length > 0){
        for(let i = 0; i < K ; i++ ){
            shift = A.pop();
            fin = A.unshift(shift);
   
       }
    }
   
    return A;




}

