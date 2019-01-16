/* 
以下是时间复杂度 O(n3) 的算法，使用了 hashMap。如果三个点能组成一个直角三角形，并且对称的点存在，则矩形存在。
矩形对角线线上的点是中心对称的，可以根据这个性质来计算第四个点。
讨论中 O(n2) 算法思路：两条线等长且中点相同，则这两条线就是矩形的对角线。用 HashMap 以线长和中心点为键，以坐标为值。
找出相同的键，然后根据坐标计算面积。
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
  var map = {}, minS = Infinity
  for (var i = 0; i < points.length; i++) {
      var x = points[i][0], y = points[i][1]
      if (!map[x]) {
          map[x] = {}
      }
      map[x][y] = true
  }
  
  for (var i = 0; i < points.length - 3; i++) {
      for (var j = i + 1; j < points.length - 2; j++) {
          for (var k = j + 1; k < points.length - 1; k++) {
              var x1 = points[i][0], y1 = points[i][1]
              var x2 = points[j][0], y2 = points[j][1]
              var x3 = points[k][0], y3 = points[k][1]
              // L1 是 (x1, y1) 对面的边
              var L1 = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3)
              var L2 = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3)
              var L3 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
              if (L1 === L2 + L3 && map[x2 + x3 - x1] && map[x2 + x3 - x1][y2 + y3 - y1]) minS = Math.min(minS, L2 * L3)
              if (L2 === L1 + L3 && map[x1 + x3 - x2] && map[x1 + x3 - x2][y1 + y3 - y2]) minS = Math.min(minS, L1 * L3)
              if (L3 === L1 + L2 && map[x1 + x2 - x3] && map[x1 + x2 - x3][y1 + y2 - y3]) minS = Math.min(minS, L1 * L2)
          }
      }
  }
  
  return minS < Infinity ? Math.sqrt(minS) : 0
};