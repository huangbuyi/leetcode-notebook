/* 
想了很久，尽管算法 AC 了，时间复杂度也在 O(logN) 内，但实现比较粗糙。我要去讨论区向大佬认真学习。
*/

/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
var atMostNGivenDigitSet = function(D, N) {
  var amount = new Array(10).fill(0), res = 1, sum = 0, base = 1, map = {}
  for (var i = 0; i < D.length; i++) {
      amount[Number(D[i]) + 1] = 1
      map[Number(D[i])] = true
  }
  for (var i = 1; i < amount.length; i++) {
      amount[i] += amount[i - 1]
  }

  while (N >= 1) {
      if (!map[N % 10]) res = 0
      res += amount[N % 10] * base
      base *= D.length
      sum += base
      N = Math.floor(N / 10)
  }
  
  return res + sum - base
};