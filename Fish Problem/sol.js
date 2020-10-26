

function solution(A, B) {
    let upstream = [];
    let downstream = [];
    
   for(let i = 0; i < A.length; i++) {
     if(B[i] == 0){
     while (B[i] == 0 && downstream.length != 0){
         var item = downstream.pop() 
                if (item > A[i]) {
                    downstream.push(item)
                    break
                }        
    	  }
	if(downstream.length == 0){
	   upstream.push(A[i])
	}   
   }else {
     downstream.push(A[i])
      }
  }
    return upstream.length + downstream.length;
}


