/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
  var matchMap = {}, caseMap = {}, vowelsMap = {}, vowelsRE = /[aeiou]/g, replaceMark = '*', res = new Array(queries.length)
  
  for (var i = wordlist.length - 1; i >= 0; i--) {
      var key = wordlist[i]
      matchMap[key] = i
      key = key.toLowerCase()
      caseMap[key] = i
      key = key.replace(vowelsRE, replaceMark)
      vowelsMap[key] = i
  }
  
  for (var i = 0; i < queries.length; i++) {
      var key = queries[i]
      var index = -1
      if (matchMap[key] >= 0) {
          index = matchMap[key]
      } else if (caseMap[key = key.toLowerCase()] >= 0) {
          index = caseMap[key]
      } else if (vowelsMap[key = key.replace(vowelsRE, replaceMark)] >= 0) {
          index = vowelsMap[key]
      }
      res[i] = index !== -1 ? wordlist[index] : ''
  }
  
  return res
};