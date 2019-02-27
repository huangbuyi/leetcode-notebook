/* 
我的思路：动态规划，dp[i] 表示第 i 天股票能获取的最大利润。时间复杂度 O(n^2)，空间复杂度 O(n)。
讨论去有 O(n) 和 O(1) 的更好方法，见 309. Best Time to Buy and Sell Stock with Cooldown 2.js
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0
  var dp = new Array(prices.length).fill(0)
  for (var i = 1; i < prices.length; i++) {
    for (var j = 0; j < i; j++) {
      var t = j < 2 ? 0 : dp[j - 2]
      dp[i] = Math.max(prices[i] - prices[j] + t, dp[i])
    }
    dp[i] = Math.max(dp[i], dp[i - 1] || 0, dp[i - 2] || 0)
  }

  return dp[dp.length - 1]
};