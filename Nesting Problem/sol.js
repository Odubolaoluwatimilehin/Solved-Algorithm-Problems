

function solution(S){
    let data = S.split("");
    let stack = [];

    for(let i = 0 ; i < data.length; i++){
     if( data[i] == "("){
        stack.push(data[i]);
    }else if( data[i] == ")"  && stack.length == 0){
       stack.push(data[i]);
    }else {
       stack.pop();

      }
    }
    return stack.length  == 0 ? 1 : 0;
}

