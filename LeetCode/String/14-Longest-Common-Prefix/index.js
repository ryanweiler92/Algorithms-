//helpful link for understanding this solution (https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca)

var longestCommonPrefix = function(strs) {
    
    //variable to hold the common prefix
    let prefix = ""
    
    //loop through JUST the first word of the parameter array
    for(let i = 0; i < strs[0].length; i++){
        
        //variable declaring letter as the first word and the letter of the corresponding index from loop
        const letter = strs[0][i]
        
        //inner loop to loop through the remaining words in the parameter array starting at index 1
        for(let j = 1; j < strs.length; j++){

            //if the current letter of current word of the inner loop does not match the current letter of 
            // the letter variable from the outter loop, we return the prefix in its current form
            if(strs[j][i] !== letter) return prefix
        }
        //if the loop passes the first condition we add the current letter to the prefix
        prefix= prefix + letter
    }
    return prefix
};


//an example from another user. User to see how we loop through the first word while checking each letter of the remaining words at the same time

var longestCommonPrefix2 = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0];
};