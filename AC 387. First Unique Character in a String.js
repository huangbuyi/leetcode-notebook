/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var hash = {}, first = '', c
  for (var i = 0; i< s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1
  }

  for (var i = 0; i< s.length; i++) {
    if (hash[s[i]] === 1) {
      return i
    }
  }

  return -1
};