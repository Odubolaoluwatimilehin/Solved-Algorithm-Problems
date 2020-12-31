
function solution(N) {
   
   let smallestNumber = 0;
   let numberofDigits = N.toString();
   if( N <=1 || numberofDigits == 1){
    return smallestNumber;
    }
    smallestNumber =  numberofDigits.length;
    return Math.pow(10 , smallestNumber -1);

}


