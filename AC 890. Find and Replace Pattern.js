/* 
两个思路
1. 比较每个单词的 pattern，算法如下
2. 先格式化为统一 pattern，再比较，算法见 AC 890. Find and Replace Pattern2.js
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  return words.filter(w => isMatch(w, pattern))
};

var isMatch = function(a, b) {
  if (a.length !== b.length) return false
  var map1 = {}, map2 = {}
  for (var i = 0; i < a.length; i++) {
      if (!map1[a[i]]) map1[a[i]] = b[i]
      if (!map2[b[i]]) map2[b[i]] = a[i]
      if (map1[a[i]] !== b[i] || map2[b[i]] !== a[i]) return false
  }
  return true
}