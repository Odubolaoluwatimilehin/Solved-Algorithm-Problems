

function solution(s){
	let uarr = new Set()
	let larr = new Set()
	let total = []
	   let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s', 't','u','v','w','x','y','z'];
	 

	let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M', 'N','O','P','Q','R','S', 'T','U','V','W','X','Y','Z'];

   let arr = [...s];

   for(let i = 0; i < arr.length; i++){

     if(arr[i] == arr[i].toUpperCase()){
    
	uarr.add(uppercase.indexOf(arr[i]));
       
	}
	
      if(arr[i] == arr[i].toLowerCase()){

	larr.add(lowercase.indexOf(arr[i]));
	}   
   }
   total= [...uarr,...larr];
  sorttotal= total.sort(function(a, b){return a-b});

    console.log(sorttotal)

     for(let i = sorttotal.length-1; i >= 0; i--){
      if(sorttotal.indexOf(sorttotal[i]) !== i){
       return   uppercase[sorttotal[i]]
	}
	
    }
   return "NO"; 
 
}


