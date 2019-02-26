/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var zeroCounts = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCounts++
    } else {
      nums[i - zeroCounts] = nums[i]
      if (zeroCounts > 0) {
        nums[i] = 0
      }
    }
  }
};

/* 
计数 0，按所计个数，添加到数组后面
*/

var assert = require('assert')
var arr = [0, 1, 0, 3, 12]
moveZeroes(arr)
assert.deepStrictEqual(arr, [1, 3, 12, 0, 0])
var arr2 = [0, 0, 0, 1, 2, 3]
moveZeroes(arr2)
assert.deepStrictEqual(arr2, [1, 2, 3, 0, 0, 0])
var arr3 = []
moveZeroes(arr3)
assert.deepStrictEqual(arr3, [])
var arr4 = [0, 1, 0, 2, 0, 3, 0, 4]
moveZeroes(arr4)
assert.deepStrictEqual(arr4, [1, 2, 3, 4, 0, 0, 0, 0])
var arr5 = [1, 0, 0]
moveZeroes(arr5)
assert.deepStrictEqual(arr5, [1, 0, 0])
var arr6 = [1, 2, 3]
moveZeroes(arr6)
assert.deepStrictEqual(arr6, [1, 2, 3])
var arr7 = [0, 1, 0]
moveZeroes(arr7)
assert.deepStrictEqual(arr7, [1, 0, 0])