/* 
首先，有两点要注意
1. 上方的节点排在前面(Y大的排在前面)
2. 同位置的节点，从小到大排序(X、Y都相同)
思路：从上往下一层一层遍历，用数组保存同层所有节点的值和Y的位置，
然后将每个 X 的值按 Y 排序，Y 相同时，按数值从小到大排序。
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  var res = new Array(2000), nodes = [[root, 999]], Y = 0

  while (nodes.length > 0) {
    var tnodes = []
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i][0], pos = nodes[i][1]
      if (!res[pos]) res[pos] = []
      res[pos].push([node.val, Y])
      if (node.left) tnodes.push([node.left, pos - 1])
      if (node.right) tnodes.push([node.right, pos + 1])
    }
    nodes = tnodes
    Y++
  }
  var sorter = (a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
  res = res.filter(item => item)
  for (var i = 0; i < res.length; i++) {
    res[i].sort(sorter)
    for (var j = 0; j < res[i].length; j++) {
      res[i][j] = res[i][j][0]
    }
  }

  return res
};