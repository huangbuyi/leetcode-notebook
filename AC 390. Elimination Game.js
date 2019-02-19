/* 
我的思路：第 1 次，删除所有 2n + 1 元素。第 k 次，删除所有 2kn + s 元素，s 为每轮删除后最左边的值，当只剩下一个元素时，s 就是最后的值。
第一轮从前往后，逢2n + 1 删除，必删第一个元素，所以 s = 1 + 1 = 2
第二轮从后往前，逢4n + 2 删除，如果元素个数为奇数，删除第一个元素，所以 s = s + 2 = 4。如果为偶数，不删除第一个元素，所以 s = s
第 k1 轮从前往后，逢 (2^k1)n + s 删除，必删第一个元素，s = s + 2^k1
第 k2 轮从后往前，逢 (2^k2)n + s 删除，如果元素个数为奇数，必删第一个元素，s = s + 2^k2。如果为偶数，不删除第一个元素，所以 s = s
*/

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  var s = 1, k = 1, a = 1
  while (n > 1) {
      if (k & 1 || n & 1) s += a
      k++
      a <<= 1
      n >>= 1
  }
  return s
};