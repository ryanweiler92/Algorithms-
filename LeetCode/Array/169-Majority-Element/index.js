//this is a very slow solution but clearly shows steps to take using 2 loops

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    //our target number is the length of the nums array divided by 2
    //once we find a number that reaches this target we can stop the loop and return the number
    let targetNum = Math.ceil(nums.length / 2)
    
    //running count variable to count the instance of each element
    let count = 0
    
    //loop through the nums array and loop through again checking if the index of the first loop matches the second
    //if it does we add to the count and then check if the count exceed the target number
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j]){
                count++
                }
             if(count >= targetNum){
                    return nums[i]
            }
        }
        //reset the count after each outer loop completes
        count = 0;
    }
};



//another solution using an object

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement2 = function(nums) {
    
    //creating new object variable to store keys and values (count)
    let numsObj = {};
    
    //loop through the nums array and create a key if the num does not exist and increment its value by 1
    for(let i = 0; i < nums.length; i++){
        
        //if the key exists we increment it by 1, otherwise we set it to one
        numsObj[nums[i]] = numsObj[nums[i]] + 1 || 1;
        
        //if the value of the current key exceeds the length divided by 2 return that element
        if(numsObj[nums[i]] > nums.length / 2){
            return nums[i]
        }
    }
    
};


//basically same solution as above but slightly easier to read

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement3 = function(nums) {
    let count = {}; // mapping of element to it's frequency
    for(n of nums){
        count[n] ? count[n]++ : count[n] = 1;
        if(count[n] > nums.length / 2 )  return n;
    }
    return -1;
};

//solution suing the Boyer-Moore Voting Algorithm
//(https://dev.to/alisabaj/the-boyer-moore-majority-vote-algorithm-finding-the-majority-element-in-an-array-5dgb#:~:text=The%20Boyer%2DMoore%20Majority%20Vote%20Algorithm%20finds%20the%20majority%20element,a%20candidate%20and%20a%20counter.)

var majorityElement4 = function(nums) {
    
    // Boyer-Moore Voting Algorithm
    
    let count = 0, candidate = 0
    
    for (let num of nums) {
        if (count == 0) {
            candidate = num
        }
        count += num == candidate ? 1 : -1
    }
    
    return candidate
};