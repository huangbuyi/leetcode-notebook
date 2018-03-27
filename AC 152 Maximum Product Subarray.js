/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxProduct = function (nums) {
   var max = nums[0], tmax = max, tmin = max, t, i
   for (i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      t = tmax
      tmax = tmin
      tmin = t
    }
    tmax = Math.max(nums[i], nums[i] * tmax)
    tmin = Math.min(nums[i], nums[i] * tmin)
    max = Math.max(max, tmax)
   }
   return max
 }


/* 不适用于含有0的情况，且时间复杂度太高 
var maxProduct = function(nums) {
  var products = [1], max = -Infinity
  for (i = 0; i < nums.length; i++) {
      products[i + 1] = products[i] * nums[i]
  }
  
  for (i = 1; i <= nums.length; i++) {
      for (j = 0; j < i; j++) {
          max = Math.max(products[i] / products[j], max)
      }
  }
  
  return max
}; */

/* 
  
*/

var assert = require('assert')
assert.equal(maxProduct([2,3,-2,4]), 6)
assert.equal(maxProduct([-2]), -2)
assert.equal(maxProduct([-2, -3]), 6)
assert.equal(maxProduct([-2, 1, -3]), 6)
assert.equal(maxProduct([0,2]), 2)
assert.equal(maxProduct([-2,0,2,3]), 6)
assert.equal(maxProduct([-1,-2,-9,-6]), 108)
