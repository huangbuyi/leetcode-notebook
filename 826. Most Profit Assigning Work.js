/* 
思路：每个工人选择能够完成，并且利润最大的工作。
将 N 份工作按照利润从大到小排序O(NlogN)，将 M 个工人从大到小排序O(MlogM)
从利润最大的工作开始，匹配能力最强的工人，如果不能胜任，再匹配利润第二大的工作，直到工人能够胜任。
能力第二的工人，不可能胜任比第一个工人更好的工作，因此，从第一工人的工作向后匹配，直到找到胜任的工作。
一直持续到最后一个工人，时间复杂度 O(N + M)。
*/

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  var work = new Array(profit.length), money = 0
  for (var i = 0; i < work.length; i++) {
    work[i] = [difficulty[i], profit[i]]
  }
  work.sort(function (a, b) { return b[1] - a[1] })
  worker.sort(function (a, b) { return b - a })
  var i = 0, j = 0
  while (i < worker.length) {
    while (j < work.length && worker[i] < work[j][0]) {
      j++
    }
    money += j < work.length ? work[j][1] : 0
    i++
  }
  return money
};