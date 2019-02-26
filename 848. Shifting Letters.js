/* 
两点建议：从后往前遍历，不要一个个shift
*/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (S, shifts) {
  var res = '', sum = 0, code
  for (var i = S.length - 1; i >= 0; i--) {
    sum = (sum + shifts[i]) % 26
    code = 97 + (S[i].charCodeAt(0) + sum - 97) % 26
    res = String.fromCharCode(code) + res
  }
  return res
};