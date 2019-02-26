/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  var res = new Array(A[0].length).fill(undefined).map(function () {
    return new Array(A.length)
  })

  for (var i = 0; i < A[0].length; i++) {
    for (var j = 0; j < A.length; j++) {
      res[i][j] = A[j][i]
    }
  }

  return res
};