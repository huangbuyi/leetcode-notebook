/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {

  var _connect = function (node) {
    var next = node.next
    while (next && !next.left && !next.right) {
      next = next.next
    }
    if (next) {
      _connect(next)
    }
    if (node.left && node.right) {
      node.left.next = node.right
    }
    if (node.left && !node.right) {
      node.left.next = next ? (next.left || next.right) : null
    }
    if (node.right && !node.left) {
      node.right.next = next ? (next.left || next.right) : null
    }
    if (node.left || node.right) {
      _connect(next)
    }
  }

  _connect(root)
};