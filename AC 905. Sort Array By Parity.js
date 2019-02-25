/* 
想到了快速排序
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var lh = 0, rh = A.length - 1
  while (lh < rh) {
      if (A[lh] & 1) {
          var t = A[lh]
          A[lh] = A[rh]
          A[rh] = t
          rh--
      } else {
          lh++
      }
  }
  return A
};