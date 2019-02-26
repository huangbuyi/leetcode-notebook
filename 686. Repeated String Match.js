/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length && B[j] === A[(i + j) % A.length]; j++) {
      if (j === B.length - 1) {
        return Math.ceil((i + B.length) / A.length)
      }
    }
  }

  return -1
};