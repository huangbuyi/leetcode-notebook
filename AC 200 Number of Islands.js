/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  var len1 = grid.length
  var len2 = grid[0].length
  var res = 0, i, j
  var count = new Array(len1).fill(undefined).map(function () {
    return new Array(len2).fill(0)
  })
  var markIsland = function(i, j) {
    if (i < 0 || i >= len1 || j < 0 || j >= len2 || count[i][j] || grid[i][j] === '0') {
      return
    }

    count[i][j] = 1;
    [[0, 1], [0, -1], [1, 0], [-1, 0]].map(function ([x, y]) {
      markIsland(i + x, j + y)
    })
  }

  for (i = 0; i < len1; i++) {
    for (j = 0; j < len2; j++) {
      if (!count[i][j] && grid[i][j] === '1') {
        res++
        markIsland(i, j)
      }
    }
  }
  console.log(count)
  return res
};

var assert = require('assert')

var islands1 = [['1']]
assert.equal(numIslands(islands1), 1)

var islands2 = [['1', '0'],
                ['0', '1']]
assert.equal(numIslands(islands2), 2)

var islands3 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
assert.equal(numIslands(islands3), 3)