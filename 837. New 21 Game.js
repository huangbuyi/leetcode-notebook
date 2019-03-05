/* 
动态规划
dp[i] 表示得到 i 点数的概率，dp[0] = 1，因为一张牌都不抽就可以得到 0 点：
dp[i] = SUM(dp[i - 1] + dp[i - 2] + ... + dp[i - W]) / W，由前 W 项决定，为了避免重复计算，使用 sum 保存前 W 项和。
当 i >= K 时，就不再抽卡了，所以：
dp[i] = SUM(dp[K - 1] + dp[K - 2] + ... + dp[i - W]) / W
要注意，i > W 时，sum 要减去 dp[0] 项。
*/

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
  if (K === 0) return 1
  var queue = new Array(W).fill(0), sum = 1, res = 0
  queue[W - 1] = 1
  
  for (var i = 0; i < K - 1; i++) {
    var p = sum / W
    queue.push(p)
    sum += p
    sum -= queue.shift()
  }
  
  for (var i = 0; i <= N - K; i++) {
    res += sum / W
    if (queue.length > 0) sum -= queue.shift()
  }

  return res
};