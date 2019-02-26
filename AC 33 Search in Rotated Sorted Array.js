var assert = require('assert')
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function (nums, target) {
  var imin = 0,
    imax = nums.length - 1,
    len = nums.length,
    offset,
    imid, i

  // find max value index
  while (imin <= imax) {
    i = (imin + imax) / 2 >> 0

    if (nums[i] > nums[i + 1]) {
      break
    } else if (nums[i] < nums[imin]) {
      imax = i - 1
    } else {
      imin = i + 1
    }
  }
  offset = i - len + 1

  // search target
  imin = 0
  imax = len - 1
  while (imin <= imax) {
    imid = (imin + imax) / 2 >> 0
    var midIndex = imid + offset
    midIndex = midIndex < 0 ? len + midIndex : midIndex

    if (target < nums[midIndex]) {
      imax = imid - 1
    } else if (target > nums[midIndex]) {
      imin = imid + 1
    } else {
      return midIndex
    }
  }

  return -1
};

assert.equal(search([4, 5, 6, 7, 8, 9, 10, 2, 3], 7), 3)
assert.equal(search([4, 5, 6, 7, 8, 9, 10, 2, 3], 3), 8)
assert.equal(search([4, 5, 6, 7, 8, 9, 10, 2, 3], 11), -1)
assert.equal(search([4, 5, 6, 7, 8, 9, 10, 2, 3], 0), -1)
assert.equal(search([4, 5, 6, 7, 8, 9, 10, 0, 2, 3], 0), 7)
assert.equal(search([], 0), -1)
assert.equal(search([4, 5, 7, 8, 9, 10, 2, 3], 6), -1)

