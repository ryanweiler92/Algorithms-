/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    
    //loop through the digits array backwards
    for(let i = digits.length -1; i >= 0; i--){
        
        //increment the current digit by 1
        digits[i]++
        
        //if the increment made the digit higher than 9 we then make that digit 0
        //because we can only have single digit numbers
        //we then return to the loop and the next index and increment and perform the same check
        if(digits[i] > 9){
            digits[i] = 0
            
        //we reach the else statement when there are no digits greater than 9 after being incremented
        } else {
            return digits
        }
    }
    
    //we reach this point if every index of the array was 9 and we need to add a 1 to the beginning of the array
    // since all of the 9's have been changed to 0
    digits.unshift(1)
    return digits
};