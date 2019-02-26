/* 
毫无成就感
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var map = {}, res = []

  for (var i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
  }

  for (var c in map) {
    res.push(c.repeat(map[c]))
  }

  return res.sort(function (a, b) { return b.length - a.length }).join('')
};