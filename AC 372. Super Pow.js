/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  var res = 1, base = 1337

  function powmod(x, n) {
    res = 1
    for (var i = 0; i < n; i++) {
      res = (res * x) % base
    }
    return res
  }

  for (var i = 0; i < b.length; i++) {
    res = (powmod(res, 10) * powmod(a, b[i])) % 1337
  }

  return res
};

/* 
公式：(a*b)%k = ((a%k)*(b%k))%k
2^1234567 = (2^1234560 % k)*(2^7 % k) % k
          = ((2^123456)^10 % k)*(2^7 % k) % k
F(1234567) = (F(123456)^10 % k)*(2^7 % k)

1234^10 % k = (1234^9 % k)*(1234 % k) % k
F(10) = (F(9) % k)*(1024 % k) % k
*/


var assert = require('assert')
assert.equal(superPow(2, [0]), 1)
assert.equal(superPow(2, [1]), 2)
assert.equal(superPow(2, [3]), 8)
assert.equal(superPow(2, [1, 0]), 1024)
assert.equal(superPow(2, [1, 1]), 2048 - 1337)
assert.equal(superPow(2, [1, 6]), 65536 % 1337)
assert.equal(superPow(1337, [1, 2, 3]), 0)
assert.equal(superPow(1338, [1]), 1)
