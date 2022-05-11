/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    if(needle.length === 0) return 0;
    if(needle.length > haystack.length) return -1;
    
    let startIndex = 0;
    let compareIndex = 0;
    
    //the start index will represent our current index in the haystack string
    //the compareIndex will represent our curreint index in the needle string
    //we loop while the start index is less than the length of haystack string
    //and the compare index is less than the needle string
    while(startIndex < haystack.length && compareIndex < needle.length){
        //char 1 starts at 0 and if it finds a matchign letter in increases by the index of that letter
        let char1 = haystack[startIndex + compareIndex];
        //char 2 starts at 0 and increases by one each time a matching letter is found
        let char2 = needle[compareIndex];
        
        //if a letter from haystack matches needle we increase the compare index and continue from same start index
        if(char1 === char2){
            compareIndex++
        //if a letter does match we increment the start index and reset the compare index
        } else {
            startIndex++;
            compareIndex = 0;
        }
        
    }
    //if the compare index matches the needle length we return the startin index, otherwise -1
    return (compareIndex == needle.length) ? startIndex: -1
    
};