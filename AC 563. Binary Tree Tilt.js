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
var findTilt = function (root) {
  var res = 0

  var preorder = function (node) {
    if (!node) {
      return 0
    }

    var lh = preorder(node.left)
    var rh = preorder(node.right)

    res += Math.abs(lh - rh)

    return lh + rh + node.val
  }

  preorder(root)
  return res
};