/* 
个人觉得这是 hard 题里比较简单的，几乎看完题目就知道解题思路了，用动态规划很明显，不过要考虑情况比较多。
dp[k] 表示前 k 个字符的 decode way 数量。状态转移分两部分
dp[k] = Adp[k - 1] + Bdp[k - 2]

1. dp[k - 1] 加一个字符组成 dp[k]
  1. 字符为数字，A = 1
  2. 字符为 *， A = 9
  3. 字符为 0，A = 0

2. dp[k - 2] 加两个字符组成 dp[k]
  1. 字符为两个数字，却数值在 10~26 区间内，B = 1
  2. 字符为两个数字，数值不在 10~26 区间内，B = 0
  3. 字符为两个 *，** 可以取 1~19、21~26，因此 B = 15
  4. 仅第一个字符为 *，第二个字符数值小等于6，* 可取 1、2，因此 B = 2
  5. 仅第一个字符为 *，第二个字符大于6，* 仅可取 1，因此 B = 1
  6. 仅第二个字符为 *，第一个字符等于1，* 可取 1~9，因此 B = 9
  7. 仅第二个字符为 *，第一个字符等于2，* 可取 1~6，因此 B = 6

以下是代码，不过代码还不够简洁，哈哈。
*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0
  var dp = new Array(s.length + 1)
  dp[0] = 1
  dp[1] = s[0] === '*' ? 9 : 1

  for (var i = 2; i <= s.length; i++) {
    var total = 0
    if (s[i - 1] === '*') {
      total += 9 * dp[i - 1]
    } else if (s[i - 1] !== '0') {
      total += dp[i - 1]
    }

    if (s[i - 2] === '*' && s[i - 1] === '*') {
      total += 15 * dp[i - 2]
    } else if (s[i - 2] === '*' && s[i - 1] <= 6) {
      total += 2 * dp[i - 2]
    } else if (s[i - 2] === '*') {
      total += dp[i - 2]
    } else if (s[i - 2] === '1' && s[i - 1] === '*') {
      total += 9 * dp[i - 2]
    } else if (s[i - 2] === '2' && s[i - 1] === '*') {
      total += 6 * dp[i - 2]
    } else {
      var num = Number(s[i - 2] + s[i - 1])
      if (num >= 10 && num <= 26) {
        total += dp[i - 2]
      }
    }

    dp[i] = total % (1e9 + 7)
  }

  return dp[s.length]
};
