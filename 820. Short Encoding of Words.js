/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  var map = {}, res = 0
  words.sort(function (a, b) { return b.length - a.length })
  for (var i = 0; i < words.length; i++) {
    if (!map[words[i]]) {
      res += words[i].length + 1
      for (var j = 0; j < words[i].length; j++) {
        map[words[i].substr(j)] = true
      }
    }
  }
  return res
};