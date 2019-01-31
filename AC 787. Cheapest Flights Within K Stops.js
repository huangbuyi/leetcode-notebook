/* 
典型最短路径算法题，我用了 DFS 结合动态规划的算法。dp[i][j] 表示第 i 的节点，中转 j 次，到达目的地的最小价格。 
其它算法：
1. BFS
2. 纯动态规划算法，dp 设置和下面的算法差不多。
3. 优先队列，根据从出发城市到当前城市的费用进行排序，出列最小费用的城市，如果到达了目的地，这就是最小费用。如果不能到达，再将下一个中转城市插入优先队列。
看了讨论，发现我的算法好复杂。
*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  var cities = new Array(n), dp = new Array(n)
  dp[dst] = 0
  
  for (var i = 0; i < n; i++) {
      dp[i] = new Array(K + 1)
  }
  
  for (var i = 0; i < flights.length; i++) {
      var s = flights[i][0]
      if (!cities[s]) cities[s] = []
      cities[s].push(flights[i])
  }
  
  var dfs = function(c, k) {
      if (c === dst) return 0
      if (k < 0) return Infinity
      if (dp[c][k] >= 0) return dp[c][k]
      
      var min = Infinity
      if (cities[c]) {
          for (var i = 0; i < cities[c].length; i++) {
              min = Math.min(min, cities[c][i][2] + dfs(cities[c][i][1], k - 1))
          }
      }
      
      return dp[c][k] = min
  }
  
  var cost = dfs(src, K)
  return cost < Infinity ? cost : -1
};