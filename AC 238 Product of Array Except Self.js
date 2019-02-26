/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var left = 1, right = 1, res = new Array(nums.length)
  for (var i = 0; i < nums.length; i++) {
    res[i] = left
    left *= nums[i]
  }

  for (var i = nums.length - 1; i >= 0; i--) {
    res[i] *= right
    right *= nums[i]
  }

  return res
};

/* 
第一次遍历，保存遍历元素左边的乘积，第二次遍历，将左边的乘积乘以右边的乘积
*/

var assert = require('assert')
assert.deepStrictEqual(productExceptSelf([1]), [1])
assert.deepStrictEqual(productExceptSelf([2, 2, 2]), [4, 4, 4])
assert.deepStrictEqual(productExceptSelf([1, 2]), [2, 1])
assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])