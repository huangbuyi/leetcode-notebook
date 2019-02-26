/* 
可能是我比较迟钝，只想到O(n2)解法，就超时了，然后去看讨论，看了好长时间才看明白。
解题思路很简单：
如果 SUM(0,i) % K = SUM(0,j) % K，则子数组 [i, j] 能整除 K。
只要知道 [0, i - 1] 中有多少使得以上等式成立，即可计算 [0, i] 能整除 K 子数组个数。
使用一个数组来保存，count[k] 表示存在 count[k] 个 SUM(0,x) % K = k
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  var prefix = 0, res = 0, count = new Array(K).fill(0)
  count[0] = 1

  for (var i = 0; i < A.length; i++) {
    prefix = (prefix + A[i] % K + K) % K
    res += count[prefix]
    count[prefix]++
  }

  return res
};