/* 
思路：深度优先搜索(DFS)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var X = grid.length, Y = grid[0].length, max = 0
  
  for (var x = 0; x < X; x++) {
    for (var y = 0; y < Y; y++) {
      max = Math.max(helper(x, y, grid), max)
    }
  }
  
  return max
};

var helper = function(x, y, grid) {
  if (grid[x][y] === 0) return 0
  grid[x][y] = 0
  var s = 1
  if (x > 0) s += helper(x - 1, y, grid)
  if (x < grid.length - 1) s += helper(x + 1, y, grid)
  if (y > 0) s += helper(x, y - 1, grid)
  if (y < grid[0].length - 1) s += helper(x, y + 1, grid)
  return s
}