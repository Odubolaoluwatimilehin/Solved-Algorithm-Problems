

function solution(S) {
     if(S == undefined)return 1;
     let data = S.split("");
     let stack = [];
     
     for(let i = 0; i < data.length ; i++){
      if(data[i] == "(" || data[i] == "{" || data[i] == "["){
	  stack.push(data[i])
	}
     else if(data[i] == ")" && stack[stack.length-1] == "("){
      stack.pop()
      } 
     else if(data[i] == "}" && stack[stack.length-1] == "{" ){
      stack.pop()
      } 
      else if(data[i] == "]" && stack[stack.length-1] == "["){
      stack.pop()
      }
      else {
       stack.push(data[i])
     }
    
    }
   return stack.length == 0 ? 1 : 0;
}




