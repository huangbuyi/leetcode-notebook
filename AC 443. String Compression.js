/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  var length = 0, local = 1, p = 0
  
  for (var i = 1; i <= chars.length; i++) {
      if (chars[i] === chars[i - 1]) {
          local++
      } else if (local === 1) {
          chars[p++] = chars[i - 1]
      } else {
          var s = local.toString()
          chars[p++] = chars[i - 1]
          for (var j = 0; j < s.length; j++) {
              chars[p++] = s[j]
          }
          local = 1
      }
  }
  
  return p
};