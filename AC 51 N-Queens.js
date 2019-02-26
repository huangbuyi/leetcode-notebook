var assert = require('assert')
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  var r = 0,
    c = 0,
    // position set queens
    cols = [],
    // if has queen in column
    d0 = [],
    // if has queen in diagonal
    d1 = [],
    // if has queen in back-diagonal 
    d2 = [],
    count = 0

  while (true) {
    if (r < 0) {
      break
    }
    if (r === n) {
      count++
      c = n
    }
    while (c < n) {
      // console.log(r + ' ' + c)
      if (!(d0[c] || d1[n + r - c] || d2[r + c])) {

        d0[c] = true
        // let some diagonal elements has some d1 index
        d1[n + r - c] = true
        // let some back-diagonal elements has some d2 index
        d2[r + c] = true
        r++
        cols.push(c)
        // console.log(cols)
        c = 0
        break
      } else {
        c++
      }
    }

    // Unmatch case, traceback
    if (c === n) {
      r--
      c = cols.pop()
      d0[c] = false
      d1[n + r - c] = false
      d2[r + c] = false
      c++
    }
  }

  return count
};

assert.equal(totalNQueens(1), 1)
assert.equal(totalNQueens(2), 0)
assert.equal(totalNQueens(3), 0)
assert.equal(totalNQueens(4), 2)
assert.equal(totalNQueens(5), 10)
assert.equal(totalNQueens(6), 4)
assert.equal(totalNQueens(7), 10)