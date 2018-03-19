var assert = require('assert')

var isMatch = function (s, p) {
	var i1 = 0, i2 = 0, matchs = []

	while (1) {
		//console.log(i1 + ' ' + i2)
		var ch = s[i1]
		var pt = p[i2]

		if (ch === pt || (ch && pt === '.' )) {
			i1++
			i2++
		} else if (pt === '*') {
			matchs.push([i1 - 1, i2 + 1])
			while (s[i1] === p[i2 - 1] || p[i2 - 1] === '.') {
				matchs.push([i1, i2 + 1])
				i1++

				if (i1 >= s.length) {
					break
				}
			}
			i2++
		} else if (p[i2 + 1] === '*') {
			i2 += 2
		} else {
			i1 = s.length
			i2 = -1
		}

		if (i1 >= s.length && i2 >= p.length) {
				return true
		}
		if (i1 >= s.length || i2 >= p.length) {
			
			if (p[i2] === '*' || p[i2 + 1] === '*') {
				matchs.push([i1, i2])
			}

			if (matchs.length === 0) {
				return false
			}
			var is = matchs.pop()
			i1 = is[0]
			i2 = is[1]
		}
	}
}

assert.equal(isMatch('aaaabbcaaa', 'a*a....a*a'), true)
assert.equal(isMatch('aa', 'a'), false)
assert.equal(isMatch('aa', 'aa'), true)
assert.equal(isMatch('aaa', 'aa'), false)
assert.equal(isMatch('aa', 'a*'), true)
assert.equal(isMatch('aa', '.*'), true)
assert.equal(isMatch('ab', '.*'), true)
assert.equal(isMatch('aab', 'c*a*b'), true)
assert.equal(isMatch('', 'a*'), true)
assert.equal(isMatch('abc', ''), false)
assert.equal(isMatch('abc', '...'), true)
assert.equal(isMatch('abc', '.*.*'), true)

assert.equal(isMatch('ab', '.*c'), false)
assert.equal(isMatch('a', 'ab*'), true)
assert.equal(isMatch('a', 'ab*c*d*e*f*'), true)
assert.equal(isMatch('a', 'a*b*c*d*e*'), true)
assert.equal(isMatch('', '.'), false)