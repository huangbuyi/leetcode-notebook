/* 
思路：设 diff = n - m
diff > 1 时，必然存在 XXXX0 XXXXX1，第一位必为0
diff > 3 时，必然存在 XXX0X XXXX1X，第二位必为0
...
其它位的值，取决于 n & m 的值。
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  var diff = n - m, count = 0
  while (diff > 0) {
    count++
    diff >>= 1
  }
  return (m & n) >> count << count
};