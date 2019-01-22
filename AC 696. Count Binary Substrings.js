/* 
记录前一个 0/1 连续序列长度，以此计算子字符串个数。
审题不认真，没看到子字符串的01必须是连在一起的。
不过，如果01不必是连在一起的，计算子字符串的个数？好像也是个难题。
*/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  var i = 0, count = 0, curr = 0, last = 0, bit
  
  for (var i = 0; i < s.length; i++) {
      if (s[i] !== bit) {
          last = curr
          curr = 0
          bit = s[i]
      }
      curr++
      if (curr <= last) {
          count++
      }
  }
  
  return count
};