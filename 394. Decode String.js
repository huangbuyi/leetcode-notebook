/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var i = 0, res = ''
  var decodeBrackets = function () {
    var res = ''
    while (s[i] !== ']' || i < s.length) {
      res += s[i]
    }
    return res
  }

  while (i < s.length) {

    if (s[i] === '[') {
      decodeBrackets()
    }
  }


};