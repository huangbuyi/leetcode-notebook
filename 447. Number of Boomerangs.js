/* 
思路：使用 HashMap 保存与点等距离的点的个数 n，这些点组合成 n*(n-1) 个 Boomerangs。
因为 n*(n - 1) = 2*(1 + 2 + 3 + ... + n-1)，所以不必再遍历一次 HashMap。
时间复杂度 O(n^2)
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var res = 0
  for (var i = 0; i < points.length; i++) {
    var map = {} 
    for (var j = 0; j < points.length; j++) {
      var dx = points[j][0] - points[i][0], dy = points[j][1] - points[i][1]
      var distance = dx * dx + dy * dy
      if (!map[distance]) map[distance] = 0
      res += 2 * map[distance]
      map[distance]++
    }
  }
  return res
};