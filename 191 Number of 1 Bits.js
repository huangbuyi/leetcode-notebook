var assert = require('assert')
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0
  while (n >= 1) {
      count += n % 2
      n = n / 2 >> 0
  }
  return count
};
assert.equal(hammingWeight(255), 8)
assert.equal(hammingWeight(256), 1)
assert.equal(hammingWeight(0), 0)
assert.equal(hammingWeight(1), 1)
assert.equal(hammingWeight(1351), 1)