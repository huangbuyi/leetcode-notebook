/* 
从左往右，遇到 0 就 flip 之后的 K 个元素，时间复杂度 O(NK)。
但其实不需要真的去 flip K 个元素，只需要知道第 i 个元素被 flip 过多少次。
使用一个长度为 K 窗口，复用 A 来保存 flip 的位置。
时间复杂度 O(N)，空间复杂度 O(1)
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
  var res = 0, flip = 0, i
  for (i = 0; i < A.length; i++) {
    if (i >= K) {
      flip -= A[i - K]
    }
    if ((A[i] + flip) % 2 === 0) {
      if (i + K > A.length) return -1
      A[i] = 1
      flip++
      res++
    } else {
      A[i] = 0
    }

  }
  return res
};