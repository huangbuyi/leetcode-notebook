/* 
思路：动态规划
dp[n] 表示 n 个节点树有多少种不同结构。
dp[n] = dp[0] * dp[n - 1] + .. dp[i] * dp[n - 1 - i] ... + dp[n - 1]dp[0]。
n 节点树左子树有 i 个节点，左子树就有 dp[i] 种，右子树就有 dp[n - 1 - i] 种变化，组合起来有 dp[i] * dp[n - 1 - i] 种变化。
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j]
    }
  }
  return dp[n]
};