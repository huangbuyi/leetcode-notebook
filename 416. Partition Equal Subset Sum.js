/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  if (sum % 2 === 1) {
    return false
  }
  sum /= 2

  var part = function (sum, begin) {
    if (sum < 0) {
      return false
    }
    if (sum === 0) {
      return true
    }

    for (var i = begin + 1; i < nums.length; i++) {
      if (part(sum - nums[i], i)) {
        return true
      }
    }

    return false
  }

  return part(sum, 0)
};

/* 
Timeout
*/

var assert = require('assert')
assert.equal(canPartition([1, 1]), true)
assert.equal(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1]), false)
assert.equal(canPartition([1, 1, 1, 1, 1, 1, 1, 1]), true)
assert.equal(canPartition([1, 5, 11, 5]), true)
assert.equal(canPartition([1, 2, 3, 5]), false)