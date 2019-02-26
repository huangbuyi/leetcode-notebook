/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var hash = {}
  for (var i = 0; i < magazine.length; i++) {
    hash[magazine[i]] = (hash[magazine[i]] || 0) + 1
  }
  for (var i = 0; i < ransomNote.length; i++) {
    if (!hash[ransomNote[i]]) {
      return false
    }
    hash[ransomNote[i]]--
  }
  return true
};

var assert = require('assert')
// example test
assert.equal(canConstruct('a', 'b'), false)
assert.equal(canConstruct('aa', 'ab'), false)
assert.equal(canConstruct('aa', 'aab'), true)
// more test
assert.equal(canConstruct('', 'a'), true)
assert.equal(canConstruct('a', ''), false)
assert.equal(canConstruct('a', 'a'), true)
assert.equal(canConstruct('aa', 'aa'), true)

