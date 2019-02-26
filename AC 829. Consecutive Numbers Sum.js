/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
  var res = 1
  for (var i = 2; i * (i + 1) / 2 <= N; i++) {
    if ((i % 2 === 1 && N % i === 0) || N % i === i / 2) {
      res++
    }
  }
  return res
};