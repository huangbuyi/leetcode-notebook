/* 
虽然通过了，但感觉我的算法好像有问题。
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function(A) {
  var global = 0, local = 0, off = 0
  for (var i = 0; i < A.length; i++) {
      global += Math.max(A[i] + off - i, 0)
      off = Math.max(off + compare(A[i], i), 0)
      local += A[i] > A[i + 1] ? 1 : 0
  }
  
  return global === local
};

var compare = function(a, b) {
  if (a < b) return -1
  if (a === b) return 0
  return 1
}