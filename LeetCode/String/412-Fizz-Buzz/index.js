//my answer

var fizzBuzz = function(n) {
    
    //empty array to store the values we will return
    let stringArray = []
    
    //running count to push to the array when not divisible by 3 or 5
    let count = 1
    
    
    //loop through the count until it is equal to n 
    for(let i = count; i <= n; i++){
        if(count % 3 === 0 && count % 5 === 0){
           stringArray.push("FizzBuzz")
           count++
        } else if(count % 3 === 0){
           stringArray.push("Fizz")
            count++
        } else if(count % 5 === 0){
            stringArray.push("Buzz")
            count++
        } else{
             stringArray.push(`${count}`)
             count++
        }
    }
    return stringArray
};

// clever answer
var fizzBuzz = function(n) {

    //we are creating a new array with the n parameter which is an integer
    //calling new Array (n) where n = 3 creates an empty array that has 3 index positions 
    // the fill method would make 3 look like [0, 0, 0]
    // we map over our array of [0, 0, 0] where a = the elment and i the index
    //for each index of the array we increment i by 1 and check if it is divisible by 3 or 5
    //this is O(n)
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};