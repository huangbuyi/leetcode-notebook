/* 
题意是将数组分成数个部分，对每个部分进行排序，得到的结果和对整个数组进行排序是相同的，题目要求分割的数量尽可能多。例如，下面数组被分成四个部分：
1 0 | 2 | 3 | 4
对每个数组进行排序，得到：
0 1 | 2 | 3 | 4
解题思路：假设 arr[i] = j，要使得 j 回到排序后的位置 arr[j] 上，[i, j] 区间的元素必须同时排序。
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  var s = 0, res = 1
  for (var i = 0; i < arr.length; i++) {
    if (i > s) res++
    if (arr[i] > s) s = arr[i]
  }
  return res
};