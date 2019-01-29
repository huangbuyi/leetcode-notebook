/* 
dp[n] 表示 n * 2 board 的组合数量
1. dp[n - 1] 加一竖条A
....A
....A
2. dp[n - 2] 加两横条A、B
...AA
...BB
3. dp[n - 3] 到 dp[0] 加两L条A、B，和数个横条，有两种情况
..ACCBB    ..AADDB
..AADDB    ..ACCBB
因此，状态转移方程
dp[n] = dp[n - 1] + dp[n - 2] + 2 * (dp[n - 3] + .... + dp[0])
我只想到用 sum 保存 dp[n - 3]...dp[0]，就是下面的代码。看讨论发现能进一步简化：
dp[n] = dp[n - 1] + dp[n - 3] + dp[n - 2] + dp[n - 3] + 2 * (dp[n - 4] + .... + dp[0])
dp[n] = dp[n - 1] + dp[n - 3] + dp[n - 1]
dp[n] = 2 * dp[n - 1] + dp[n - 3]
*/

/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
  var dp = new Array(N), sum = 1
  dp[0] = 1
  dp[1] = 2
  dp[2] = 5
  
  for (var i = 3; i < N; i++) {
      sum += dp[i - 3] % (1e9 + 7)
      dp[i] = (dp[i - 1] + dp[i - 2] + 2 * sum) % (1e9 + 7)
  }
  
  return dp[N - 1]
};