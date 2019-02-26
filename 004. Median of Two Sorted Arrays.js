/* Acepted */
var assert = require('assert')
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var longNums = nums1, shortNums = nums2
  if (nums1.length < nums2.length) {
    longNums = nums2
    shortNums = nums1
  }
  var longLen = longNums.length,
    shortLen = shortNums.length,
    halfLen = (longLen + shortLen + 1) / 2 >> 0,
    imin = 0,
    imax = shortLen,
    max_of_left, min_of_right, i, j

  while (imin <= imax) {
    i = (imin + imax) / 2 >> 0
    j = halfLen - i

    if (i < shortLen && shortNums[i] < longNums[j - 1]) {
      imin = i + 1
    } else if (i > 0 && shortNums[i - 1] > longNums[j]) {
      imax = i - 1
    } else {
      if (i === 0) max_of_left = longNums[j - 1]
      else if (j === 0) max_of_left = shortNums[i - 1]
      else max_of_left = Math.max(longNums[j - 1], shortNums[i - 1])
      break
    }
  }

  if ((shortLen + longLen) % 2 === 1) return max_of_left

  if (i === shortLen) min_of_right = longNums[j]
  else if (j === longLen) min_of_right = shortNums[i]
  else min_of_right = Math.min(longNums[j], shortNums[i])

  return (max_of_left + min_of_right) / 2
};


assert.equal(findMedianSortedArrays([1, 3], [2]), 2)
assert.equal(findMedianSortedArrays([2], [1, 3]), 2)
assert.equal(findMedianSortedArrays([1], [2, 3]), 2)
assert.equal(findMedianSortedArrays([1, 2], [3]), 2)
assert.equal(findMedianSortedArrays([2, 3, 4, 5], [1, 6]), 3.5)
assert.equal(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [1, 4, 7, 10, 12]), 7)