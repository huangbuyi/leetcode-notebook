/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  var N = board.length, dp = new Array(N * N).fill(Infinity), x, y, val
  dp[0] = 0

  for (var i = 0; i < dp.length; i++) {
    for (var j = 1; j <= 6 && i + j < dp.length; j++) {
      x = Math.floor((i + j) / N)
      y = x % 2 === 0 ? (i + j) % N : N - 1 - (i + j) % N
      x = N - 1 - x
      val = board[x][y]
      if (val === -1) {
        dp[i + j] = Math.min(dp[i] + 1, dp[i + j])
      } else {
        if (dp[i] + 1 < dp[val - 1]) {
          dp[val - 1] = dp[i] + 1
          if (val - 1 < i) {
            i = val - 2
            break
          }
        }
      }
    }
  }

  return dp[N * N - 1] === Infinity ? -1 : dp[N * N - 1]
};