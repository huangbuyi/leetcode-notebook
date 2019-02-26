/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  var s = N.toString().split(''), start = 0, i = 0

  while (s[i] <= s[i + 1]) {
    if (s[i] < s[i + 1]) start = i + 1
    i++
  }

  if (i === s.length - 1) return N
  s[start] = s[start] - 1
  for (var i = start + 1; i < s.length; i++) {
    s[i] = '9'
  }

  return Number(s.join(''))
};