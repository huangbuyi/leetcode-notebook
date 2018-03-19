var assert = require('assert')

var isMatch = function (s, p) {
	var dp = new Array(p.length + 1).fill(undefined).map(function () {
		return new Array()
	}), i, j

	dp[0][0] = true
	for (i = 0; i < p.length; i++) {
		if (p[i] === '*' && dp[i - 1][0]) {
			dp[i + 1][0] = true
		}
	}

	for (i = 0; i < p.length; i++) {
		for (j = 0; j < s.length; j++) {
			if (p[i] === s[j] || p[i] === '.') {
				dp[i + 1][j + 1] = dp[i][j]
			}
			if (p[i] === '*') {
				if (s[j] === p[i - 1] || p[i - 1] === '.') {
					dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j] || dp[i - 1][j + 1] 
				} else {
					dp[i + 1][j + 1] = dp[i -1][j + 1]
				}
			}
		}
	}

	return !!dp[p.length][s.length]
}

assert.equal(isMatch('aaaabbcaaa', 'a*a....a*a'), true)
assert.equal(isMatch('aa', 'a'), false)
assert.equal(isMatch('aa', 'aa'), true)
assert.equal(isMatch('aaa', 'aa'), false)
assert.equal(isMatch('aa', 'a*'), true)
assert.equal(isMatch('aa', '.*'), true)
assert.equal(isMatch('ab', '.*'), true)
assert.equal(isMatch('aab', 'c*a*b'), true)
assert.equal(isMatch('', 'a*'), true)
assert.equal(isMatch('abc', ''), false)
assert.equal(isMatch('abc', '...'), true)
assert.equal(isMatch('abc', '.*.*'), true)

assert.equal(isMatch('ab', '.*c'), false)
assert.equal(isMatch('a', 'ab*'), true)
assert.equal(isMatch('a', 'ab*c*d*e*f*'), true)
assert.equal(isMatch('a', 'a*b*c*d*e*'), true)
assert.equal(isMatch('', '.'), false)