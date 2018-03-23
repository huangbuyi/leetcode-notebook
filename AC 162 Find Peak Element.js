/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  var i
  nums[-1] = -Infinity
  nums[nums.length] = -Infinity
  for (i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
          return i
      }
  }
};

var assert = require('assert')
assert.equal(findPeakElement([1,2,3,1]), 2)
assert.equal(findPeakElement([1,2,3]), 2)
assert.equal(findPeakElement([1]), 0)