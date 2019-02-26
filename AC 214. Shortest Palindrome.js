/* 
从两边开始比较，为避免最坏情况，如
aaaaaaaaaaabaaaaaaaaa
用 HashMap 来记录左边已遍历的字符的位置，
如果遇到不同字符，则按照该字符在左边的位置，对应到右边响应位置，重新遍历。
如果字符不存在，则从该字符左边开始重新遍历。
讨论好像有更简单的方法，有空去看看。
*/

/**
 * @param {string} s
 * @return {string}
 */

var shortestPalindrome = function (s) {
  var i = 0, j = s.length - 1, map = {}

  while (i < j) {
    if (s[i] === s[j]) {
      map[s[i]] = i
      i++
      j--
    } else {
      j = map[s[j]] >= 0 ? j + map[s[j]] : j - 1
      i = 0
      map = {}
    }
  }

  return s.substr(i + j + 1).split('').reverse().join('') + s
};

