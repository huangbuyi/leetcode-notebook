/* 
数组相当于一个或多个循环链表，找出最长的那个。
生成测试用例：new Array(500).fill(undefined).map((jitem, index) => index).sort(() => 0.5 - Math.random())。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  var visited = new Array(nums.length), max = 0

  for (var i = 0; i < nums.length; i++) {
    var p = i, count = 0
    while (!visited[p]) {
      visited[p] = true
      p = nums[p]
      count++
    }
    max = Math.max(count, max)
  }

  return max
};