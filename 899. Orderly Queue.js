/* 
只要 K >= 2，就能通过 move 将字符串变成最小 lexicographically order，也就是 a~z 排序。
证明：K >= 2 时可以将一个字符寄存，将其它字符不断 move，在 move 到合适位置后，再将寄存的字符插入。因此，字符可以插入字符串中的任何位置，经过数次 move 达到 lexicographically order。
现在需要考虑 K 为 1 的情况，问题相当于旋转字符串，以达到 lexicographically order 最小。思路是找出最小字符，如果字符相同，比较最小字符的下一个字符。
*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function (S, K) {
  if (K === 1) {
    var minIndex = 0
    for (var i = 1; i < S.length; i++) {
      var c1 = S[i].charCodeAt(0)
      var c2 = S[minIndex].charCodeAt(0)
      var j = 1
      while (c1 === c2 && j < S.length) {
        c1 = S[(i + j) % S.length].charCodeAt(0)
        c2 = S[(minIndex + j) % S.length].charCodeAt(0)
        j++
      }
      if (c1 < c2) {
        minIndex = i
      }
    }

    return S.substring(minIndex) + S.substring(0, minIndex)
  }

  return S.split('').sort().join('')
}; 