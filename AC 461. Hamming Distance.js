/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  var res = 0, t = x ^ y
  while (t) {
    res += t & 1
    t >>= 1
  }
  return res
};