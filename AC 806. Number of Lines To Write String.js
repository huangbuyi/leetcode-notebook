/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  var widthHash = {}
  var a = 97
  var unit = 0
  var line = S ? 1 : 0

  for (var i = 0; i < widths.length; i++) {
    var char = String.fromCharCode(a + i)
    widthHash[char] = widths[i]
  }

  for (var i = 0; i < S.length; i++) {
    unit += widthHash[S[i]]

    if (unit > 100) {
      line++
      unit = widthHash[S[i]]
    }
  }

  return [line, unit]
};