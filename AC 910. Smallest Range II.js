/* 
思路：分两种情况
1. 差值足够小，全部值加 K(或减K)
2. 将小等于 A[i] 值的加 K，大于 A[i] 值减 K，使得差值最小，这就要找出这个i值。
要注意变换以后，最大值和最小值可能会发生变化
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  var res
  A.sort(function(a, b) { return a - b })
  res = A[A.length - 1] - A[0]
  if (res <= K) return res
  
  for (var i = 1; i < A.length; i++) {
      var max = Math.max(A[i - 1] + K, A[A.length - 1] - K)
      var min = Math.min(A[i] - K, A[0] + K)
      res = Math.min(max - min, res)
  }
  
  return res
};
