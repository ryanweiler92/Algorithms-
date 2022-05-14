//BINARY SEARCH


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let firstIndex = 0
    
    let lastIndex = nums.length -1;
    
    while (firstIndex <= lastIndex){
        
        let midIndex = Math.floor((lastIndex + firstIndex) / 2);
        
        if(nums[midIndex] == target){

        return midIndex;
            
        }else if (nums[midIndex] > target) {
            lastIndex = midIndex - 1 
        } else {
            firstIndex  = midIndex + 1
        }
    }
    
    return firstIndex
    
};