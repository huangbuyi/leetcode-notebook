/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  var M = board.length, N = board[0].length, res = 0, x, y
  for (var i = 0; i < M && x === undefined; i++) {
    for (var j = 0; j < N && x === undefined; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
      }
    }
  }
  
  for (var i = x + 1; i < M; i++) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      res++
      break
    }
  }
  
  for (var i = x - 1; i >= 0; i--) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p' ) {
      res++
      break
    }
  }
  
  for (var i = y + 1; i < N; i++) {
    if (board[x][i] === 'B') break
    if (board[x][i] === 'p') {
      res++
      break
    }
  }
  
  for (var i = y - 1; i >= 0; i--) {
    if (board[x][i] === 'B') break
    if (board[x][i] === 'p') {
      res++
      break
    }
  }
  
  return res
};