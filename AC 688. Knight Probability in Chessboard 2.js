/* 
看了讨论的思路写的，使用动态规划，用一个二维数组 dp[i][j] 保存剩余 k 次移动时跳出棋盘的概率。
k = 0 时，没有剩余次数，概率为 0，因此 dp[i][j] = 1
dp[i][j]，由 k - 1 的八个可移动到的位置的概率决定
*/

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var moves = [[-1, -2], [-2, -1], [1, -2], [2, -1], [-1, 2], [-2, 1], [1, 2], [2, 1]]

var knightProbability = function(N, K, r, c) {
    var dp = createArray(N, 1)
    
    for (var k = 0; k < K; k++) {
        var dp0 = createArray(N, 0)
        for (var x = 0; x < N; x++) {
            for (var y = 0; y < N; y++) {
                for (var m = 0; m < moves.length; m++) {
                    var x0 = x + moves[m][0], y0 = y + moves[m][1]
                    if (x0 >= 0 && y0 >= 0 && x0 < N && y0 < N) dp0[x][y] += dp[x0][y0]
                }
                dp0[x][y] /= 8
            }
        }
        dp = dp0
    }
    
    return dp[r][c]
};
    
var createArray = function(N, val) {
    var res = new Array(N)
    for (var i = 0; i < N; i++) {
        res[i] = new Array(N).fill(val)
    }
    return res
}

