/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  var longestWord = ''
  
  for (var i = 0; i < d.length; i++) {
      if (isMatch(s, d[i])) {
          if (d[i].length > longestWord.length) {
              longestWord = d[i]
          } else if (d[i].length === longestWord.length) {
              longestWord = [d[i], longestWord].sort()[0]
          }
      }
  }
  
  return longestWord
};

var isMatch = function(w1, w2) {
  for (var i = 0, j = 0; i < w1.length; i++) {
      if (w1[i] === w2[j]) {
          j++
          if (j >= w2.length) {
              return true
          }
      }
  }
  return false
}