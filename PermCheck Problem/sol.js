
function solution(A){

     let array = A.sort(function(a, b){return a-b});
     for(let i=0, j = 1; i< array.length;i++){
	if(j == array[i]){
            j++;
        }else{
          return 0;
      }
   }
     return 1;

}


