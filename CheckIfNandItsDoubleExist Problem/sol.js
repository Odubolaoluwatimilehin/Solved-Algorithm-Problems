

//Solution A(less space use, N2 complexity)
var checkIfExist = function(arr) {
    
    for(let i = 0; i <= arr.length ; i++){
        for(let j = i +1; j <= arr.length; j++){
            if(arr[i] == arr[j] * 2  || arr[j] == arr[i] * 2){
                return true;
            }
        } 
    }
    return false
    
};


//Solution B (more spaced used, N2 complexity)
var checkIfExist = function(arr) {
    let hashTable = arr.map(element => element *2);  
    for(let i = 0; i <= arr.length ; i++){
        for(let j = 0; j <= hashTable.length; j++){
            if(arr[i] == hashTable[j] && i !== j){
            
                return true;
            }
        }
     
    }
    return false
    
};