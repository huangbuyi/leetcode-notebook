/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  var stack = [], i = 0, max = 1, local = 1, global = 0, isFile = false
  input += '\n'

  while (i < input.length) {
    var c = input[i]
    if (c === '\n') {
      var deep = 0
      stack.push(local)
      global += local
      local = 1
      if (isFile) {
        max = Math.max(max, global)
        isFile = false
      }

      while (input[++i] === '\t') {
        deep++
      }

      while (stack.length > deep) {
        global -= stack.pop()
      }
    } else {
      if (c === '.') {
        isFile = true
      }
      local++
      i++
    }
  }

  return max - 1
};