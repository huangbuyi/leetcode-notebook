/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  var n = 0
  
  for (var i = 0; i < typed.length; i++) {
    if (name[n] === typed[i]) {
      n++
      if (n >= name.length) return true
    } else if (name[n - 1] !== typed[i]) {
      return false
    }
  }
  
  return false
};