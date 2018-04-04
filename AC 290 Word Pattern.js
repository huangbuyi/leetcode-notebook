/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var pMap = {}, sMap = {}, strArr = str.match(/\S+/g)
    for (var i = 0; i < pattern.length; i++) {
      var p = pattern[i]
      var s = strArr[i]
      if (pMap[p] !== sMap[s]) {
        return false
      }
      sMap[s] = i
      pMap[p] = i
    }

    return pattern.length === strArr.length
};

var assert = require('assert')
assert.equal(wordPattern('a', 'dog'), true)
assert.equal(wordPattern('a', ' dog'), true)
assert.equal(wordPattern('a', 'dog '), true)
assert.equal(wordPattern('a', '    dog    '), true)
assert.equal(wordPattern('a', 'dog cat'), false)
assert.equal(wordPattern('ab', 'dog'), false)
assert.equal(wordPattern('ab', 'dog cat'), true)
assert.equal(wordPattern('ab', 'dog dog'), false)
assert.equal(wordPattern('aa', 'dog cat'), false)
assert.equal(wordPattern('aba', 'dog cat cat'), false)
assert.equal(wordPattern('abba', 'dog cat cat dog'), true)
assert.equal(wordPattern('abba', 'dog cat cat fish'), false)
assert.equal(wordPattern('aaaa', 'dog cat cat dog'), false)
assert.equal(wordPattern('abba', 'dog dog dog dog'), false)