/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[0].length; j++) {
          if (i - 1 >= 0 && j - 1 >= 0 && matrix[i][j] !== matrix[i - 1][j - 1]) {
              return false
          }
      }
  }
  return true
};