/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) > target.charCodeAt(0)) {
      return letters[i]
    }
  }
  return letters[0]
};