/**
 * @param {string[]} words
 * @return {number}
 */
var isShare = function (word1, word2) {
  for (var i = 0; i < word1.length; i++) {
    if (word2.indexOf(word1[i]) > -1) {
      return true
    }
  }
  return false
}

var maxProduct = function (words) {
  var max = 0

  for (var i = 0; i < words.length; i++) {
    for (var j = i + 1; j < words.length; j++) {
      if (!isShare(words[i], words[j])) {
        max = Math.max(max, words[i].length * words[j].length)
      }
    }
  }

  return max
};

/* 
循环求最大值
*/

var assert = require('assert')
assert.equal(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]), 16)
assert.equal(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]), 4)
assert.equal(maxProduct(["a", "aa", "aaa", "aaaa"]), 0)
assert.equal(maxProduct(["a", "a"]), 0)
assert.equal(maxProduct(["a", "b"]), 1)
assert.equal(maxProduct(["a", "ab"]), 0)
assert.equal(maxProduct(["a", "b", "abc"]), 1)
