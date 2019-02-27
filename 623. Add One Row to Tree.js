/* 
遍历二叉树，记录遍历深度，到目标深度的父节点，插入新节点。
要注意插入第一行时的特殊情况。
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (!root) return
  var t = null
  if (d === 1) {
    t = new TreeNode(v)
    t.left = root
    return t
  }
  if (d === 2) {
    t = root.left
    root.left = new TreeNode(v)
    root.left.left = t
    t = root.right
    root.right = new TreeNode(v)
    root.right.right = t
  }
  addOneRow(root.left, v, d - 1)
  addOneRow(root.right, v, d - 1)
  return root
};