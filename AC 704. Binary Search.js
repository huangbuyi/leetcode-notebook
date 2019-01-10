/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var l = 0
  var r = nums.length - 1
  
  while (l <= r) {
      var m = Math.floor((l + r) / 2)
      if (target < nums[m]) {
          r = m - 1
      } else if (target > nums[m]) {
          l = m + 1
      } else {
          return m
      }
  }
  return -1
};