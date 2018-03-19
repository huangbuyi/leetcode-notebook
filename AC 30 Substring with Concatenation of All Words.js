var assert = require('assert')

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0) { return [] }
      
    let wordCount = {}, len = words[0].length, num = words.length, res = [], match = {}

    // count word amount 
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      wordCount[word] = wordCount[word] ? ++wordCount[word] : 1
    }

    for (let i = 0; i < s.length - len * num + 1; i++ ) {
      let subCount = {}
      let subString = s.substring(i, i + len * num)

      // Avoid repetly caculate if substring was caculated
      if (match[subString] === true) {
          res.push(i)
          continue
      }
      if (match[subString] === false) {
          continue
      }
      let j
      for (j = 0; j < num; j++) {
        let w = subString.substring(len * j, len * j + len)

        subCount[w] = subCount[w] ? ++subCount[w] : 1

        // Unmatch if a word amount is bigger
        if (!wordCount[w] || subCount[w] > wordCount[w]) {
          match[subString] = false
          break
        }
      }

      if (j === num) {
        match[subString] = true
        res.push(i)
      }
    }
    
    return res
};

var sortedEqual = function (arr1, arr2) {
	var compare = function (a, b) {
		return a - b
	}
	return assert.deepEqual(arr1.sort(compare), arr2.sort(compare))
}

sortedEqual(findSubstring('foobarfoobarthefoobarman', ['foo', 'bar']), [0,3,6,15])
sortedEqual(findSubstring('foobarfoobarthefoobarman', ['foo', 'bar', 'foo']), [0])
sortedEqual(findSubstring('ababababababa', ['a', 'b', 'a']), [0,2,4,6,8,10])
sortedEqual(findSubstring('ababababababa', []), [])
sortedEqual(findSubstring('barfoofoobarthefoobarman', ["bar","foo","the"]), [6,9,12])
