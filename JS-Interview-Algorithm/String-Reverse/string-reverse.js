//reverse a given string
function stringReverse(string){

    let reverseString = ''

    for(let i = string.length -1; i >=0; i--){
        reverseString+=string[i]
    }
    
    return reverseString
};

console.log(stringReverse("Great White Shark"))