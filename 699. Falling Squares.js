/* 
使用数组 squares 来保存已下落的方块
squares[i] = [s, e, h]，s 表示方块左边位置，e 表示方块右边位置，h 表示方块垒起来的总高度。
下一个方块下落时，找出与下落方块重叠并高度最大的方块，垒起高度等于方块的高度，加上下方方块的高度。
*/

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  var squares = [], res = new Array(positions.length)
  for (var i = 0; i < positions.length; i++) {
    var h1 = positions[i][1], s1 = positions[i][0], e1 = s1 + h1, highest = 0
    for (var j = 0; j < squares.length; j++) {
      var s2 = squares[j][0], e2 = squares[j][1], h2 = squares[j][2]
      if (s1 < e2 && s2 < e1) {
        highest = Math.max(highest, h2)
      }
    }
    highest += h1
    squares.push([s1, e1, highest])
    res[i] = i > 0 ? Math.max(highest, res[i - 1]) : highest
  }

  return res
};