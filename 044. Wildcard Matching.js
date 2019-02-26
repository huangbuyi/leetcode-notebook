var assert = require('assert')
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var dp = new Array(s.length + 1).fill(undefined).map(function () { return [] }),
    i, j

  // empty string macth empty pattern
  dp[0][0] = true

  for (i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      dp[0][i + 1] = dp[0][i]
    }
  }

  for (i = 0; i < s.length; i++) {
    for (j = 0; j < p.length; j++) {
      if (s[i] === p[j] || p[j] === '?') {
        dp[i + 1][j + 1] = dp[i][j]
      }
      if (p[j] === '*') {
        dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1]
      }
    }
  }

  return !!dp[s.length][p.length]
};

assert.equal(isMatch('aa', 'a'), false)
assert.equal(isMatch('aa', 'aa'), true)
assert.equal(isMatch('aaa', 'aa'), false)
assert.equal(isMatch('aa', '*'), true)
assert.equal(isMatch('aa', 'a*'), true)
assert.equal(isMatch('ab', '?*'), true)
assert.equal(isMatch('aab', 'c*a*b'), false)
assert.equal(isMatch('a', '?'), true)
assert.equal(isMatch('a', '??'), false)
assert.equal(isMatch('a', 'a*b'), false)
assert.equal(isMatch('ab', 'a*b'), true)
assert.equal(isMatch('', ''), true)
assert.equal(isMatch('', '*'), true)
assert.equal(isMatch('abfasdfasdfasdfadsdfs', 'a*'), true)