/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x + y + z === 0) return true
  if (x + y < z) return false
  var t
  if (x > y) {
    t = x
    x = y
    y = t
  }
  while (x !== 0) {
    y = y % x
    t = x
    x = y
    y = t
  }

  return z % y === 0
}

/* var canMeasureWater = function(x, y, z) {
  var hash = new Array(x + 1).fill(undefined).map(function() {
    return new Array(y + 1).fill(0)
  })
  var states = [[x, y]]
  while (states.length > 0) {
    var sxsy = states.pop()
    var sx = sxsy[0]
    var sy = sxsy[1]
    var nextStates = [
      [0, sy],
      [sx, 0],
      [x, sy],
      [sx, y],
      sx + sy > x ? [x, sy + sx - x] : [sx + sy, 0],
      sx + sy > y ? [sy + sx - y ,y] : [0, sx + sy]
    ]

    for (var i = 0; i < nextStates.length; i++) {
      var tx = nextStates[i][0]
      var ty = nextStates[i][1]
      if (!hash[tx][ty]) {
        hash[tx][ty] = 1
        states.push([tx, ty])
        if (tx + ty === z) {
          // return true
        }
      }
    }
  }
  console.log(hash)
  return false
}; */

/* 
odd odd any O
even odd any O
odd even any O
even even even O
even even odd X
*/

var assert = require('assert')
assert.equal(canMeasureWater(0, 0, 0), true)
assert.equal(canMeasureWater(0, 0, 1), false)
assert.equal(canMeasureWater(0, 1, 1), true)
assert.equal(canMeasureWater(1, 0, 1), true)
assert.equal(canMeasureWater(1, 1, 1), true)
assert.equal(canMeasureWater(0, 1, 2), false)
assert.equal(canMeasureWater(1, 1, 3), false)
assert.equal(canMeasureWater(150, 150, 1), false)
assert.equal(canMeasureWater(3, 5, 4), true)
assert.equal(canMeasureWater(2, 6, 5), false)
assert.equal(canMeasureWater(6, 9, 1), false)
assert.equal(canMeasureWater(6, 9, 6), true)
assert.equal(canMeasureWater(6, 6, 6), true)
assert.equal(canMeasureWater(6, 6, 5), false)
assert.equal(canMeasureWater(123, 1, 5), true)
assert.equal(canMeasureWater(101, 20, 2), true)


