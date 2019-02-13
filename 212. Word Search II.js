/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  var res = [], words = removeDuplicate(words)
  
  for (var i = 0; i < words.length; i++) {
      var found = false
      for (var j = 0; j < board.length && !found; j++) {
          for (var k = 0; k < board[0].length && !found; k++) {
              if (board[j][k] === words[i][0] && helper(words[i], j, k, board, {})) {
                  res.push(words[i])
                  found = true
              }
          }
      }
  }
  
  return res
};

var helper = function(word, x, y, board, visited) {
  if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || visited[x + '-' + y] || board[x][y] !== word[0]) return false
  if (word.length === 1) return true

  visited[x + '-' + y] = true
  console.log(word, x, y)
  word = word.substr(1)
  if (helper(word, x - 1, y, board, visited) || helper(word, x + 1, y, board, visited) ||
  helper(word, x, y - 1, board, visited) || helper(word, x, y + 1, board, visited)) {
    return true
  } else {
    visited[x + '-' + y] = false
    return false
  }
}

var removeDuplicate = function(arr) {
  var map = {}, res = []
  for (var i = 0; i < arr.length; i++) {
      if (!map[arr[i]]) {
          res.push(arr[i])
          map[arr[i]] = true
      }
  }
  return res
}

var board = [["b","a","a","b","a","b"],["a","b","a","a","a","a"],["a","b","a","a","a","b"],["a","b","a","b","b","a"],["a","a","b","b","a","b"],["a","a","b","b","b","a"],["a","a","b","a","a","b"]]
var words = ["aabbbbabbaababaaaabababbaaba"]
console.log(findWords(board, words))