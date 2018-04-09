/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var res = []
  var _path = function (node, path) {
      path += node.val
      if (!node.left && !node.right) {
          res.push(path)
          return
      }
      node.left && _path(node.left, path + '->')
      node.right && _path(node.right, path + '->')
  }
  root && _path(root, '')
  return res
};

/* 
二叉树遍历
*/