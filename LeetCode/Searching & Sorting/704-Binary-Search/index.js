//awesome explanation of binary search solution that accounts for fringe cases (https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    // ex. [-1, 0, 3, 5, 9, 12] 
    
    //these variables assign INDEX POSITIONS. firstNum will always equal position 0 (ex. -1)
    let firstIndex = 0
    
    //last index in the array (ex. 5)
    let lastIndex = nums.length -1
    
    while (firstIndex < lastIndex){
        
        //assigning middle index of the array
        //(first loop ex.) 0 + (5 - 1) == 4 / 2 == 2 (nums[2] == 3)
        let midIndex = firstIndex + Math.floor((lastIndex - firstIndex + 1) / 2);
        
        // if the target number is less than the element at positon of mid index 
        //we set the last index to the middle index -1 to cut the array in half and search left side
        //first loop does not pass this if statement 9 > 3
        if(target < nums[midIndex]){
            lastIndex = midIndex - 1
            
        // else we set the first index as the middle index to search the right side
        // first loop ex. firstIndex == 3
        } else {
            firstIndex = midIndex
        }
    }
    
    //we stop the loop when lastIndex = firstIndex (1 element left)
    // if the first index position of nums is equal to the target number we return first index
    // else the target number does not exist in the nums array so we return -1;
    return nums[firstIndex] == target ? firstIndex: -1;
};