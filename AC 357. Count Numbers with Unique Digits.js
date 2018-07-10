/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  var res = 1, n = Math.min(n, 10), counts = 9

  for (var i = 0; i < n; i++) {
    res += counts
    counts = counts * (9 - i)
  }

  return res
};

/*
对于N位数字，如3位数字，范围从100~999，选取非重复数字。
百位用1~9共9种选法，十位有0~9减百位选取的数有9种选法，个位有8种选法，共有9X9X8种选法。
n counts
0 1
1 9
2 9X9
3 9X9X8
4 9X9X8X7
N 9X9X8...X(11-N)    (N<=10)
累加起来即可得出结果
*/

var assert = require('assert')
assert.equal(countNumbersWithUniqueDigits(0), 1)
assert.equal(countNumbersWithUniqueDigits(1), 10)
assert.equal(countNumbersWithUniqueDigits(2), 91)
assert.equal(countNumbersWithUniqueDigits(5), 32491)
assert.equal(countNumbersWithUniqueDigits(10), 8877691)
assert.equal(countNumbersWithUniqueDigits(100), 8877691)