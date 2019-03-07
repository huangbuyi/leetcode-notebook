/* 
在 Virtual Contest 做的这题，当时有了思路，但实现时遇到了一些困难，没完成。
这是图论题，每个数字代表一个节点，两数字和 Squareful 表示两个节点相连，
重复数字表示节点可以重复使用的次数，要找出连接所有节点路线的数量。
我遇到的一个困难是重复节点问题，但按上面的思路已经解决了。
第二个困难是如何记录经过的节点，看了大神 lee 的解法后，才知道用 Backtracking 方法。
先记录每个节点的个数，DFS 前扣减次数，DFS 后恢复回来。
Backtracking 其实是很常用的方法，之前在生成排列组合的题就用过，但显然我没记住。
吃一堑，长一智，这次肯定是记住了。
*/

/**
 * @param {number[]} A
 * @return {number}
 */


var numSquarefulPerms = function(A) {
  var graph = {}, count = {}, res = 0
  var dfs = function(node, left) {
    if (count[node] === 0) return
    if (!left) return res++
    count[node]--
    graph[node].forEach(function(next) {
      dfs(next, left - 1)
    })
    count[node]++
  }


  for (var i = 0; i < A.length; i++) {
    count[A[i]] = count[A[i]] ? count[A[i]] + 1 : 1
    for (var j = i + 1; j < A.length; j++) {
      if(isSquareful(A[i], A[j])) {
        if (!graph[A[i]]) graph[A[i]] = new Set()
        if (!graph[A[j]]) graph[A[j]] = new Set()
        graph[A[i]].add(A[j])
        graph[A[j]].add(A[i])
      }
    }
  }
  
  for (var i in graph) {
    dfs(i, A.length - 1)
  }
  return res
};

var isSquareful = function(a, b) {
  return Math.sqrt(a + b) % 1 === 0
}


 