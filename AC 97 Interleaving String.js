/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    var len1 = s1.length,
        len2 = s2.length,
        map = new Array(len1 + 1).fill(undefined).map(function () {
          return new Array(len2 + 1).fill(0)
        }),
        i, j
    
    if (len1 + len2 !== s3.length) {
      return false
    }

    map[0][0] = 1
    for (i = 1; i <= len1; i++) {
      if (s3[i - 1] === s1[i - 1]) {
        map[i][0] = map[i - 1][0]
      }
    }

    for (j = 1; j <= len2; j++) {
      if (s3[j - 1] === s2[j - 1]) {
        map[0][j] = map[0][j - 1]
      }
    }

    for (i = 1; i <= len1; i++) {
      for (j = 1; j <= len2; j++) {
        if (s3[i + j - 1] === s1[i - 1] && map[i - 1][j] || s3[i + j - 1] === s2[j - 1] && map[i][j - 1]) {
          map[i][j] = 1
        }   
      }   
    }
    return !!map[len1][len2]
};

var assert = require('assert')
assert.equal(isInterleave('a', 'b', 'ab'), true)
assert.equal(isInterleave('a', 'b', 'abb'), false)
assert.equal(isInterleave('aaa', 'bbb', 'aaabbb'), true)
assert.equal(isInterleave('aaa', 'bbb', 'ababab'), true)
assert.equal(isInterleave('aaa', 'bbb', 'aabbba'), true)
assert.equal(isInterleave('abc', 'abc', 'aabbcc'), true)
assert.equal(isInterleave('abc', 'abc', 'aabccb'), false)
assert.equal(isInterleave('', 'abc', 'abc'), true)
assert.equal(isInterleave('', '', ''), true)
assert.equal(isInterleave('eqwr', 'rewqe', 'ereqwqwer'), true)

assert.equal(isInterleave('ab', 'bc', 'babc'), true)

/* 
该题是判断字符串s3是否是s1和s2的交叉组合。
属于字符串匹配，使用二维数组来表示匹配的过程。字符与s1匹配向下置1，与s2匹配向右置1。第一行和第一列表示空字符匹配。
       a a a a
     1 1 1 1 1
   b 0 0 0 0 1
   b 0 0 0 0 1  == aaaabbbb
   b 0 0 0 0 1
   b 0 0 0 0 1

       a a a a
     1 0 0 0 0
   b 1 1 1 0 0
   b 0 0 1 1 1  == baabaabb
   b 0 0 0 0 1
   b 0 0 0 0 1

       l o v e
     1 0 0 0 0
   h 1 1 1 0 0
   o 0 1 1 0 0
   t 0 0 1 0 0  == hlootpveot
   p 0 0 1 1 1
   o 0 0 0 0 1
   t 0 0 0 0 1

       a a a a
     1 1 1 1 1
   a 1 1 1 1 1
   a 1 1 1 1 1  == aaaaaaa
   a 1 1 1 1 1
   a 1 1 1 1 1
*/