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
var diameterOfBinaryTree = function(root) {
  var max = 1
  var postorder = function(node) {
      if (!node) {
          return 0
      }
      
      var lh = postorder(node.left)
      var rh = postorder(node.right)
      max = Math.max(lh + rh + 1, max)
      return Math.max(lh, rh) + 1
  }
  postorder(root)
  return max - 1
};