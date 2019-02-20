/* 
送分题
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  var min = 10000, max = 0
  for (var i = 0; i < A.length; i++) {
      min = Math.min(A[i], min)
      max = Math.max(A[i], max)
  }
  return Math.max(max - min - 2 * K, 0)
};