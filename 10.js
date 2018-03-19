var a = 'aaa'
var b = 'a*a'

var isMatch = function (s, p) {
	var i1 = 0, i2 = 0, matchs = []

	while (1) {
		var ch = s[i1]
		var pt = p[i2]
		console.log(i1 + ' ' + i2)

		if (i1 === s.length && i2 === p.length ) {
			return true
		}
		if (i1 === s.length || i2 === p.length ) {
			if (i2 === p.length - 1 && p[i2] === '*') {
				return true
			}
			if (matchs.length === 0) {
				return false
			}
			var is = matchs.pop()
			i1 = is[0]
			i2 = is[1]
			continue
		}


		if (pt === '.' || ch === pt) {
			i1++
			i2++
			
		} else if (pt === '*') {
			if (ch === p[i2 - 1] || p[i2 - 1] === '.') {
				matchs.push([i1 - 1, i2 + 1])
				i1++
			} else {
				i2++
			}
		} else if (p[i2 + 1] === '*') {
			i2 += 2
		} else {
			return false
		}
	}
}

console.log(isMatch(a, b))