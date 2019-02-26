/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  var i2 = 0, i3 = 0, i5 = 0, k = [1], i
  for (i = 1; i < n; i++) {
    k[i] = Math.min(k[i2] * 2, k[i3] * 3, k[i5] * 5)
    if (k[i] === k[i2] * 2) i2++
    if (k[i] === k[i3] * 3) i3++
    if (k[i] === k[i5] * 5) i5++
    console.log(i2, i3, i5)
  }

  return k[n - 1]
};

/* 
此题的关键是状态转移的方式。k(n) 不是由 k(n - 1) 转移的，而是由前面的某个值乘以 2，3 或 5 得到的。
例如，k(10)=12 由 k(6)*2 得到，k(11)=15 由 k(3)*5 得到。所以，k(n) 的值需要另外三个值来确定。
于是，得到状态转移方程：k(n) = Min(k(n2)*2, k(n3)*3, k(n5)*5), k(1) = 1
K(2) = Min(k(1)*2, k(1)*3, k(1)*5) = 2
k(3) = Min(k(2)*2, k(1)*3, k(1)*5) = 3
...
k(10) = Min(k(6)*2, k(4)*3, k(3)*5) = 12

要注意的是，n2、n3、n5 表示的是第几个 ugly number，不是 ugly number 由这几个数相乘得到的。
*/

var assert = require('assert')
// assert.equal(nthUglyNumber(1), 1)
// assert.equal(nthUglyNumber(2), 2)
// assert.equal(nthUglyNumber(3), 3)
// assert.equal(nthUglyNumber(4), 4)
// assert.equal(nthUglyNumber(5), 5)
// assert.equal(nthUglyNumber(10), 12)
// assert.equal(nthUglyNumber(12), 16)
assert.equal(nthUglyNumber(1000), 51200000)
