/* 
英语着急，题目看了好多遍才看懂。性质：字符串 S1 和 S2 奇数位和偶数位字符相同，不考虑顺序。将有以上性质的字符归为一类，总共能归几类。
*/

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  var map = {}, count = 0
  for (var i = 0; i < A.length; i++) {
      var odd = [], even = []
      for (var j = 0; j < A[i].length; j++) {
          if (j & 1) {
              odd.push(A[i][j])
          } else {
              even.push(A[i][j])
          }
      }
      var key = odd.sort().join('') + '-' + even.sort().join('')
      if (!map[key]) {
          count++
          map[key] = true
      }
  }
  return count
};