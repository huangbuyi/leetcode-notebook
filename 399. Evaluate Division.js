/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  var hash = {}
  for (var i = 0; i < equations; i++) {
    var e = equations[i]
    hash[e[1]] = {}
    if ()
      hash[e[0]] = { value: values[i], base: hash[e[1]] }
  }
};