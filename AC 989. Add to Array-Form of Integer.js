/* 
思路：大数相加。
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  var B = [], carry = 0, len

  while (K >= 1) {
      B.unshift(K % 10)
      K = Math.floor(K / 10)
  }
  
  if (B.length > A.length) {
      var t = A
      A = B
      B = t
  }
  
  for (var i = 0; i < A.length; i++) {
      var t = A.length - 1 - i
      A[t] = A[t] + (B[B.length - 1 - i] || 0) + carry
      carry = Math.floor(A[t] / 10)
      A[t] %= 10
  }
  
  if (carry) {
      A.unshift(carry)
  }
  
  return A
};