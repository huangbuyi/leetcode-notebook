/* 
解题思路：要在相同元素保留足够的 interval，仅需考虑重复最多的那个任务，设 A 为重复最多的任务，且仅此一个。
只需要将 A 如下安排，并在 A 中插入其它任务即可。
A ... A ... A
A BC. A B.. A
多余空间插入 idle，使得 A 与 A 间距大于等于 n。
当不同任务足以填充空隙，说明不需要任何 idle, 返回 tasks 的长度。
当不同任务不足以填充空隙，返回 (n + 1) * (max - 1) + 1
考虑重复最多的任务有多个的情况，如下安排：
ABC ... ABC ... ABC
返回 (n + 1) * (max - 1) + repeat
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  var max = 0, map = {}
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i]
    if (!map[task]) {
      map[task] = 0
    }
    map[task] += 1
    max = Math.max(max, map[task])
  }
  var repeat = 0
  for (var key in map) {
    repeat += map[key] === max ? 1 : 0
  }

  return Math.max((n + 1) * (max - 1) + repeat, tasks.length)
};