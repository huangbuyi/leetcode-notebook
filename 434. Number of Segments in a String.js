/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  var count = s.length === 0 || s[0] === ' ' ? 0 : 1

  for (var i = 1; i < s.length; i++) {
    if (s[i] !== ' ' && s[i - 1] === ' ') {
      count++
    }
  }

  return count
};