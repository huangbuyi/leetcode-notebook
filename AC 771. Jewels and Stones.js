/* 
毫无成就感的一题
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var map = {}, count = 0
  
  for (var i = 0; i < J.length; i++) {
      map[J[i]] = true
  }
  
  for (var i= 0; i < S.length; i++) {
      if (map[S[i]]) count++
  }
  
  return count
};