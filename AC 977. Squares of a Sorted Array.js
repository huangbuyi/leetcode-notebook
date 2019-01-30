/* 
找出负数到正数交界的位置，负数从大到小，正数从小到大进行比较。时间复杂度O(n)。
讨论有更简单的方法，与我的算法从中间往两边相反，直接从两边向中间遍历，从平方最大值开始比较，能省去很多步骤。
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  var r = 0, res = []
  while (A[r] < 0) {
      r++
  }
  
  var l = r - 1
  console.log(l, r)
  while (l >= 0 && r < A.length) {
      if (A[l] * A[l] < A[r] * A[r]) {
          res.push(A[l] * A[l])
          l--
      } else {
          res.push(A[r] * A[r])
          r++
      }
  }
  
  while (l >= 0) {
      res.push(A[l] * A[l])
      l--
  }
  
  while (r < A.length) {
      res.push(A[r] * A[r])
      r++
  }
  
  return res
};