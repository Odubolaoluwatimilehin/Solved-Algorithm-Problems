

function solution(N) {
   
    let number = N.toString(2);

    let gap = 0; let count = 0;

    for( var i = 0 ; i < number.length ; i++){
        if(number[i] == 0){
            count++;
        }
        if(number[i] == 1){
            if(gap < count){
                gap = count;
                count = 0;
            } else {
                gap = gap;
                count = 0;
            }
        }
       
    }
    return gap;
}


