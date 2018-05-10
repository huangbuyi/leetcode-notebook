/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s) return true
  var si = 0

  for (var ti = 0; ti < t.length; ti++) {
    if (s[si] === t[ti]) {
      si++
      if (si === s.length) {
        return true
      }
    }
  }
  return false
};

var assert = require('assert')
assert.equal(isSubsequence('', ''), true)
assert.equal(isSubsequence('', 'ab'), true)
assert.equal(isSubsequence('a', ''), false)
assert.equal(isSubsequence('a', 'ab'), true)
assert.equal(isSubsequence('ab', 'a'), false)
assert.equal(isSubsequence('ac', 'abc'), true)
assert.equal(isSubsequence('ca', 'abc'), false)
assert.equal(isSubsequence('acg', 'abcdefg'), true)
assert.equal(isSubsequence('abc', 'ahbgdc'), true)
assert.equal(isSubsequence('axc', 'abcdefg'), false)
