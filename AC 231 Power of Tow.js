/**
 * @param {number} n
 * @return {boolean}
 */
/* 开方算法
var isPowerOfTwo = function(n) {
  var l = Math.log2(n)
  return n < 1 ? false : l === parseInt(l)
}; 
*/

// 位运算算法
var isPowerOfTwo = function(n) {
  return n > 0 && !(n & (n - 1))
};

/* 
可能很多人首先想到的是连除，最简单，当然性能也是最差的。性能：位运算 > 开方 > 连除。
如果 n 是 2 的幂，n 只有一个 1 (例如 1000 0000)，n - 1 除了第一位，其它位都是 1（例如 0111 1111）
n 和 n - 1 异或后则全为 0 
*/

var assert = require('assert')
assert.equal(isPowerOfTwo(0), false)
assert.equal(isPowerOfTwo(1), true)
assert.equal(isPowerOfTwo(2), true)
assert.equal(isPowerOfTwo(4), true)
assert.equal(isPowerOfTwo(8), true)
assert.equal(isPowerOfTwo(256), true)
assert.equal(isPowerOfTwo(256 * 256), true)
assert.equal(isPowerOfTwo(0), false)
assert.equal(isPowerOfTwo(-1), false)
assert.equal(isPowerOfTwo(255), false)
assert.equal(isPowerOfTwo(1234), false)