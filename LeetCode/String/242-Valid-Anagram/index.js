/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    //if the strings have different lengths they cannot be an anagram
    if (s.length !== t.length) return false

    //create new map object
    const map = {};
    
    //for every letter of s we create an entry in the object if it does not exist or simply add 1 if it does
    for(let letter of s){
        map[letter] = (map[letter] || 0) + 1;
    };
    
    //for every letter of t we check if that letter exist in the map object, if it does we decrement it by 1
    for (let letter of t){
        if (!map[letter]) return false;
        map[letter]--;
    }
    return true
};