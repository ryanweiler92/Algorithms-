var canConstruct = function(ransomNote, magazine) {
    
    //create an array from the magazine parameter
    let magazineArray = magazine.split("");
    
    //loop through every character of the ransom note
    for (const char of ransomNote){
        
        //setting a variable to hold the index of the current loop value
        //an index of -1 is assigned if it does not exist
        const index = magazineArray.indexOf(char)
        
        
        //if the index is not -1 we remove that character from the array to continue looping 
        if (index >= 0){
            
            //splice removes a number of values with the index as the starting position and 1 as the amount
            magazineArray.splice(index, 1)
        } else {
            return false
        }
    }
    return true
};