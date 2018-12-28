/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
      return null
  }
  var lengthA = 0, lengthB = 0, nodeA = headA, nodeB = headB
  while (nodeA) {
      lengthA++
      nodeA = nodeA.next
  }
  while (nodeB) {
      lengthB++
      nodeB = nodeB.next
  }
  if (lengthB > lengthA) {
      nodeA = headB
      nodeB = headA
  } else {
      nodeA = headA
      nodeB = headB
  }
  for (var i = 0; i < Math.abs(lengthA - lengthB); i++) {
      nodeA = nodeA.next
  }
  while (nodeA) {
      if (nodeA === nodeB) {
          return nodeA
      } else {
          nodeA = nodeA.next
          nodeB = nodeB.next
      }
  }
  return null
};

/* 
解题思路：两条链相交部分是一一对应，因此分两步来找到相交的节点：第一步，计算两条链长度差；第二步，让长链先迭代长度差个节点，然后两条链一起迭代，找出相交节点（地址相同的节点）。
*/