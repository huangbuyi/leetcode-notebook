/* 
ax = b
a = 0, b = 0 => Infinite solutions
a = 0, b != 0 => No solution
*/

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  var a = 0, b = 0, num = '', sign = 1, equal = 1
  
  for (var i = 0; i < equation.length; i++) {
    var c = equation[i]
    if (c === '-' || c === '+' || c === '=') {
      b += equal * sign * num
      num = ''
      sign = c === '-' ? -1 : 1
      if (c === '=') equal = -1
    } else if (c === 'x') {
      a += equal * sign * (num === '' ? 1 : num)
      num = ''
    } else {
      num = 10 * num + Number(c) 
    }
  }
  b += equal * sign * num
  
  if (a === 0 && b === 0) return 'Infinite solutions'
  if (a === 0) return 'No solution'
  
  return 'x=' + b / -a
};