/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  return Math.pow(3, Math.floor(n / 3)) * [1, 4 / 3, 2][n % 3]
};

/* 
分为 2, 4 及 大于 4 都比 3 小。完整证明待续...
*/

var assert = require('assert')
assert.equal(integerBreak(2), 1)
assert.equal(integerBreak(3), 2)
assert.equal(integerBreak(4), 4)
assert.equal(integerBreak(5), 6)
assert.equal(integerBreak(6), 9)
assert.equal(integerBreak(9), 27)
assert.equal(integerBreak(10), 36)
assert.equal(integerBreak(11), 54)
assert.equal(integerBreak(20), 1458)
assert.equal(integerBreak(27), 19683)
