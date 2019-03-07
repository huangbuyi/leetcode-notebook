/* 
DFS 没什么好说的了。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  var M = grid.length, N = grid[0].length, rotten = [], res = 0, count = 0
  for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
      if (grid[i][j] === 2) rotten.push([i, j])
      if (grid[i][j] === 1) count++
    }
  }
  
  while (rotten.length > 0) {
    var tRotten = []
    for (var i = 0; i < rotten.length; i++) {
      var x = rotten[i][0], y = rotten[i][1]
      if (x > 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2
        tRotten.push([x - 1, y])
      }
      if (x < M - 1 && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2
        tRotten.push([x + 1, y])
      }
      if (y > 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2
        tRotten.push([x, y - 1])
      }
      if (y < N - 1 && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2
        tRotten.push([x, y + 1])
      }
    }
    if (tRotten.length > 0) res++
    count -= tRotten.length
    rotten = tRotten
  }
  
  return count === 0 ? res : -1
};