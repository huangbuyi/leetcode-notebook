/* 
如果一个节点，到最左叶节点和最右叶节点的距离相同，说明这个子树最底层没有多余的节点，可以直接计算节点数。
如果不相同，说明最底层有多余节点，继续遍历子节点。
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
  var lh = 0, rh = 0, node = root
  while (node) {
    lh++
    node = node.left
  }
  node = root
  while (node) {
    rh++
    node = node.right
  }
  if (lh === rh) return Math.pow(2, lh) - 1
  return 1 + countNodes(root.left) + countNodes(root.right)
};