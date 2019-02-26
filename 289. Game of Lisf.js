/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  if (!board[0] || board[0].length === 0) {
    return
  }
  var tmp = new Array(board.length).fill(undefined).map(function () {
    return new Array(board[0].length)
  }), offset = [[-1, 0], [1, 0], [0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1]]

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      var lives = 0
      var isLive = board[i][j]
      for (var k = 0; k < 8; k++) {
        var off = i + offset[k][0]
        lives += board[off] ? (board[off][j + offset[k][1]] || 0) : 0
      }
      if (lives < 2 || lives > 3) {
        isLive = 0
      }
      if (lives === 3) {
        isLive = 1
      }
      tmp[i][j] = isLive
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      board[i][j] = tmp[i][j]
    }
  }
};

/* 
我提交了用了个临时数组保存数据。讨论组的方法更好，思路是在当前 Cell 保存当前状态和下一个状态，不需要额外空间：
当前 Cell 有 0, 1 两个状态，现转化为四个状态
- 00  dead (next) <- dead (current)
- 01  dead (next) <- live (current)  
- 10  live (next) <- dead (current)  
- 11  live (next) <- live (current) 
这样 board[i][j] & 1 就可以获得当前状态，board[i][j] >> 1 就可以获得下一个状态。
*/

var assert = require('assert')
var test = [[0]]
gameOfLife(test)
assert.deepStrictEqual(test, test)
var test1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
var res1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
gameOfLife(test1)
assert.deepStrictEqual(test1, res1)
var test2 = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
]
gameOfLife(test2)
assert.deepStrictEqual(test2, test2)
var test3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
var res3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
gameOfLife(test3)
assert.deepStrictEqual(test3, res3)
var test4 = [[]]
gameOfLife(test4)
assert.deepStrictEqual(test4, test4)
var test5 = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 0, 0]
]
var res5 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 0]
]
gameOfLife(test5)
assert.deepStrictEqual(test5, test5)