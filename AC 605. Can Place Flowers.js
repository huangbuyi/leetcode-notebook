/* 
思路：移动窗口，local 保存连续三个格子的和，为 0 表示可以种花。
要注意 [0,0...] [...0,0] 情况也是可以种花的。
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true
  var local = flowerbed[0]
  for (var i = 1; i <= flowerbed.length; i++) {
      if (i < flowerbed.length) local += flowerbed[i]
      if (i - 3 >= 0) local -= flowerbed[i - 3]
      if (local === 0) {
          n--
          flowerbed[i - 1] = 1
          local++
          if (n === 0) return true
      }
  }
  return false
};