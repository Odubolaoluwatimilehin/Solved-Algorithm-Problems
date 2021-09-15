

//Solution A
var validMountainArray = function(arr) {
    
};


//Solution B 
var validMountainArray = function(arr) {
    
    if (arr.length < 3) return false;
    let apex;
    for(let i = 0, j = i + 1; i < arr.length; i++,j++){
        
        if(arr[i] == arr[j]){
            return false;
        }
        
        if ( arr[i] > arr[j]){
            apex = i;
            break;
        }
    }
    for(let i = apex, j = i + 1; i < arr.length; i++,j++ ){
        if(arr[i] == arr[j]){
            return false;
        }
        if(arr[i] < arr[j]){
            return false;
        }
       
    }
     if(!apex) return false;
     return true;
};