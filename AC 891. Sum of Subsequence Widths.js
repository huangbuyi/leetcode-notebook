/* 
我的思路：先将 A 排序，i ~ j 间有 i - j - 1 个元素，这些元素和 A[i]、A[j] 组成的子集的 width 都是 A[j] - A[i]，共有 2^(i - j - 1) 个子集。
按照以上思路，在第49个测试用例报错 WA，按理说，前面的用例通过了，思路是没问题的。再仔细看了一遍代码，发现原来 windth * count 可能会太大，导致越界。错误答案1：
var sumSubseqWidths = function(A) {
  var res = 0, count = 1
  A = A.sort(function (a, b) { return a - b })
  
  for (var i = 1; i < A.length; i++) {
      var widthSum = 0
      for (var j = 0; j + i < A.length; j++) {
          widthSum += A[j + i] - A[j]
      }
      res = (res + widthSum * count) % (1e9 + 7)
      count = count * 2 % (1e9 + 7)
  }
  
  return res
};
因为之前 WA 很诡异，就先看了讨论，有了最下面的正确提交。不过，我还是按原来的思路修改了代码，WA 应该解决了，但 TLE 了。
原有很简单，下面的错误答案重复计算了。对于 A[i]，它被加了 1 + 2 + 2^2 + ... + 2^(i - 1) = 2^i - 1 次，被减了1 + 2 + 2^2 + ... + 2^(A.length - 2 - i) = 2^(A.length - 1 - i) - 1。
因此，A[i] 最终被被加了 2^i - 2^(A.length - 1 - i) 次，算法见最下面。错误答案2：
var sumSubseqWidths = function(A) {
  var res = 0, count = 1, mode = 1e9 + 7
  A = A.sort(function (a, b) { return a - b })
  
  for (var i = 1; i < A.length; i++) {
      for (var j = 0; j + i < A.length; j++) {
          res = (res + count * (A[j + i] - A[j])) % mode
      }
      count = (count << 1) % mode
  }
  
  return res
};
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubseqWidths = function (A) {
  var res = 0, count = 1, mode = 1e9 + 7
  A = A.sort((a, b) => a - b)

  for (var i = 0; i < A.length; i++) {
    res = (res + count * A[i] - count * A[A.length - 1 - i]) % mode
    count = (count << 1) % mode
  }

  return res
};