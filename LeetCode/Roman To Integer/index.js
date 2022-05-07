var romanToInt = function(s) {
    
    //create key/value pair object to house the hard coded values for roman numerals
    const romanNums = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    //split the parameter into an array 
    let split = s.split("")
    
    //keep a running total to return
    let total = 0;
    
    //run through the array and create conditions on whether to add or subtract
    split.map((character, i) => {
        
        //variable to house current value. We use the object and array index because we assume the parameter is valid
        let currentValue = romanNums[split[i]];
    
        //variable that tells us if we are at the end of the array?
        let nextValue = split[i + 1] ? romanNums[split[i+1]] : 0;
        
        //conditional if statements which tells our function to subtract the current value if it less than the next value
        //or add the value if it is greater
        if(currentValue < nextValue){
            total -= currentValue
        } else {
            total += currentValue
        }
    });
    return total;
};