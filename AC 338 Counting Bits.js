/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var i = 0, n = 1, res = [0]
  while (i + n <= num) {
    res[i + n] = res[i] + 1
    i++
    if (i >= n) {
      i = 0
      n *= 2
    }
  }
  return res
};

/* 
当 2^n > x 有  F(2^n + x) = F(x) + 1
已知 F(0) = 0
F(1) = F(0) + 1

F(2) = F(0) + 1
F(3) = F(1) + 1

F(4) = F(0) + 1
F(5) = F(1) + 1
F(6) = F(2) + 1
F(7) = F(3) + 1

F(8) = F(0) + 1
F(9) = F(1) + 1
F(10) = F(2) + 1
F(11) = F(3) + 1
F(12) = F(4) + 1
F(13) = F(5) + 1
F(14) = F(6) + 1
F(15) = F(7) + 1
...

讨论使用位运算，代码更简单，复杂度相同：
public int[] countBits(int num) {
    int[] f = new int[num + 1];
    for (int i=1; i<=num; i++) f[i] = f[i >> 1] + (i & 1);
    return f;
}
*/

var assert = require('assert')
assert.deepStrictEqual(countBits(0), [0])
assert.deepStrictEqual(countBits(1), [0, 1])
assert.deepStrictEqual(countBits(2), [0, 1, 1])
assert.deepStrictEqual(countBits(10), [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2])