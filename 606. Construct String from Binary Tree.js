/* 
遍历二叉树。注意一下左子树为空的情况。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) return ''
  if (!t.left && !t.right) return `${t.val}`
  if (!t.right) return `${t.val}(${tree2str(t.left)})`
  return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`
};