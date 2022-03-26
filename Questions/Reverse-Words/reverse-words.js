//reverse words in a sentence without reversing the entire sentence 
function reverseWords(string){

    let newString = string.split(" ")
    console.log(newString)
    let reverseString = [];

    for (const word of newString){
            reverseString.push(" ")
        for(i = word.length-1; i >=0; i--){
            reverseString.push(word[i])
        }
    }
    return reverseString.join(" ")
}
console.log(reverseWords("This is a boring sentence"))