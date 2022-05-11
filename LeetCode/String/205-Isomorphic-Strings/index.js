/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    //creating new map object
    let map = new Map();
    
    //loop through the s string
    //if the current letter of s string is not already in the map object we insert it into the map object with the value
    //of the current index of the t string
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i], t[i])
        
        //otherwise we look to see if the key's (index of s string) value (index of t string that was paired)
        //matches the value of the current index of t
        }else{
            if (map.get(s[i]) != t[i]){
                return false
            }
        }
    }
    return new Set([...map.values()]).size == map.size  
};