/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    //split the array into words and extra white spaces
    let words = s.split(" ")
    
    //loop through new words array starting form the end
    //if the 'word' is just a white space we continue loop, otherwise we return the length of that word
    for (let i = words.length -1; i >= 0; i--){    
        if (words[i] !== ""){
            return words[i].length
        }
    }
};