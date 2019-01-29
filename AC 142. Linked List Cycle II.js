/* 
这题除了解题思路，最重要的理解证明，如果不能证明算法的正确性，就不舒服。
设定两个指针，slow 和 fast，slow 一次遍历一个节点，fast 一次遍历两个节点。
算法第一步是找出相遇位置：
设 slow 走了 k，fast 就走了 2k，两指针相遇时：
2k - k = nr
r为循环的长度。
k = nr
设头部到循环起点的距离为a，循环起点到相遇点的距离为b
第二步，找出循环开始的位置：
一个指针从头部开始遍历，另一个指针从相遇点开始遍历，假设要移动 x 步
k + x - nr = x - a
待续
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head) {
      return null
  }
  var slow = head
  var fast = head.next
  
  while (slow !== fast) {
      if (!fast || !fast.next) {
          return null
      }
      slow = slow.next
      fast = fast.next.next
  }
  
  fast = head
  slow = slow.next
  while (slow !== fast) {
      slow = slow.next
      fast = fast.next
  }
  
  return slow
};