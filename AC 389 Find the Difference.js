/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  var tmp = 0
  for (var i = 0; i < s.length; i++) {
    tmp ^= s[i].charCodeAt()
    tmp ^= t[i].charCodeAt()
  }
  return String.fromCharCode(tmp ^ t[s.length].charCodeAt())
};

/* 
两个字符串中，除了新加的字符，其它字符都是重复的，因此直接利用异或性质即可
*/

var assert = require('assert')
assert.equal(findTheDifference('a', 'ab'), 'b')
assert.equal(findTheDifference('a', 'aa'), 'a')
assert.equal(findTheDifference('aaaab', 'aaaaab'), 'a')
assert.equal(findTheDifference('bcd', 'bacd'), 'a')
assert.equal(findTheDifference('abcd', 'dcbaa'), 'a')