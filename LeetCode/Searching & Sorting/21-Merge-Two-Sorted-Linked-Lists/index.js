// website for better explaination of the solution (https://coderbyte.com/algorithm/merge-two-sorted-linked-lists#:~:text=(1)%20Create%20a%20new%20head,end%20of%20a%20linked%20list.)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    //create new linked list pointer
    let list3 = new ListNode(null, null);
    let prev = list3;
    
    //while both linked lists are not empty
    while (list1 !== null && list2 !== null) {
        
        //if the next list 1 value is less than or equal to the next list 2 value we set the 
        //next prev list value as the list 1 value and queue the next value in list 1
        if(list1.val <= list2.val){
            prev.next = list1;
            list1 = list1.next
            
        //same logic if list 2 value is less than list 1
        } else {
            prev.next = list2;
            list2 = list2.next
        }
        //queue the next value for the prev list
        prev = prev.next
    }
    
    //once we reach end of a linked list, append the other
    //list becuase we know it is already sorted
    if (list1 === null) { prev.next = list2; }
    if (list2 === null) { prev.next = list1; }
    
    //return the sorted linked list
    return list3.next
    
};