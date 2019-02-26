/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  var k = 1, j = 0, res = []
  while (j++ < n) {
    res.push(k)
    if (k * 10 <= n) {
      k *= 10
    } else {
      if (k + 1 > n) {
        k = Math.floor(k / 10)
      }
      k += 1
      while (k % 10 === 0) {
        k /= 10
      }
    }
  }
  return res
};

/* 
n = 123
case 1: 1 -> 10 -> 100
case 2: 100 -> 101 -> 102
case 3: 109 -> 11 -> 110
case 4: 123 -> 12 -> 13
*/

var assert = require('assert')
console.log(lexicalOrder(32))
