/* 
用三角形面积公式求解
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  var max = 0
  for (var i = 0; i < points.length; i++) {
    for (var j = i + 1; j < points.length; j++) {
      for (var k = j + 1; k < points.length; k++) {
        var s = (points[i][0] - points[k][0]) * (points[j][1] - points[k][1]) - (points[j][0] - points[k][0]) * (points[i][1] - points[k][1])
        s = Math.abs(s) / 2
        max = Math.max(max, s)
      }
    }
  }
  return max
};

/*
|(x1-x3)*(y2-y3)-(x2-x3)*(y1-y3)|/2
*/