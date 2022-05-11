//solution with map object
// we are looking for any two matching numbers in the array that have a index distance of less than k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    
    //creating new map object
    let map = new Map();
    
    //loop through the nums array 
    //if the curent index minus the index of the next instance of the element is less than k return true
    //otherwise set the element to the map object with its current index
    for(let i = 0; i < nums.length; i++){
        if ([i] -  map.get(nums[i]) <= k){
            return true;
        }
        map.set(nums[i], i)
    }
        
        return false;
    }
    