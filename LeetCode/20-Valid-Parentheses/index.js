//this is a very simple answer utilizing a stack 
//helpful link to understanding solution (https://javascript.plainenglish.io/javascript-algorithms-valid-parentheses-leetcode-71c5b2f61077)

var isValid = function(s) {
    
    //empty array to be used as the stack to push and pop 
    const stack = [];
    
    //loop through the parameter array
    for(let i = 0; i < s.length; i++){
        
         //this variable represents the end of the stack
        //this is utilizing the first in last out cycle
         const top = stack[stack.length - 1];
        
        //if the current index is an opening parentheses we push it to the stack
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
            
        //if it is a class parentheses and the end of the stack is its corresponding parentheses we remove
        //the last index of the stack
        //if the end of the stack does not represent the correct closing parentheses it is invalid
        } else if (s[i] === ')' && top === '(' && stack.length !== 0){
            stack.pop();
        } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
          stack.pop();
        } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
          stack.pop();
        } else {
          return false;
        }
    }
    
    //this returns true if we have popped each parentheses we pushed to the stack
    return stack.length === 0;
};