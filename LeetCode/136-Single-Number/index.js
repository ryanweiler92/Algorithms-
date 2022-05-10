/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    //this set only accepts unique values
    const temp = new Set();
    
    //for each number in the nums array we push to the new set unless the set already has that unqiue value
    //if the set already has this value we delete the it from our set
    //ultimately the set will be left with the only element that has 1 unqiue value from the parameter
    for (let num of nums) {
        if (temp.has(num)) {
            temp.delete(num)
        } else {
            temp.add(num);
        }
    }

    // since Set() is not an array, we create an array based on the set and access the first index (should be the only value)
    return [...temp][0]
    
};