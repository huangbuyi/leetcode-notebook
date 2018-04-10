/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  var money = new Array(nums.length)
  money[0] = nums[0]
  money[1] = Math.max(nums[0], nums[1])
  for (var i = 2; i < nums.length; i++) {
    money[i] = Math.max(money[i - 1], money[i - 2] + nums[i])
  }

  console.log(money)
  return money[nums.length - 1]
};


var assert = require('assert')
assert.equal(rob([]), 0)
assert.equal(rob([1]), 1)
assert.equal(rob([1,2]), 2)
assert.equal(rob([1,3,1]), 3)
assert.equal(rob([2,3,2]), 3)
assert.equal(rob([1,2,3,4,5,6,7,8,9]), 24)
assert.equal(rob([1,5,6,8,1,5,8,9,6,7,3,6,4,2,9,7,4,1,2,4,5,6,3,4,8,9,7,4,1,3,7,9,5,4,6,3,1]), 99)