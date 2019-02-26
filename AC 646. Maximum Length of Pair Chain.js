/* 
解题思路和 300. Longest Increasing Subsequence 差不多。
dp[k] 表示链长为 k 的链的上边界的最小值，
状态转移方程：
dp[k + 1] = min(pairs[i][1], dp[k + 1])，当 pairs[i][0] > dp[k]
另外，要先对 pairs 按上边界值从小到大排序，因为如果 pair 能组成链，我们希望它的上届尽可能小。
*/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  var dp = [Infinity]
  pairs.sort(function (a, b) {
    return a[1] - b[1]
  })

  for (var i = 0; i < pairs.length; i++) {
    var j = 0, length = dp.length
    while (pairs[i][0] > dp[j]) {
      dp[j + 1] = j + 1 === length ? pairs[i][1] : Math.min(pairs[i][1], dp[j + 1])
      j++
    }
    dp[0] = Math.min(pairs[i][1], dp[0])
  }

  return dp.length
};