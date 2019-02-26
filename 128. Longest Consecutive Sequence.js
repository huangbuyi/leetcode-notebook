/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var hashMap = {}, max = 0, left, right, sum
  nums.map(function (num) {
    if (hashMap[num]) {
      return
    }
    left = hashMap[num - 1] || 0
    right = hashMap[num + 1] || 0
    sum = left + right + 1
    max = Math.max(max, sum)
    hashMap[num] = sum
    if (left) {
      hashMap[num - left] = sum
    }
    if (right) {
      hashMap[num + right] = sum
    }
  })

  return max
};



var assert = require('assert')
assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4)
assert.equal(longestConsecutive([6, 4, 5, 0, 1, 2]), 3)
assert.equal(longestConsecutive([1, 1]), 1)
assert.equal(longestConsecutive([1]), 1)
assert.equal(longestConsecutive([]), 0)
