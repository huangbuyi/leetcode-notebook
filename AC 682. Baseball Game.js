/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  var points = [], sum = 0

  for (var i = 0; i < ops.length; i++) {
    if (ops[i] === 'C') points.pop()
    else if (ops[i] === 'D') points.push(points[points.length - 1] * 2)
    else if (ops[i] === '+') points.push(Number(points[points.length - 1]) + Number(points[points.length - 2]))
    else points.push(Number(ops[i]))
  }

  for (var i = 0; i < points.length; i++) {
    sum += points[i]
  }

  return sum
};