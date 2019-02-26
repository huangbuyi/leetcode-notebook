/* 
我想到的事两种思路，一种是用优先队列，或用二分法搜索，保存前 K 项，时间复杂度O(NlogK)。
第二种，因为空间复杂度要求 O(N)，而词频不会超过 N，所以可以用桶排序，实现时间复杂度O(N)。
但有个小问题，同词频的要按词典序排序，最坏情况会到O(NlogN)。例如，所有单词词频都是1的情况。当然，可以进一步优化避免这种情况，但算法就变得很复杂了。
好在，一般情况还在比较好的，提交击败了100%的用户。
*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  var map = {}, max = 0
  for (var i = 0; i < words.length; i++) {
    map[words[i]] = map[words[i]] ? map[words[i]] + 1 : 1
    max = Math.max(map[words[i]], max)
  }

  var bullet = new Array(max + 1)
  for (var word in map) {
    var frequent = map[word]
    if (!bullet[frequent]) {
      bullet[frequent] = []
    }
    bullet[frequent].push(word)
  }

  var res = []
  for (var i = max; i > 0 && res.length < k; i--) {
    if (bullet[i]) {
      res = res.concat(bullet[i].sort())
    }
  }

  return res.slice(0, k)
};