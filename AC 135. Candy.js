/*
其实，这题我已经看过很多次，都没做出来，今天随机到了这题，突然有了思路，很快就做出来了。
所以，很多题，特别是 hard 难度的题，一时想不出来很正常，不要急着看讨论。
可能有一天，随着你实力变强，再回来看，没准就能做出来。
解题思路要考虑三种情况：
1 局部最小值，分配一个糖果
2 递增序列、递减序列，多分配一个糖果
3 局部最大值，糖果数量取决于两边的最大值
分两次遍历，第一次正序遍历，确定局部最小值和递增序列的糖果数
第二次反序遍历，确定递减序列和局部最大值的糖果数
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  var candy = new Array(ratings.length).fill(1), res = 0
  
  for (var i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candy[i] = candy[i - 1] + 1
      }
  }
  
  for (var i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          candy[i] = Math.max(candy[i], candy[i + 1] + 1)
      }
  }
  
  return candy.reduce(function(sum, item) {
      return sum + item
  }, 0)
};