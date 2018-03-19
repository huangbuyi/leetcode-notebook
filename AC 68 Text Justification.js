/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var getSpace = function(n) {
	var s = '', i
	for (i = 0; i < n; i++) {
		s += ' '
	}
	return s
}
var assert = require('assert')

var fullJustify = function(words, maxWidth) {
    var wordsIn = [], res = [], width = 0, line, w, sapce, sapceBtw, spaceMore, lastline, i
    
    while (words.length > 0) {
    	// 判断是否有足够的剩余空间
    	if (words[0].length > maxWidth - width - wordsIn.length) {
    		space = maxWidth - width
    		if (wordsIn.length === 1) {
    			// 一行只有一个单词时，只需补全空格
    			line = wordsIn[0] + getSpace(maxWidth - wordsIn[0].length)
    		} else {
    			// 单词间空格数
	    		spaceBtw =  space / (wordsIn.length - 1) >> 0
	    		// 需要分配多余空格的数量
	    		spaceMore = space % (wordsIn.length - 1)
	    		line = ''
	    		for (i = 0; i < wordsIn.length - 1; i++) {
	    			line += wordsIn[i] + getSpace(i < spaceMore ? spaceBtw + 1 : spaceBtw)
	    		}
	    		line += wordsIn[i]
	    	}
    		res.push(line)
    		wordsIn = []
    		width = 0
    	} else {
    		// 取出单词
    		w = words.shift()
    		wordsIn.push(w)
    		width += w.length
    	}
    }

    // 最后一行补全空格
    lastline = wordsIn.join(' ')
    lastline += getSpace(maxWidth - lastline.length)
    res.push(lastline)

    return res
};

assert.deepEqual(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16),[
   "This    is    an",
   "example  of text",
   "justification.  "
])

assert.deepEqual(fullJustify([''], 0), [''])
assert.deepEqual(fullJustify([''], 6), ['      '])
assert.deepEqual(fullJustify(['a','b'], 6), ['a b   '])
assert.deepEqual(fullJustify(['a','b','c','aaaa'], 6), ['a  b c', 'aaaa  '])