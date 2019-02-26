/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  var max = nums[0], maxIndex = 0
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > max / 2 && nums[i] !== max) return -1
  }
  return maxIndex
};