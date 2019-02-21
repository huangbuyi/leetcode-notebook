/* 
用 hashMap 保存每个位置缝的数量，缝最多的那个位置就是划线的地方。
讨论区出了个美国总统，川普同志，这题还是关于“墙”的问题。哈哈，因吹斯汀。
*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  var map = {}, min = wall.length
  for (var i = 0; i < wall.length; i++) {
      var width = 0
      for (var j = 0; j < wall[i].length - 1; j++) {
          width += wall[i][j]
          map[width] = map[width] ? map[width] + 1 : 1
          min = Math.min(wall.length - map[width], min)
      }
  }
  return min
};