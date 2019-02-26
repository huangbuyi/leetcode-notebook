/* 
与某题类似，有空找找。
思路：动态规划 
dp[i][j] 表示 i ~ j 范围内，先选者能获得的最多分数
dp[i][j] = Math.max(piles[i] - dp[i + 1, j], piles[j] - dp[i][j - 1])，例如 [5,3,4,5]：
5 2 4 1
  3 1 4
    4 1
      5
为了节省空间，可以使用一维数组，dp[j] 表示 j - 1 - i 到 j 范围内，先选者能获得的最多分数
dp[j] = Math.max(piles[j - 1 - i] - dp[j], piles[j] - dp[j - 1])
[5,3,4,5]
[5,2,1,1]
[5,2,4,4]
[5,2,4,1]
在试图找出 false 的测试用例时，发现找不到，才知道这题就没有 false 的答案，直接返回 true 即可。
原因是 piles.length 是偶数，所以先选者必赢。
*/

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  var dp = new Array(piles)

  for (var i = 0; i < piles.length; i++) {
    dp[i] = piles[i]
  }

  for (var i = 0; i < piles.length; i++) {
    for (var j = piles.length - 1; j > i; j--) {
      dp[j] = Math.max(piles[j - 1 - i] - dp[j], piles[j] - dp[j - 1])
    }
  }

  return dp[dp.length - 1] > 0
};

