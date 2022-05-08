//this solution is for LINKED LISTS, the parameter is a LINKED LIST, not an array, hence why we need to use .next & .val

var isPalindrome = function(head) {
    
    //an array representing the parameter passed into the function
    let forwards = head
    
    //an empty array to push our array 
    let myArray = []
    
    //while the forwards array doesn't equal null  !!we are doing this becuase the parameter is not iterable
    while (forwards !== null){

        //we push the value of the forwards array to the new array
        myArray.push(forwards.val)
        
        //telling the loop to grab the next value from the linked list
        forwards = forwards.next
    }
    
    //loop through the parameter array until it equals null
    while (head !== null){
        
        //if the last index of the new array does not equal the first value of the parameter array return false
        if (myArray.pop() !== head.val){
            return false
            
            //else we tell the loop to go to the next value on the linked list
        } else {
            head = head.next
        }
    }
    //all of the index of each array matched so we return true
    return true
};