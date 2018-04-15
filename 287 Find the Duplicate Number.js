/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var j = nums[i]
    while (nums[i] !== nums[j]) {
      console.log(i, j)
      j = nums[j]
    }
    if (i !== j) {
      return nums[i]
    }
  }
};

var assert = require('assert')
// assert.equal(findDuplicate([1,1]), 1)
// assert.equal(findDuplicate([1,1,1]), 1)
// assert.equal(findDuplicate([1,1,2]), 1)
// assert.equal(findDuplicate([1,1,2,3]), 1)
// assert.equal(findDuplicate([1,2,3,4,4]), 4)
// assert.equal(findDuplicate([1,2,4,4,4]), 4)
assert.equal(findDuplicate([1,2,3,4,5,5]), 5)
assert.equal(findDuplicate([6,8,7,4,5,3,1,2,7]), 7)
assert.equal(findDuplicate([7,8,7,4,5,3,1,2,6]), 7)
assert.equal(findDuplicate([7,8,6,4,5,3,1,2,7]), 7)