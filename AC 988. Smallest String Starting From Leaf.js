/* 
思路：将问题——求树的最小字序字符串(从叶开始)，划分为子问题，求每个子树的最小字序字符串。递归求解。
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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  if (!root) return ''
  var char = String.fromCharCode(97 + root.val)
  var left = smallestFromLeaf(root.left)
  var right = smallestFromLeaf(root.right)
  if (!left) return right + char
  if (!right) return left + char
  return (left < right ? left : right) + char
};