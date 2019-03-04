/* 
思路：
1 ^ 1 = 0
0 ^ 1 = 1
求 1101010 的 compement number，可以计算：
1101010 ^ 1111111
先计算 num 的二进制长度 n，可以直接用 (1 << n) - 1 计算，
但计算 1 << 32 会超出 32-bit 无符号整数的取值范围(在 JavaScript 没什么影响)。
所以，用循环获取数字 1111...。
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var ones = 1, t = num
  while (t > 1) {
    t >>= 1
    ones = (ones << 1) + 1
  }
  return num ^ ones
};