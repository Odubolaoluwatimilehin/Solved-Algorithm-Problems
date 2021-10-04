

function swap(s, a){
    let holdingArray = [];
     for(let j = 0, start = 0, end = a[j];  j < a.length; j++){
       r =  s.slice(start, end);
       holdingArray.push(r);
        start += a[j];
        end = start + a[j+1];
     }
        //return holdingArray;
     for(let i = 0; i < holdingArray.length; i++ ){
        if(holdingArray[i+1] == undefined) break;
         temp = holdingArray[i + 1];
         holdingArray[i + 1] = holdingArray[i];
         holdingArray[i]= temp;
         i++;
          
     }
     
     result = holdingArray.join('')
     
     return result;
  
  }
  
  
  
  
  console.log(swap('descognail',  [3,2,3,1,1]))