/* 
N 为偶数是，无法构成任何 FBT。N 为奇数时，
左子树有 1, 3, 5 ... , N - 2 个节点，相应右子树有 N - 2, N - 4, ... 1 个节点。
可以划分子问题，求 N 节点的 FBT -> 求左子树所有 FBT 和右子树所有 FBT 的组合，可递归求解。
要注意的是，左子树和右子树组合的过程中，不用重复引用，造成不同的 FBT 引用同一子树。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  if (N % 2 === 0) return []
  if (N === 1) return [new TreeNode(0)]
  
  var res = []
  for (var i = 1; i < N; i += 2) {
      var left = allPossibleFBT(i), right = []
      for (var j = 0; j < left.length; j++) {
          var right = allPossibleFBT(N - 1 - i)
          for (var k = 0; k < right.length; k++) {
              var root = new TreeNode(0)
              root.left = left[j]
              root.right = right[k]
              res.push(root)
          }
      }
  }
  
  return res
};