/* 
思路：计数 $5 的数量，付 $10，必找一个 $5。付 $20，找 $10+$5 或 3*$5。如果 $5 不够，找不起零钱，返回 false。
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var five = 0, ten = 0
  for (var i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++
    }
    if (bills[i] === 10) {
      ten++
      five--
    }
    if (bills[i] === 20) {
      five--
      if (ten > 0) {
        ten--
      } else {
        five -= 2
      }
    }
    if (five < 0) return false
  }
  return true
};