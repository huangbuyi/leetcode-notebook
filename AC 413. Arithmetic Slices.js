/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  var lh = 0, rh = 2, res = 0, n

  while (rh < A.length) {
    if (A[rh] - A[rh - 1] !== A[lh + 1] - A[lh]) {
      n = rh - lh
      res += (n - 1) * (n - 2) / 2
      lh = rh - 1
    }
    rh += 1
  }
  n = rh - lh
  res += (n - 1) * (n - 2) / 2

  return res
};

/* 
n 个数字的等差数列，有 (n - 1)(n - 2)/2 个子等差数列
3 1 = 1
4 3 = 2 + 1
5 6 = 3 + 2 + 1
6 10 = 4 + 3 + 2 + 1
...
*/

var assert = require('assert')
assert.equal(numberOfArithmeticSlices([1,2,3,4]),3)
assert.equal(numberOfArithmeticSlices([1,2,3]),1)
assert.equal(numberOfArithmeticSlices([1,2]),0)
assert.equal(numberOfArithmeticSlices([1,1,1]),1)
assert.equal(numberOfArithmeticSlices([1,2,3,4,5]),6)
assert.equal(numberOfArithmeticSlices([1,2,3,5,7]),2)
assert.equal(numberOfArithmeticSlices([]),0)
assert.equal(numberOfArithmeticSlices([-1,-2,-3]),1)
assert.equal(numberOfArithmeticSlices([1,2,3,4,5,6,7,1,3,5,7,9,6,3,0,-3,-2,-1]),28)