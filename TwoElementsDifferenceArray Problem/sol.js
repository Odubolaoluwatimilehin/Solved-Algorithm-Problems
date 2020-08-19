
function solution(A){

  let sol = A.sort((a,b) => a-b);
   let final = sol.slice(1).map((item,index) =>{
     return  item-sol[index]
});
  return final.includes(1);

}





console.log(solution([5,5,5]));
