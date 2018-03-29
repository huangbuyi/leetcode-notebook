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
/* 
我的解法，使用两个哈希表保存保存 S 到 T 的映射和 T 到 S 的映射。如果存在字符不符合映射，则返回 false。
其它解法：
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int m1[256] = {0}, m2[256] = {0}, n = s.size();
        for (int i = 0; i < n; ++i) {
            if (m1[s[i]] != m2[t[i]]) return false;
            m1[s[i]] = i + 1;
            m2[t[i]] = i + 1;
        }
        return true;
    }
};
同样是两个哈希表，不同的是它们映射同一个值 a -> 3，b -> 3 来表示它们是关联的映射。
*/
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
