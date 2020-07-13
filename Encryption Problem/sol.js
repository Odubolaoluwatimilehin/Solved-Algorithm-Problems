

function encrypt(num){
   let number = Array.from(String(num), Number);
   let m = number.map(i =>(i+7)%10);
   let a = [m[0],m[1]];
   let b = [m[2], m[3]];
   let arr= [b , a ].flat();
   let arrToString = arr.join('');
   let result = parseInt(arrToString, 10);
 return result;
 
}

encrypt(3412);

