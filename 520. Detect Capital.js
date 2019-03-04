/* 
这类问题还是正则比较合适，以不变应万变。
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return /^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word) || /^[A-Z][a-z]*$/.test(word)
};

