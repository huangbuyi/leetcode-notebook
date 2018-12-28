/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
  var isValid = function (node, min, max) {
      if (!node) {
          return true
      }
      if (node.val <= min || node.val >= max) {
          return false
      }
      return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
  }
  
  return isValid(root, -Infinity, +Infinity)
};