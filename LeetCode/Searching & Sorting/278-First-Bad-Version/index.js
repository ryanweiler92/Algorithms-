//BINARY SEARCH


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let firstNum = 1;
        
        let lastNum = n;
        
        while (firstNum < lastNum){
            
            //if n = 5 midNum = 3 ex... 1 + (5 - 1) / 2 PEMDAS 1 + (4) / 2 == 1 + 2 == 3
            let midNum = Math.floor(firstNum + (lastNum - firstNum) / 2);
            
            //if the bad version is the midNum we set the lastNum as midNum
            if(isBadVersion(midNum)){
                lastNum = midNum 
            } else {
    
                firstNum = midNum +1;
            }
        }
        return firstNum
    };
};