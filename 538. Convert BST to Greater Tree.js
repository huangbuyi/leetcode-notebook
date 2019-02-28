/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  helper(root, 0)
  return root
};

var helper = function(node, sum) {
  if (!node) return 0
  var val = node.val
  var right = helper(node.right, sum)
  node.val = sum + node.val + right
  var left = helper(node.left, node.val)
  return val + right + left
}