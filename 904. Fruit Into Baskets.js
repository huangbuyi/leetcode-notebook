/* 
思路：滑动窗口
*/

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  var lh = 0, rh = 0, map = {}, type = 0, max = 0
  for (var rh = 0; rh < tree.length; rh++) {
    if (!map[tree[rh]]) {
      map[tree[rh]] = 0
      type++
      while (type > 2) {
        if (--map[tree[lh]] === 0) {
          type--
          delete map[tree[lh]]
        }
        lh++
      }
    }
    map[tree[rh]]++
    max = Math.max(rh - lh, max)
  }
  
  return max + 1
};