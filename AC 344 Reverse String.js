/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var tmp = '', right, s = s.split('')
  for (var i = 0; i < s.length / 2; i++) {
    right = s.length - 1 - i
    tmp = s[i]
    s[i] = s[right]
    s[right] = tmp
  }
  return s.join('')
};

/* 
解法2：
var reverseString = function(s) {
  return s.split('').reverse().join('')
};
*/

var assert = require('assert')
assert.equal(reverseString(''), '')
assert.equal(reverseString('a'), 'a')
assert.equal(reverseString('ab'), 'ba')
assert.equal(reverseString('abc'), 'cba')
assert.equal(reverseString('hello'), 'olleh')