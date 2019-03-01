/* 
不管什么树，遍历所有节点就能计算节点数，时间复杂度 O(n)。
题目给出的是完全树，不需要遍历所有节点，但要知道最底层有多少节点。
下面算法使用二分搜索，每次搜索要从根节点访问到叶节点，因此时间复杂度 O(logn*logn)。
算法比较复杂，讨论区解法的 JS 版本见 222. Count Complete Tree Nodes2.js。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  var h = 0, node = root
  while (node) {
    h++
    node = node.right
  }
  
  var lh = 0, rh = Math.pow(2, h) - 1, res = rh
  while (lh <= rh) {
    var mh = Math.floor((lh + rh) / 2), th = h - 1
    node = root
    while (th >= 0) {
      node = (mh >> th) & 1 ? node.right : node.left
      th--
    }
    if (node) lh = mh + 1
    else rh = mh - 1
  }
  
  return res + lh
};