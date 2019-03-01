/* 
序列化，从上往下遍历二叉树。
反序列化，同样从上往下构建二叉树
    1       ↓
   / \      ↓
  2   3     ↓
     /  \   ↓
    4    5  ↓
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var nodes = [root], res = []
  while (nodes.length > 0) {
    var tNodes = []
    for (var i = 0; i < nodes.length; i++) {
      res.push(nodes[i] ? nodes[i].val : 'null')
      if (nodes[i]) tNodes.push(nodes[i].left, nodes[i].right)
    }
    nodes = tNodes
  }
  while (res[res.length - 1] === 'null') {
    res.pop()
  }
  
  return '[' + res.toString() + ']'
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '[]') return null
  var data = data.substring(1, data.length - 1).split(',').map(function (a) { return a === 'null' ? null : Number(a) })
  var root = new TreeNode(data[0]), nodes = [root], d = 1
  
  while (nodes.length > 0) {
    var tNodes = []
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i]) {
        nodes[i].left = typeof data[d] === 'number' ? new TreeNode(data[d]) : null
        d++
        nodes[i].right = typeof data[d] === 'number' ? new TreeNode(data[d]) : null
        d++
        tNodes.push(nodes[i].left, nodes[i].right)
      }
    }
    nodes = tNodes
  }
  
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */