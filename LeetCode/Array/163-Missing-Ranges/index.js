/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
 var findMissingRanges = function(nums, lower, upper) {
    
    const result = [];
    
    nums = [lower - 1, ...nums, upper + 1];
    
    for (let i = 1; i < nums.length; i++){
        const difference = nums[i] - nums[i - 1];
        
        if (difference === 2){
            result.push(`${nums[i -1] + 1 }`);
        } else if (difference > 2) {
            result.push(`${nums[i - 1] + 1}->${nums[i] -1}`);
        }
    }
    return result
};