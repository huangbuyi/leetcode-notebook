/* 
讨论的思路：
count[s1] 表示有 count[s1] 个从 0 开始的子数组，它的和为 s1。
如果 0 到第 i 个元素，和为 s2，如果 s2 - s1 === S，那么就有 count[s1] 种组合。
以此累加。
*/

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  var count = new Array(A.length + 1).fill(0), s = 0, res = 0
  count[0] = 1
  
  for (var i = 0; i < A.length; i++) {
    s += A[i]
    if (s >= S) {
      res += count[s - S]
    }
    count[s]++
  }
  
  return res
};