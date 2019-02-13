/* 
需要三次循环：
1. 统计 1 的个数，必须是三的倍数，因为二进制数相同，1的个数肯定是一样的
2. 三等分 1，找出三等分处的起始位置，用三个指针 p0、p1、p2 保存位置。
3. 因为最后一段末尾的 0 必须是数的一部分，而前两部分末尾的 0 可以变成后段的前置 0，所以 A.length - p2 就是二进制数的长度。一位一位地比较三部分 1、0 的顺序是否相同，
最后，按照题目要求返回相应的结果。另外，要注意处理全 0 的情况。 
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
  var sum = 0
  
  for (var i = 0; i < A.length; i++) {
      sum += A[i]
  }
  
  if (sum % 3 !== 0) return [-1, -1]
  if (sum === 0) return [0, A.length - 1]
  
  var tsum = 0, p0, p1, p2
  for (var i = 0; i < A.length; i++) {
      tsum += A[i]
      if (A[i] === 1) {
          if (tsum === 1) p0 = i
          if (tsum === sum / 3 + 1) p1 = i
          if (tsum === 2 * sum / 3 + 1) p2 = i
      }

  }
  
  var len = A.length - p2
  for (var i = 0; i < len; i++) {
      if (A[p0 + i] !== A[p1 + i] || A[p1 + i] !== A[p2 + i]) return [-1, -1]
  }
  
  return [p0 + len - 1, p1 + len]
};