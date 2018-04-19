/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  var lastSum = [0], sum = [], dup = {}, res = 1
  while (lastSum.length !== 0) {
    sum = [], dup = {}
    for (var i = 0; i < lastSum.length; i++) {
      for (var j = 0; j < coins.length; j++) {
        var s = lastSum[i] + coins[j]
        if (s === amount) {
          return res
        }
        if (s < amount && !dup[s]) {
          sum.push(s)
          dup[s] = true
        }
      }
    }
    lastSum = sum
    res++
  }

  return -1
};

/* 
思路：F(n) = Math.min(F(n - coins[0]), ... , F(n - coins[i]), ..)
讨论解答是按照这个思路的：
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int Max = amount + 1;
        vector<int> dp(amount + 1, Max);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.size(); j++) {
                if (coins[j] <= i) {
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
};
*/

var assert = require('assert')
// assert.equal(coinChange([1,2,5], 0), 0)
assert.equal(coinChange([1,2,5], 11), 3)
assert.equal(coinChange([1,4,5], 8), 2)
assert.equal(coinChange([1,4,5], 13), 3)
assert.equal(coinChange([2], 3), -1)
assert.equal(coinChange([1], 100), 100)
assert.equal(coinChange([1,2], 100), 50)