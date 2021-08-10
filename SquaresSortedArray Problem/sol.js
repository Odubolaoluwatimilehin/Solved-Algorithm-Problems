var sortedSquares = function(nums) {
    
    let squared = nums.map(num => num * num);
    
    return squared.sort((a,b) => a -b );
};
