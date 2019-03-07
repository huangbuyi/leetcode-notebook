/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
  var curr = root, p
  while (curr && val < curr.val) {
    p = curr
    curr = curr.right
  }
  if (p) {
    p.right = new TreeNode(val)
    p.right.left = curr
  } else {
    root = new TreeNode(val)
    root.left = curr
  }
  return root
};