/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var hash = {}, count = []
  for (var i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1
  }
  for (var key in hash) {
    count.push({
      value: key,
      frequent: hash[key]
    })
  }

  function _quickSort(nums, left, right) {
    var meta = nums[left], l = left, r = right
    if (left >= right) {
      return
    }

    while (l < r) {
      while (nums[r] <= meta) {
        r--
      }
      nums[l] = nums[r]
      while (nums[l] >= meta) {
        l++
      }
      nums[r] = nums[l]
      console.log(nums)
    }
    nums[l] = meta
    _quickSort(nums, left, l - 1)
    _quickSort(nums, l + 1, right)
  }
  var arr = [6,1,3,4,6,7,8,9,3,13,31]
  _quickSort(arr, 0, arr.length - 1)
  console.log(arr)
};

var assert = require('assert')
assert.deepStrictEqual(topKFrequent([1,1,1,2,2,3], 1), [1])
assert.deepStrictEqual(topKFrequent([1,1,1,2,2,3], 2), [1,2])
assert.deepStrictEqual(topKFrequent([1,1,1,2,2,3], 3), [1,2,3])