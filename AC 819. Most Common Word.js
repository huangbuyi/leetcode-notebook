/* 
一般来说，句子可能包含空字符、各种标点符号等，所以，我认为使用正则表达式匹配单词是更好的选择。
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  var letters = paragraph.match(/[a-zA-Z]+/g), bannedLetters = {}, max = 0, count = {}, res

  for (var i = 0; i < banned.length; i++) {
    bannedLetters[banned[i]] = true
  }

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i].toLowerCase()
    if (!bannedLetters[letter]) {
      if (!count[letter]) count[letter] = 0
      count[letter]++
      if (count[letter] > max) {
        max = count[letter]
        res = letter
      }
    }
  }

  return res
};