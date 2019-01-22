/* 
先去除无效数字，再取最小值
*/

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  var map = {}, min = Infinity
  for (var i = 0; i < fronts.length; i++) {
      if (fronts[i] === backs[i]) {
          map[fronts[i]] = true
      }
  }
  
  for (var i = 0; i < fronts.length; i++) {
      if (!map[fronts[i]]) {
          min = Math.min(fronts[i], min)
      }
      if (!map[backs[i]]) {
          min = Math.min(backs[i], min)
      }
  }
  
  return min < Infinity ? min : 0
};