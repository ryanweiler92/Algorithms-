/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    //variable which represents the length of the parameter array
    let len = nums.length;
    
    //if the target is either less than the first value or more than the last value this if statement 
    //will return the first or last index
    if(nums[0] >= target){
        return 0
    } else if (nums[len -1] < target){
        return len 
    }
    
    //loop through the array to find which two index the target bnelongs between and return
    //the lower index + 1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target && nums[i+1] >= target){
            return [i+1]
        }
    }
};