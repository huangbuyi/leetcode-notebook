/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  var a = 0, b = 0, c = 0
  for (var i = 0; i < S.length; i++) {
    if (S[i] === 'a') a++
    if (S[i] === 'b') b++
    if (S[i] === 'c') c++
    if (a < b || b < c) return false
  }
  return a === b && b === c
};