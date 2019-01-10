/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  var dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  
  for (var i = 0; i < coins.length; i++) {
      for (var j = coins[i]; j <= amount; j++) {
          dp[j] += dp[j - coins[i]]
      }
  }
  
  return dp[amount]
};