/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (!num) return true
  while (num % 2 === 0) num /= 2
  while (num % 3 === 0) num /= 3
  while (num % 5 === 0) num /= 5
  return num === 1
};
/* 
题目很简单，只需注意输入值 0
*/
var assert = require('assert')
assert.equal(isUgly(1), true)
assert.equal(isUgly(2), true)
assert.equal(isUgly(3), true)
assert.equal(isUgly(5), true)
assert.equal(isUgly(7), false)
assert.equal(isUgly(1024), true)
assert.equal(isUgly(1023), false)
assert.equal(isUgly(1875), true)
assert.equal(isUgly(0), false)