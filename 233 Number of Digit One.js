/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  var count = 0
  while (1) {
    if (n)
      count += Math.floor(n / 10)
  }
};

/* 
F(11111) = 1111 + F(10000) + 111 + F(1000) + 11 + F(100) + 1 + F(10)
*/

var assert = require('assert')
assert.equal(countDigitOne(0), 0)
assert.equal(countDigitOne(1), 1)
assert.equal(countDigitOne(9), 1)
assert.equal(countDigitOne(10), 2)
assert.equal(countDigitOne(20), 12)
assert.equal(countDigitOne(99), 20)
assert.equal(countDigitOne(110), 33)
assert.equal(countDigitOne(999), 300)
assert.equal(countDigitOne(9999), 4000)
assert.equal(countDigitOne(110), 4000)