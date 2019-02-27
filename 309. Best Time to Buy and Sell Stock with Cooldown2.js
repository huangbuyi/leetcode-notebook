/* 
这是热门讨论的解法，为了方便理解，略作修改。
思路是用动态规划，定义两个数组，buy[i]、sell[i]。
buy[i] 表示第 i 天前，最后执行的是买入的最大利润。
sell[i] 表示第 i 天前，最后执行的是卖出的最大利润。状态转移方程：
buy[i] = max(sell[i - 2] - price, buy[i])
sell[i] = max(buy[i - 1] + price, sell[i - 1])
状态 i 取决于状态 i - 1 和 i - 2，只需 O(1) 空间，O(n) 时间。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var pSell = 0, pBuy = -Infinity, ppSell = 0
  
  for (var i = 0; i < prices.length; i++) {
    var price = prices[i]
    var buy = Math.max(ppSell - price, pBuy)
    var sell = Math.max(price + pBuy, pSell)
    ppSell = pSell
    pSell = sell
    pBuy = buy
  }
  
  return pSell
};