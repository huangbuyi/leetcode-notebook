/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  while (n) {
    if (!((n & 1) ^ (n >> 1) & 1)) {
      return false
    }
    n >>= 1
  }
  return true
};