/* 
Magic square 需满足以下条件：
1. 中间必须为 5
2. 9个数字为1~9
3. 横、竖、斜和为15

讨论更简单方法：
1. 中间必须为 5
2. 周围数字序列为 43816729 的顺时针或逆时针顺序，以及其对称情况
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  var count = 0

  for (var i = 1; i < grid.length - 1; i++) {
      for (var j = 1; j < grid[0].length - 1; j++) {
          if (isMagic(i, j, grid)) count++
      }
  }
  
  return count
};

var isMagic = function(x, y, grid) {
  if (grid[x][y] !== 5) return false
  var offs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, - 1], [1, 0], [1, 1]]
  var duplicate = new Array(9)
  
  for (var i = 0; i < offs.length; i++) {
      var tx = x + offs[i][0]
      var ty = y + offs[i][1]
      var v = grid[tx][ty]
      if ( v < 1 || v > 9 || duplicate[v - 1]) return false
      duplicate[v - 1] = true
  }
  
  if (grid[x - 1][y - 1] + grid[x + 1][y + 1] !== 10 || grid[x - 1][y + 1] + grid[x + 1][y - 1] !== 10) {
      return false
  }
  
  for (var i = -1; i <= 1; i++) {
      var tx = x + i
      var ty = y + i
      if(grid[tx][y - 1] + grid[tx][y] + grid[tx][y + 1] !== 15 || grid[x - 1][ty] + grid[x][ty] + grid[x + 1][ty] !== 15) {
          return false
      }
  }
  
  return true
}