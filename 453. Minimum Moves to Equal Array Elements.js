/*
一次move，n-1个值+1，等价于一次move，一个值-1，直到所有值相等。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  var sum = 0, min = Infinity
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
    min = Math.min(min, nums[i])
  }

  return sum - min * nums.length
};