/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  var M = A.length, N = A[0].length, dp = new Array(N), res = Infinity
  for (var i = 0; i < N; i++) {
    dp[i] = A[0][i]
  }
  
  for (var i = 1; i < M; i++) {
    var tDp = new Array(N)
    for (var j = 0; j < N; j++) {
      tDp[j] = A[i][j] + Math.min(dp[j - 1] || Infinity, dp[j], dp[j + 1] || Infinity)
    }
    dp = tDp
  }
  
  for (var i = 0; i < N; i++) {
    res = Math.min(dp[i], res)
  }
  
  return res
};