/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var res = '', car = 0, len = Math.max(num1.length, num2.length)
  for (var i = 1; i <= len; i++) {
    var n = Number(num1[num1.length - i] || 0) + Number(num2[num2.length - i] || 0) + car
    res = '' + n % 10 + res
    car = n > 9 ? 1 : 0
  }

  return (car > 0 ? '1' : '') + res
};

var assert = require('assert')
assert.equal(addStrings('1', '1'), '2')
assert.equal(addStrings('5', '5'), '10')
assert.equal(addStrings('99', '99'), '198')
assert.equal(addStrings('0', '0'), '0')
assert.equal(addStrings('11111111111', '222222222222'), '233333333333')