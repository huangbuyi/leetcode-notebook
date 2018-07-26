/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var res = 0, hash = {}, mid = 0
  for (var i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
  }

  for (var i in hash) {
    res += hash[i] - hash[i] % 2
    if (hash[i] % 2 === 1) {
      mid = 1
    }
  }

  return res + mid
};

/* 某个字母有偶数个，那它都可以 Palindrome，有奇数个，可以选出一个放中间 */

var assert = require('assert')
assert.equal(longestPalindrome(''), 0)
assert.equal(longestPalindrome('a'), 1)
assert.equal(longestPalindrome('Aa'), 1)
assert.equal(longestPalindrome('ab'), 1)
assert.equal(longestPalindrome('abc'), 1)
assert.equal(longestPalindrome('aa'), 2)
assert.equal(longestPalindrome('aab'), 3)
assert.equal(longestPalindrome('aabbcc'), 6)
assert.equal(longestPalindrome('abccccdd'), 7)