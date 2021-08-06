

function reverseSentence(sentence) {
 let mod = [];
 let arr = sentence.split(" ")
  
 for(let i =0 ; i < arr.length; i++){
   let element = arr[i].split("").reverse().join("");
   mod.push(element);
  
} 
   console.log( mod.join(" "));
  
   
}


reverseSentence("Hello world we to ")
