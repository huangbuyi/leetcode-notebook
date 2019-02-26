/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  var min = nums[0], secs = Infinity

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > secs) {
      return true
    }
    if (nums[i] <= min) {
      min = nums[i]
    } else {
      secs = nums[i]
    }
  }
  return false
};

var assert = require('assert')
assert.equal(increasingTriplet([3, 2, 1]), false)
assert.equal(increasingTriplet([1, 2, 3]), true)
assert.equal(increasingTriplet([10, 2, 9, 3, 8]), true)
assert.equal(increasingTriplet([10, 3, 9, 3, 8]), false)
assert.equal(increasingTriplet([10, 3, 9, 1, 8]), false)