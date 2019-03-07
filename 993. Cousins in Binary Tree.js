/* 
略复杂，但性能还可以
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  var nodes = [root]
  while (nodes.length > 0) {
    var tNodes = [], xIdx, yIdx
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]
      if (node) {
        if (node.val === x) xIdx = i
        if (node.val === y) yIdx = i
        tNodes.push(node.left, node.right)
      }
    }

    if (xIdx >= 0 || yIdx >= 0) {
      if (Math.abs(xIdx - yIdx) > 1) return true
      if (Math.abs(xIdx - yIdx) === 1 && Math.min(xIdx, yIdx) % 2 === 1) return true
      return false
    }
    nodes = tNodes
  }
  return false
};

