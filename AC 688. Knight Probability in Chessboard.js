/* 
我的思路：递归 + 动态规划
看了讨论，发现其实并不需要递归，算法见 AC 688. Knight Probability in Chessboard 2.js
*/

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (N, K, r, c) {
  var map = {}

  var helper = function (k, r, c) {
    if (r < 0 || c < 0 || r >= N || c >= N) return 1
    if (k === 0) return 0
    var key = r + '-' + c + '-' + k
    if (map[key] > 0) return map[key]
    k--
    var p = (helper(k, r - 2, c - 1) + helper(k, r - 1, c - 2) +
      helper(k, r + 1, c - 2) + helper(k, r + 2, c - 1) +
      helper(k, r - 1, c + 2) + helper(k, r - 2, c + 1) +
      helper(k, r + 1, c + 2) + helper(k, r + 2, c + 1)) / 8
    map[key] = p
    return p
  }

  var res = helper(K, r, c)
  return 1 - res
};