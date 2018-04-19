/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var i = 0, j = s.length - 1, vowels = ['a','e','i','o','u'], s = s.split(''), tmp
  while (1) {
    while (s[i] && vowels.indexOf(s[i].toLowerCase()) === -1) {
      i++
    }
    while (s[j] && vowels.indexOf(s[j].toLowerCase()) === -1) {
      j--
    }
    if (i >= j) {
      return s.join('')
    }
    tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
    i++
    j--
  }
};

var assert = require('assert')
assert.equal(reverseVowels(''), '')
assert.equal(reverseVowels('a'), 'a')
assert.equal(reverseVowels('aA'), 'Aa')
assert.equal(reverseVowels('hello'), 'holle')
assert.equal(reverseVowels('abc'), 'abc')
assert.equal(reverseVowels('ai'), 'ia')
assert.equal(reverseVowels('leetcode'), 'leotcede')
assert.equal(reverseVowels('aeiou'), 'uoiea')