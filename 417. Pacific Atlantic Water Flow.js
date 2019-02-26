/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var createArray = function (len1, len2, initValue) {
  return new Array(len1).fill(undefined).map(function (item) {
    return new Array(len2).fill(initValue)
  })
}

var mark = function (x, y, matrix, marks) {
  var offset = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  marks[x][y] = 1

  for (var i = 0; i < offset.length; i++) {
    var nx = x + offset[i][0], ny = y + offset[i][1]
    if ((nx >= 0 && ny >= 0 && nx < matrix.length && ny < matrix[0].length) && !marks[nx][ny] && matrix[x][y] <= matrix[nx][ny]) {
      mark(nx, ny, matrix, marks)
    }
  }
}

var pacificAtlantic = function (matrix) {
  if (!matrix || matrix.length === 0) {
    return []
  }
  var pacific = createArray(matrix.length, matrix[0].length, 0)
  var atlantic = createArray(matrix.length, matrix[0].length, 0)
  for (var i = 0; i < matrix.length; i++) {
    mark(i, 0, matrix, pacific)
    mark(i, matrix[0].length - 1, matrix, atlantic)
  }
  for (var i = 0; i < matrix[0].length; i++) {
    mark(0, i, matrix, pacific)
    mark(matrix.length - 1, i, matrix, atlantic)
  }

  var res = []
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j])
      }
    }
  }

  return res
};

/*
深度优先搜索
*/
