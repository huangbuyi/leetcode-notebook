/* 
我的思路：
假设 A = 001000，S = 1。
前面有 [empty,0,00] 3 种组合，后面有 [empty,0,00,000] 4 种组合，共有 12 种组合。
count[i] 保存第 i 个 1 到第 i + 1 个 1 间的组合数量。
count[i] * count[i - S] 表示第 i 个 1 和第 i + S 个 1 的组合数量。
要注意 S 为 0 的情况。
热门讨论思路和下面算法类似，见 930. Binary Subarrays With Sum2.js。
*/

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  var count = new Array(A.length + 1).fill(0), sum = 0, res = 0
  count[0] = 1
  
  for (var i = 0; i < A.length; i++) {
    sum += A[i]
    count[sum]++
  }
  
  if (S > 0) {
    for (var i = S; i <= sum; i++) {
      res += count[i] * count[i - S]
    }   
  } else {
    for (var i = S; i <= sum; i++) {
      res += count[i] * (count[i] - 1) / 2
    }
  }
  
  return res
};