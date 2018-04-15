/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var hashArr = new Array(nums.length).fill(undefined).map(function () {
    return {}
  })
  var _LIS = function(n, ceil) {
    var res
    if (n < 0) {
      return 0
    }
    if (hashArr[n][ceil]) {
      return hashArr[n][ceil]
    }
    
    if (nums[n] < ceil) {
      res = Math.max(1 + _LIS(n - 1, nums[n]), _LIS(n - 1, ceil))
    } else { 
      res = _LIS(n - 1, ceil)
    }
    hashArr[n][ceil] = res
    return res
  }
  return _LIS(nums.length - 1, Infinity)
};

/* 
F(n, ceil) = Math.max(1 + F(n - 1, nums[n]), F(n - 1, cel)) (nums[n] < ceil)
*/

var assert = require('assert')
assert.equal(lengthOfLIS([]), 0)
assert.equal(lengthOfLIS([1]), 1)
assert.equal(lengthOfLIS([10,9,2,5,3,7,101,18]), 4)
assert.equal(lengthOfLIS([1,2,3]), 3)
assert.equal(lengthOfLIS([3,2,1]), 1)
assert.equal(lengthOfLIS([1,2,1]), 2)
assert.equal(lengthOfLIS([1,1,1]), 1)
