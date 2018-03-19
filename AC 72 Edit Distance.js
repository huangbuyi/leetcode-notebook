var assert = require('assert')
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var dp = Array(word1.length + 1).fill().map(function () {return []}),
    		i, j

    dp[0][0] = 0
    for (i = 0; i < word1.length; i++) {
    	dp[i + 1][0] = i + 1
    }

    for (i = 0; i < word2.length; i++) {
    	dp[0][i + 1] = i + 1
    }

    for (i = 0; i < word1.length; i++) {
    	for (j = 0; j < word2.length; j++) {
    		dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1
    		if (word1[i] === word2[j]) {
    			dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j + 1])
    		}
    	}
    }

    return dp[word1.length][word2.length]
};

assert.equal(minDistance('abc', 'ac'), 1)
assert.equal(minDistance('abc', 'abc'), 0)
assert.equal(minDistance('', ''), 0)
assert.equal(minDistance('aaa', 'a'), 2)
assert.equal(minDistance('aaa', 'aaa'), 0)
assert.equal(minDistance('aaa', 'bbb'), 3)
assert.equal(minDistance('', 'abc'), 3)
assert.equal(minDistance('abcfadghjkdahufthkjashfjlhaeshljfgha', 'abasdfhjadkshfc'), 25)
assert.equal(minDistance('aa', 'qeraafafdaefda'), 12)