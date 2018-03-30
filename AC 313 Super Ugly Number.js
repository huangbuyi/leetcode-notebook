/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  var k = [], p = new Array(primes.length).fill(0), i, j
  k[0] = 1
  for (i = 1; i < n; i++) {
      k[i] = Infinity
      for (j = 0; j < primes.length; j++) {
          k[i] = Math.min(k[i], k[p[j]] * primes[j])
      }
      for (j = 0; j < primes.length; j++) {
          if (k[i] === k[p[j]] * primes[j]) {
              p[j]++
          }
      }    
  }
  
  return k[n - 1]
};

var assert = require('assert')
assert.equal(nthSuperUglyNumber(10, [2,3,5]), 12)
assert.equal(nthSuperUglyNumber(1, [2,3,5]), 1)
assert.equal(nthSuperUglyNumber(1, []), 1)
assert.equal(nthSuperUglyNumber(100, [2,4,7,9]), 16807)