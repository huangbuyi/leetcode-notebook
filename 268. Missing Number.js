/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var sum = 0, l = nums.length
  for (var i = 0; i < l; i++) {
    sum += nums[i]
  }

  return l * (l + 1) / 2 - sum
};

/* 
稍一下就想到了求和公式。讨论里使用异或思路也挺有意思：
XOR = XOR ^ i ^ nums[i]
*/

var assert = require('assert')
assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
assert.equal(missingNumber([3, 0, 1]), 2)
assert.equal(missingNumber([0, 2]), 1)
assert.equal(missingNumber([0]), 1)
assert.equal(missingNumber([]), 0)
assert.equal(missingNumber([0, 1, 2]), 3)
assert.equal(missingNumber([1, 2]), 0)