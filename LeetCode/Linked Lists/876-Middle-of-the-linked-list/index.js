/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    
    //setting 2 variables fast & slow, that both equal the parameter
    let fast = slow = head;
    
    //while fast && and fast.next both equal true 
    //meaning that the fast variable and the next value to the fast variable are true
    while(fast && fast.next){
        
        //fast is iterating by an index of 2 for each loop
        fast = fast.next.next;
        
        //slow is iterating by an index of 1 for each loop
        slow = slow.next
    }
    
    //when fast reaches the end of the loop we return the slow variable
    return slow;
};