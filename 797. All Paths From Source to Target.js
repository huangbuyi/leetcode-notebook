/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  return helper(0, graph, new Array(graph.length))
};

var helper = function(node, graph, dp) {
  if (node === graph.length - 1) return [graph.length - 1]
  var res = [], path
  if (dp[node]) return dp[node]
  var next = graph[node]
  for (var i = 0; i < next.length; i++) {
    path = helper(next[i], graph, dp)
    for (var j = 0; j < path.length; j++) {
      res.push([node].concat(path[j]))
    }
  }
  dp[node] = res
  return res
}