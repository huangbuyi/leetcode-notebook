/* 
思路：将子节点富余金币移动到父节点，或者从父节点借调不足金币，如果父节点有富余或不足，再向父父节点调整，每次借调只在相邻节点间进行。
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
var distributeCoins = function(root) {
  var res = 0
  var helper = function(node) {
    if (!node) return 0
    var lh = helper(node.left)
    var rh = helper(node.right)
    var balance = node.val + lh + rh - 1
    res += Math.abs(balance)
    return balance
  }
  helper(root)
  return res
};