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
    console.log(i)

    if (nums[i] > nums[i + 1]) {
      break
    } else if (nums[i] === nums[imin] && nums[i] === nums[imax]) {
      imin++
      imax--
    } else if (nums[i] < nums[imin]) {
      imax = i - 1
    } else {
      imin = i + 1
    }
  }
  offset = i - len + 1
  console.log(offset)

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
      return true
    }
  }

  return false
};

// assert.equal(search([4,5,6,7,8,9,10,10,10,10,2,3], 10), true)
// assert.equal(search([4,5,6,7,8,9,10,10,10,10,2,3], 1), false)
// assert.equal(search([1,3,1,1,1], 3), true)
// assert.equal(search([1,1,1,1,1,1,1], 3), false)
// assert.equal(search([1,1,1,1,1,1,1], 1), true)
// assert.equal(search([1,1,1,1,3,3,3,3,1,1,1], 3), true)
// assert.equal(search([3,1,1,1,1,3], 3), true)
assert.equal(search([2, 2, 0, 1, 1], 0), true)