/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  var sum = 0, res = new Array(queries.length)
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) sum += A[i]
  }
  for (var i = 0; i < queries.length; i++) {
    var q = queries[i][1]
    if (A[q] % 2 === 0) sum -= A[q]
    A[q] += queries[i][0]
    if (A[q] % 2 === 0) sum += A[q]
    res[i] = sum
  }
  return res
};