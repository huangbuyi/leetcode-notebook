/* 
使用 aab 或 bba 来补足 A 和 B 的差值。
*/

/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  if (A >= B + 2) return 'aab'.repeat(A - 2 - B) + 'ab'.repeat(2 * B + 2 - A) + 'aa'
  if (A === B + 1) return 'ab'.repeat(B) + 'a'
  if (A === B) return 'ab'.repeat(B)
  if (A === B - 1) return 'b' + 'ab'.repeat(A)
  return 'bba'.repeat(B - 2 - A) + 'ba'.repeat(2 * A + 2 - B) + 'bb'
};