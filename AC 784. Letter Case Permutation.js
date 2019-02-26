/* 
思路：遍历字符串，每遇到字母，改变大小写，与所有结果进行组合。
*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  var res = [S]

  for (var i = 0; i < S.length; i++) {
    var code = S.charCodeAt(i)
    if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
      var c = code <= 90 ? S[i].toLowerCase() : S[i].toUpperCase()
      var len = res.length
      for (var j = 0; j < len; j++) {
        res.push(res[j].substring(0, i) + c + res[j].substring(i + 1))
      }
    }
  }

  return res
};