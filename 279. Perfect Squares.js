/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  var dp = [0]

  for (var i = 1; i <= n; i++) {
    dp[i] = Infinity
    for (var j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
    }
  }

  return dp[n]
};

/*
看到题目第一反应使用动态规划。F(N) = Math.min(F(N-1), F(N-4), F(N-9)..., F(1)) + 1。
当然，因为答案只能是1，2，3，4，知道算法的话可以实现最快的方案。
*/