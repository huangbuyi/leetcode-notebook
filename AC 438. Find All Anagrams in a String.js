/* 
使用移动窗口查询字符串，并使用有效长度来验证是否 anagrams。
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var res = []
  var map = {}
  for (var i = 0; i < p.length; i++) {
    map[p[i]] = map[p[i]] ? map[p[i]] + 1 : 1
  }


  var i = 0, j = 0
  var map2 = {}
  var length = 0
  while (j < s.length) {
    var cj = s[j]

    if (!map[cj]) {
      i = j = j + 1
      map2 = {}
      length = 0
    } else {
      map2[cj] = map2[cj] ? map2[cj] + 1 : 1
      if (map2[cj] <= map[cj]) {
        length++
      }
      if (j - i === p.length) {
        var ci = s[i]
        i++
        map2[ci]--
        if (map2[ci] < map[ci]) {
          length--
        }
      }
      if (length === p.length) {
        res.push(i)
      }
      j++
    }
  }

  return res
};