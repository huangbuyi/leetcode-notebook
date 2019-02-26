/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var comparor = function (a, b) { return b - a }
  var s = 0, maxs = []
  while (s < nums.length && maxs.length < 3) {
    if (nums[s] !== maxs[0] && nums[s] !== maxs[1]) {
      maxs.push(nums[s])
    }
    s++
  }
  maxs = maxs.sort(comparor)

  for (var i = s; i < nums.length; i++) {
    if (nums[i] > maxs[2] && nums[i] !== maxs[0] && nums[i] !== maxs[1]) {
      maxs[2] = nums[i]
      maxs.sort(comparor)
    }
  }

  return typeof maxs[2] === 'number' ? maxs[2] : maxs[0]
};

var assert = require('assert')
assert.equal(thirdMax([1]), 1)
assert.equal(thirdMax([1, 2]), 2)
assert.equal(thirdMax([1, 2, 3]), 1)
assert.equal(thirdMax([1, 3, 3]), 3)
assert.equal(thirdMax([1, 2, 2, 3]), 1)
assert.equal(thirdMax([2, 2, 2, 2, 2, 2, 2, 2, 2]), 2)
assert.equal(thirdMax([0, 0, -1, -2, 0, -1]), -2)
assert.equal(thirdMax([1, 5, 8, 41, 2, 1, 5, 6, 3, 1, 2, 5, 45, 2, 21, 41]), 21)