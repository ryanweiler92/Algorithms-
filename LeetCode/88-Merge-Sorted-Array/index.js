/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    //to start we remove all of the 0's at the end of the num1 array
    //we start the splice at the index of m in the num array
    //our delete count is the length of the nums1 array minus the m count
    nums1.splice(m, nums1.length - m)
    
    //running counts for each array to stop at each length in the following loop
    let i = 0;
    let j = 0;
    
    //we loop until j is greater than the length of nums2 array
    while(j < nums2.length){
        
        //if the current index of nums1 array doesn't exist
        //or if the current index of nums1 array is greater than the current index of nums2 array
        //we insert the nums2 index value at the position of current nums1 index
        // deleting 0 items
        // we increment both the j & i count to move the index forward
        if(nums1[i] === undefined || nums1[i] > nums2[j]){
            nums1.splice(i, 0, nums2[j]);
            j++
            i++
            
        //we get to the else statement if the current index of nums2[j] is less than the current index of nums1[i]
        //we only increment the index
        } else {
            i++    
        }
    }
};