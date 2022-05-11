//my solution; not very fast

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    //run a loop through the nums array from the parameter
    for(let i = 0; i <= nums.length; i++){
        //run a second loop starting from the next index of i and tell the loop to traverse the length -1
        for(let j = i+1; j <= nums.length-1; j++){
            //if any of these numbers add to meet the target, return the indices 
            if(nums[i] + nums[j] === target){
                return([i, j])
            }
        }
    } 
};


//a solution from another user using a two-pass hash table

/**
Two-pass Hash Table

eg. nums = [3,5,9,12,15], target = 21

const hashTable = {
	3: 0,
	5: 1,
	9: 2,
	12: 3,
	15: 4
}

1. Create a hashTable
2. Iterate nums
	2.1 Find the complement of nums[i] in the hashTable by checking the key of the hashTable object. In this way, the iteration time will be significantly reduced. If found, return [i, found]
3. If not found, return [0,0]

*/
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    const len = nums.length;
    let hashTable = {};
	for(let i = 0; i < len; i++){
		// Add a new obj to the hashTable where key = nums[i] and value = i
		hashTable[nums[i]] = i;
	}
	
    for(let i = 0; i < len; i++) {
        let complement = target - nums[i];
        let found = hashTable[complement]; // Determine whether the complement exist in the hashTable
        if(found !== undefined && found != i) return [i, found];
	}
	return [0,0];
}