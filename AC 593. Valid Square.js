/* 
看讨论有更简单方法，正方形只有两种长度的边，只要判断四个点组成的六个直线只有两种长度即可，甚至不需要判断直角。
*/

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  var points = [p1, p2, p3, p4], sides = []
  
  for (var i = 0; i < points.length; i++) {
      for (var j = i + 1; j < points.length; j++) {
          sides.push(Math.pow(points[j][0] - points[i][0], 2) + Math.pow(points[j][1] - points[i][1], 2))
      }
  }
  
  sides.sort(function(a, b) {
      return a - b
  })
  
  return sides[0] !== 0 && sides[0] === sides[3] && sides[4] === sides[5] && 2 * sides[0] === sides[4]
};