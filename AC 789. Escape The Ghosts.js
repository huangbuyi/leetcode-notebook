/*
虽然题目描述了这么多，但其实道理很简单。
鬼根本不需要去抓人，只需要比人先到终点就能抓到人。实际上，这题只需要考虑人和鬼谁到终点要移动的次数少。
*/

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  var move = Math.abs(target[0]) + Math.abs(target[1])
  
  for (var i = 0; i < ghosts.length; i++) {
      var m = Math.abs(ghosts[i][0] - target[0]) + Math.abs(ghosts[i][1] - target[1])
      if (m <= move) {
          return false
      }
  }
  
  return true
};