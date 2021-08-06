
function firstUniqueChar(string) {
   let array = [...string];
   let setofArray = [...new Set(string)];
   let occurence = [];
  for(let i = 0; i <  setofArray.length; i ++){ 
     let count = getOccurrence(array, setofArray[i]);
      occurence.push(count);
}
   function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
   }

  let find = occurence.findIndex(element => element == 1);
  return  console.log(setofArray[find]);
}


firstUniqueChar("tracecarste")
