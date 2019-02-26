/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var a1 = [], a2 = [], n1 = l1, n2 = l2
  while (n1) {
    a1.push(n1.val)
    n1 = n1.next
  }
  while (n2) {
    a2.push(n2.val)
    n2 = n2.next
  }

  var c = 0, lastNode = null, head = null
  while (a1.length > 0 || a2.length > 0) {
    var v1 = a1.pop() || 0
    var v2 = a2.pop() || 0
    var v = v1 + v2 + c
    c = Math.floor(v / 10)
    var node = new ListNode(v % 10)
    node.next = lastNode
    lastNode = node
  }

  if (c > 0) {
    head = new ListNode(c)
    head.next = lastNode
  } else {
    head = lastNode
  }
  return head
};