/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var mapS = {}, mapT = {} 
  for (var i = 0; i < s.length; i++) {
    var charS = s[i]
    var charT = t[i]
    if (mapS[charS] && mapS[charS] !== t[i]) {
      return false
    }
    if (mapT[charT] && mapT[charT] !== s[i]) {
      return false
    }

    mapS[charS] = t[i]
    mapT[charT] = s[i]
  }
  return s.length === t.length
};

var assert = require('assert')

assert.equal(isIsomorphic('a', 'b'), true)
assert.equal(isIsomorphic('ab', 'ba'), true)
assert.equal(isIsomorphic('abc', 'bca'), true)
assert.equal(isIsomorphic('abb', 'aab'), false)
assert.equal(isIsomorphic('ab', 'aa'), false)
assert.equal(isIsomorphic('egg', 'add'), true)
assert.equal(isIsomorphic('foo', 'bar'), false)
assert.equal(isIsomorphic('paper', 'title'), true)
assert.equal(isIsomorphic('', ''), true)
assert.equal(isIsomorphic('a', 'bc'), false)
