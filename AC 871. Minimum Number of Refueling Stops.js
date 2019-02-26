/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  // dp[n] 表示n次加油能到达的最远距离
  var dp = new Array(stations.length + 1).fill(0)
  dp[0] = startFuel

  for (var i = 0; i < stations.length; i++) {
    // 从最大次数向下循环，直到无法到达加油站的次数
    for (var j = i; j >= 0 && dp[j] >= stations[i][0]; j--) {
      // 在第i个加油站加油，更新最大行使距离
      dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1])
    }
  }

  // 查找最小的可达次数
  for (var i = 0; i < dp.length; i++) {
    if (dp[i] >= target) {
      return i
    }
  }

  return -1
};

/*
问题：给出初始燃料，目的地距离和一系列加油站的油量和距离，计算行驶到亩的地需要加油的最小次数
dp[n] 代表n次加油能够行使的最远距离，dp[0]表示初始燃料能够行使的最远距离。最后查找能到达目的地的最小次数。
时间复杂度O(n^2)，空间复杂度O(n)
*/