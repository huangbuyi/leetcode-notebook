/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  var i = 0, j = A.length - 1
  while (i <= j) {
    var m = Math.floor((i + j) / 2)
    if (A[m] < A[m + 1]) {
      i = m + 1
    } else {
      j = m - 1
    }
  }
  return i
};