/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var d = [true], wordMap = [], i, j
  wordDict.map(function (word) {
    wordMap[word] = true
  })
  for (i = 1; i <= s.length; i++) {
    for (j = 0; j < i; j++) {
      if (d[j] && wordMap[s.substring(j, i)]) {
        d[i] = true
      }
    }
  }
  return !!d[s.length]
};

/* 
// 该算法最差情况会超时
var wordBreak = function(s, wordDict) {
  var dictMap = {}, segmentWord = [], segmentIndex = [], cache = '', i = 0
  wordDict.map(function (w) {
      dictMap[w] = true
  })
  while (1) {
      for (; i < s.length; i++) {
          cache += s[i]
          if (dictMap[cache]) {
              segmentWord.push(cache)
              segmentIndex.push(i)
              cache = ''
          }
      }
      if (cache === s) {
          return false
      }
  
      if (cache === '') {
          return true
      }
      console.log(segmentWord)
      cache = segmentWord.pop()
      i = segmentIndex.pop() + 1
  }
}; */


/* 
  此题是动态规划问题。
  1. 分解问题：字典组合的字符串，组成的字符串也是字典组合的。例如，s1、s2可以由字典组合，那么s1 + s2也可以由字典组合。
  2. 储存解：需要一个布尔值数组 d 来保存解，避免重复计算。d[i] 表示 0 到 i 子字符串是否是可组合的
  3. 组合：如果 d[j] 是可组合的，且 j 到 i 子字符串在字典中，则 d[i] 也是可组合的
*/

var assert = require('assert')
assert.equal(wordBreak('leetcode', ['leet', 'code']), true)
assert.equal(wordBreak('ab', ['a', 'b']), true)
assert.equal(wordBreak('ab', ['c', 'd']), false)
assert.equal(wordBreak('abcd', ['a', 'ab', 'cd']), true)
assert.equal(wordBreak('abc', ['a', 'ab', 'abc']), true)
assert.equal(wordBreak('abc', ['ab', 'bc']), false)
assert.equal(wordBreak('abc', []), false)
assert.equal(wordBreak('abccccabbaaac', ['a', 'b', 'c']), true)
// Time limit
assert.equal(wordBreak(
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
  ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
), false)
