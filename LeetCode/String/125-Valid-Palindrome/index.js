/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    //remove all non alphanumeric characters using regex and set to lowercase
    const replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    //set the previous variable to an array, reverse it and join it back as a string without spaces
    const reversed = replaced.split("").reverse().join("")
    
    if(reversed === replaced){
        return true
    } else {
        return false
    }
};