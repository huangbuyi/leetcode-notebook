/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  var len = 1, count = 9
  while (n > len * count) {
    n -= len * count
    len++
    count *= 10
  }
  n--
  return Number(String(Math.pow(10, len - 1) + Math.floor(n / len))[n % len])
};

/* 
1-9 共9个数，长度1
10-99 共90个数，长度2
100-999 共900个数，长度3
...
*/

var assert = require('assert')
assert.equal(findNthDigit(1), 1)
assert.equal(findNthDigit(9), 9)
assert.equal(findNthDigit(10), 1)
assert.equal(findNthDigit(11), 0)
assert.equal(findNthDigit(1), 1)
assert.equal(findNthDigit(15), 2)
assert.equal(findNthDigit(10000), 7)