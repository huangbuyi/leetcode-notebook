/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var curr = head, p = null
    
    while (curr) {
        if (curr.val === val) {
            if (p) {
                p.next = curr.next
            } else {
                head = curr.next
            }
        } else {
            p = curr
        }
        curr = curr.next
    }
    
    return head
};