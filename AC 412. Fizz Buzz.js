/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var res = []
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('FizzBuzz')
    } else if (i % 3 === 0) {
      res.push('Fizz')
    } else if (i % 5 === 0) {
      res.push('Buzz')
    } else {
      res.push('' + i)
    }
  }
  
  return res
};