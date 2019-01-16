/* 
首先想到的是动态规划，看了讨论发现我想多了。
*/

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  var dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  dp[1] = 0
  dp[2] = 2
  for (var i = 1; i <= n / 2; i++) {
      for (var j = 2; i * j <= n; j++) {
          dp[i * j] = Math.min(dp[i * j], dp[i] + j)
      }
  }

  return dp[n]
};


/*
讨论里的方法，原来可以如此简单
*/
/**
 * @param {number} n
 * @return {number}
 */
var minSteps2 = function(n) {
  var s = 0
  for (var d = 2; d <= n; d++) {
      while (n % d === 0) {
          s += d
          n /= d
      }
  }

  return s
};