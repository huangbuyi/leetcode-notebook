/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var res = 0, base = 5
  while (base <= n) {
      res += Math.floor(n / base)
      base *= 5
  }
  return res
};

/* 
此题要求找出阶乘结果末尾0的个数。乘法中只有偶数乘 5 才会得到末尾的 0，阶乘中偶数要远大于 5 的个数，所以只需要计算阶乘中 5 的个数。
要注意，25 可分解为 5 * 5，算两个 5；250 可分解为 5 * 5 * 5 * 2 算三个 5。
因此，只需要计算 n 中有几个 5 的倍数，25 的倍数，125的倍数...，再累加即可得出结果。
*/