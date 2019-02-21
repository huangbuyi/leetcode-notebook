/* 
思路：看代码
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  var low = 0, high = S.length, res = []
  
  for (var i = 0; i < S.length; i++) {
      if (S[i] === 'I') res.push(low++)
      else res.push(high--)
  }
  
  res.push(res[res.length - 1] === low ? high : low)
  return res
};