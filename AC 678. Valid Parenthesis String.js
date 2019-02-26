/*
思路，先让)来匹配(，如果(或)不够的话再让*来匹配
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  var s1 = [], s2 = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') s1.push(i)
    else if (s[i] === '*') s2.push(i)
    else if (s1.length > 0) s1.pop()
    else if (s2.length > 0) s2.pop()
    else return false
  }

  while (s1.length > 0) {
    if (s2.length === 0 || s1.pop() > s2.pop()) {
      return false
    }
  }

  return true
};