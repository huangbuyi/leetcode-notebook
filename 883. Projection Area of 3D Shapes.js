/* 
x方向投影是行最大值的和
y方向投影是列最大值的和
z方向投影，格子上有至少一个方块算一单位面积
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  var area = 0, max = 0, i
  for (i = 0; i < grid.length; i++) {
    max = 0
    for (var j = 0; j < grid[0].length; j++) {
      max = Math.max(grid[i][j], max)
      area += grid[i][j] > 0 ? 1 : 0
    }
    area += max
  }

  for (i = 0; i < grid[0].length; i++) {
    max = 0
    for (var j = 0; j < grid.length; j++) {
      max = Math.max(grid[j][i], max)
    }
    area += max
  }
  return area
};