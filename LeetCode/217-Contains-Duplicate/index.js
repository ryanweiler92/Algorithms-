//good solution using object 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    //object to hold nums array key and value pairs
    let map = {};
    
    //for of loop through nums array
    //if the current num exists in the object increment by 1, else set as 1
    //if any number has a value of 2 return true
    //if we make it through the whole loop without an element hitting 2, return false
    for (num of nums){
        
        map[num] ? map[num]++ : map[num] = 1
        
        if(map[num] == 2) return true
    }
    return false
};