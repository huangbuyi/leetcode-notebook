/* 
时间复杂度 O(N)，空间复杂度 O(N)，这里使用了队列。
这题首先要想明白 Magical string 的生成方式。
Magic String 的性质看了几遍才看明白，假设字符串 S1 由 1 和 2 组成，S2 统计 S1 中 1 和 2 的连续出现的次数。例如：
S1 = 111122211... S2 = 432...
对于 Magic String 来说，S1 = S2，例如
S1 = 122112...    S2 = 122112...

Magic String 生成可以遵循如下步骤，| 标记下一次重复个数：
1. S1 = 1，因此 S2 = 1
2. 1 只能连续出现 1 次，因此 S1 = 12，S2 = 1|2
3. 2 连续出现两次，因此 S1 = 122，S2 = 12|2
4. 1 连续出现两次，因此 S1 = 12211，S2 = 122|11
5. S1 = 122112，S2 = 1221|12
6. 以此类推

*/

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  var queue = [], one = true, count1 = 0
  while (n > 0) {
      queue.shift()
      var c = one ? 1 : 2
      one = !one
      queue.push(c)
      n--
      count1 += 2 - c
      if (queue[0] === 2 && n > 0) {
          queue.push(c)
          n--
          count1 += 2 - c
      }
  }
  return count1
};
