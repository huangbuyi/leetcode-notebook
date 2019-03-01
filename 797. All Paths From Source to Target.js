/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  return helper(0, graph)
};

var helper = function(node, graph) {
  if (node === graph.length - 1) return [3]
  if (dp[node]) {
    var res [] 
  }
  var res = [], next = graph[node]
  for (var i = 0; i < next.length; i++) {
    var path = helper(next[i], graph)
    for (var j = 0; j < path.length; j++) {
      res.push([node].concat(path[j]))
    }
  }
  dp[node] = res
  return res
}