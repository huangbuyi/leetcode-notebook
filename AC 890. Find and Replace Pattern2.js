/* 
两个思路
1. 比较每个单词的 pattern，算法见 AC 890. Find and Replace Pattern.js
2. 先格式化为统一 pattern，再比较，算法如下
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  var pattern = format(pattern)
  return words.filter(w => format(w) === pattern)
};

var format = function(s) {
  var map = {}, res = '', code = 97
  for (var i = 0; i < s.length; i++) {
      if (!map[s[i]]) map[s[i]] = String.fromCharCode(code++)
      res += [map[s[i]]]
  }
  return res
}