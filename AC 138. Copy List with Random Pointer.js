/* 
碰到不能 Run Code 的题就很虚。
思路是：第一次遍历复制链表，用 map 保存复制节点和原节点的对应关系。第二次遍历，用 map 复制 random 节点。空间复杂度 O(N)
有一个改善的地方，初始化时用 pseudoHead (虚拟头部)，而不是用 head，减少重复代码。

讨论中空间复杂度 O(1) 算法思路:
1. 遍历链表，复制节点，将原链表和新链表相互连接：
s1 -> c1 -> s2 -> c2 -> null
2. 遍历链表，设置 random 节点
s.next.random = s.random.next
s = s.next.ext
3. 恢复链表
s1 -> s2 -> null
c1 -> c2 -> null
*/

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head) return null
  var map = new Map(), newHead = new RandomListNode(head.label), curr = head.next, newLast = newHead
  map.set(head, newHead)
  map.set(null, null)
  
  while (curr) {
      newLast.next = new RandomListNode(curr.label)
      map.set(curr, newLast.next)
      curr = curr.next
      newLast = newLast.next
  }
  
  var curr1 = head, curr2 = newHead
  while (curr1) {
      curr2.random = map.get(curr1.random)
      curr1 = curr1.next
      curr2 = curr2.next
  }
  
  return newHead
};

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

var testNode = new RandomListNode(1)
testNode.next = new RandomListNode(2)
testNode.random = testNode.next
testNode.next.random = testNode

console.log(copyRandomList(testNode).next.random)