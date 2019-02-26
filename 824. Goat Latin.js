/* 
送分题
*/

/**
 * @param {string} S
 * @return {string}
 */
var vowels = { a: true, e: true, o: true, i: true, u: true, A: true, E: true, I: true, O: true, U: true }

var toGoatLatin = function (S) {
  var words = S.split(' ')
  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    if (!vowels[word[0]]) word = word.substr(1) + word[0]
    word += 'ma' + 'a'.repeat(i + 1)
    words[i] = word
  }
  return words.join(' ')
};