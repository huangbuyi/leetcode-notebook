/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var curr = 0, next = 100

  while (curr !== next) {
    curr = next
    next = Math.round(num / 2 / curr + curr / 2)
  }

  return curr * curr === num
};


/* 
使用牛顿-拉弗森方法，求解方程 x*x - num = 0 的解，（y = x*x - num)
https://www.zhihu.com/question/20690553
*/
var assert = require('assert')
assert.equal(isPerfectSquare(1), true)
assert.equal(isPerfectSquare(2), false)
assert.equal(isPerfectSquare(4), true)
assert.equal(isPerfectSquare(5), false)
assert.equal(isPerfectSquare(16), true)
assert.equal(isPerfectSquare(1369), true)
assert.equal(isPerfectSquare(65535), false)
assert.equal(isPerfectSquare(65536), true)
assert.equal(isPerfectSquare(65537), false)
assert.equal(isPerfectSquare(1522756), true)