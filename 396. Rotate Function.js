/* 
F(0) -> F(1)过程中，A[0] ~ A[n-2] 都增加了 1 倍，A[n - 1] 减少了 n - 1 倍：
F(1) = F(0) + A[0] + ... + A[n - 2] - (n - 1) * A[n - 1]
F(1) = F(0) + A[0] + ... + A[n - 1] - n * A[n - 1]
F(1) = F(0) + SUM - n * A[n - 1]
数组旋转i次，最后一个值是 A[n - i]：
F(i) = F(i - 1) + SUM - n * A[n - i]
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  var sum = 0, F = 0, max
  for (var i = 0; i < A.length; i++) {
    sum += A[i]
    F += A[i] * i
  }
  max = F
  
  for (var i = A.length - 1; i >= 0; i--) {
    F = F + sum - A.length * A[i]
    max = Math.max(F, max)
  }
  
  return max
};