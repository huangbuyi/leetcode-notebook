/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  var hexChar = '0123456789abcdef', res = ''

};

var assert = require('assert')
assert.equal(toHex(10), 'a')
assert.equal(toHex(26), '1a')
assert.equal(toHex(255), 'ff')