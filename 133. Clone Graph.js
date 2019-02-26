/* 
思路：DFS搜索图，用HashMap保存复制的节点。
不知道为什么，这题我不能 Run Code，只能自己写测试了。
第二次提交才通过的，第一次提交没考虑空图的情况。
*/

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  var map = {}
  var stack = [graph]
  map[graph.label] = new UndirectedGraphNode(graph.label)

  while (stack.length > 0) {
    var node = stack.pop()
    var copy = map[node.label]

    for (var i = 0; i < node.neighbors.length; i++) {
      var neighbor = node.neighbors[i]
      if (!map[neighbor.label]) {
        map[neighbor.label] = new UndirectedGraphNode(neighbor.label)
        stack.push(neighbor)
      }
      copy.neighbors.push(map[neighbor.label])
    }
  }

  return map[graph.label]
};

function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];
}

var grap = new UndirectedGraphNode(1)
grap.neighbors = [
  new UndirectedGraphNode(2),
  new UndirectedGraphNode(3),
  new UndirectedGraphNode(4)
]
grap.neighbors[0].neighbors = [
  grap,
  grap.neighbors[0],
  grap.neighbors[1],
  new UndirectedGraphNode(5)
]
console.log(cloneGraph(grap).neighbors[0])