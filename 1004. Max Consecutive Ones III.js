/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  var lh = 0, rh = 0, zero = 0, max = 0
  while (rh < A.length) {
    if (A[rh] === 0) zero++
    while (zero > K) {
      max = Math.max(rh - lh, max)
      if (A[lh++] === 0) {
        max = Math.max(rh - lh, max)
        zero--
      }
    }
    rh++
  }
  return Math.max(rh - lh, max)
};