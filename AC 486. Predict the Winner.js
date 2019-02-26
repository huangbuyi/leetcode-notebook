/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  var len = nums.length
  var dp = []

  for (var j = 0; j < len; j++) {
    dp[j] = nums[j]
    for (var i = j - 1; i >= 0; i--) {
      dp[i] = Math.max(nums[i] - dp[i + 1], nums[j] - dp[i])
    }
  }

  return dp[0] >= 0
};

/*
dp[i][j] 表示i到j中，先选者能取得的最大分数差
dp[i][j] = Math.max(nums[i] + dp[i + 1][j], nums[j] + dp[i][j - 1])
例如，nums = [1,5,2]
0 1 2 3
1 1
2   5
3     2
*/