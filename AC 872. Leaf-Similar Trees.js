/* 
下面的算法直接遍历两棵树，再进行比较。
更快一点的思路：先遍历一棵树，在遍历另一棵树的每个页节点是进行比较
更更快一点的思路：两颗树同时一个叶节点一个叶节点地遍历
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  var sq1 = [], sq2 = []
  getSequence(root1, sq1)
  getSequence(root2, sq2)

  if (sq1.length !== sq2.length) {
    return false
  }

  for (var i = 0; i < sq1.length; i++) {
    if (sq1[i] !== sq2[i]) {
      return false
    }
  }

  return true
};

var getSequence = function (node, seq) {
  if (!node) return
  if (!node.left && !node.right) seq.push(node.val)
  getSequence(node.left, seq)
  getSequence(node.right, seq)
}