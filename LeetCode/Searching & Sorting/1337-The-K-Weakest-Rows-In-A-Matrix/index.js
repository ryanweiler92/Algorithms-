/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    
    //variable to hold the parameter representing the rows array
    let army = mat
    
    //an empty array to push the count of soliders in each row
    let rowSoldiers = [];
    
    //loop through the array of rows
    for(let i = 0; i < army.length; i++){
        //tracking the number of soldiers (1's) in each row
        let count = 0;
        //loop through the individual rows and check if each index is a 1 and increase count
        for(let j = 0; j < army[i].length; j++){
            if(army[i][j] == 1){
                count ++
            }
        }
        //push the count of each row to the new array and reset the count
        rowSoldiers.push([count, i]);
        count = 0;
    }
    
    //we are going to sort the rowSoldiers array from smallest to largest count while preserving index
    //if count a is not the same as count b, we subtract count a minus count b
    //if this subtraction creates a positive number they switch places
    //if the counts are the same we subtract the index values?
    //we then slice from the beginning to the desired amount set by the k parameter
    //we then map each index to return just the indexes in order of smallest count
    return rowSoldiers
    .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    .slice(0, k)
    .map(item => item[1]);
};