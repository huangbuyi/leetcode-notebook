/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  var absent = 0, late = 0
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'A' && ++absent > 1) return false
    if (s[i] === 'L' && ++late > 2) return false
    if (s[i] !== 'L') late = 0
  }
  return true
};