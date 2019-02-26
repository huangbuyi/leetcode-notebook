/* 
postorder 返回与节点值相同最长路径的长度
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
var longestUnivaluePath = function (root) {
  var max = 0

  var postorder = function (node) {
    if (!node) return 0

    var lh = postorder(node.left)
    var rh = postorder(node.right)

    if (!node.left || node.left.val !== node.val) {
      lh = 0
    }

    if (!node.right || node.right.val !== node.val) {
      rh = 0
    }

    max = Math.max(lh + rh, max)
    return Math.max(lh, rh) + 1
  }

  postorder(root)
  return max
};