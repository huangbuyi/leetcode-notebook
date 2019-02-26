/* 
节点A的最大值等于抢劫A和不抢劫A中的最大值，保存最大值
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
var rob = function (root) {
  var order = function (node, canThieve) {
    if (!node) {
      return 0
    }

    if (canThieve && node.max2) {
      return node.max2
    }

    if (!canThieve && node.max1) {
      return node.max1
    }

    if (!canThieve) {
      return order(node.left, true) + order(node.right, true)
    }

    return node.max2 = Math.max(node.val + order(node.left, false) + order(node.right, false), order(node.left, true) + order(node.right, true))
  }

  return order(root, true)
};