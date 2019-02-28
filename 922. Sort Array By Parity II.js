/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  var o = 1, e = 0
  
  while (e < A.length) {
    if (A[e] % 2 === 1) {
      var t = A[e]
      A[e] = A[o]
      A[o] = t
      o += 2
    } else {
      e += 2
    }
  }
  
  return A
};