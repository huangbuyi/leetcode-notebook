/* 
动态规划，时间复杂度 O(N2)，空间复杂度 O(N)。
先将 nums 从小到大排序，然后分两步：
1. 动态规划找到最长子集长度，dp[i] 表示第 i 个数可组成的最长子集的长度
2. 找出满足要求的最长子集的元素
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (nums.length === 0) return []
  var dp = new Array(nums.length).fill(1), nums = nums.sort(function (a, b) { return a - b }), max = 1, maxIndex = 0
  
  for (var i = 1; i < nums.length; i++) {
      for (var j = 0; nums[j] <= nums[i] / 2; j++) {
          if (nums[i] % nums[j] === 0) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
      
      if (dp[i] > max) {
          max = dp[i]
          maxIndex = i
      }
  }
  
  var i = maxIndex, res = new Array(max)
  res[--max] = nums[maxIndex]
  
  while (max > 0 && i >= 0) {
      if (dp[i] === max && res[max] % nums[i] === 0) {
          res[--max] = nums[i]
      }
      i--
  }
  
  return res
};