/* 
题干的提示信息一定要看:
1 <= ages.length <= 20000
1 <= ages[i] <= 120
第一个条件说明 O(n^2) 的解法是不合适的。
第二个条件说明应先按年龄进行桶排序。
*/

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  var buddy = new Array(121).fill(0), res = 0
  for (var i = 0; i < ages.length; i++) {
    buddy[ages[i]]++
  }

  for (var a = 1; a < buddy.length; a++) {
    if (buddy[a]) {
      for (var b = Math.floor(0.5 * a + 8); b <= a; b++) {
        res += buddy[a] * buddy[b]
        if (a === b) res -= buddy[a]
      }      
    }
  }
  return res
};