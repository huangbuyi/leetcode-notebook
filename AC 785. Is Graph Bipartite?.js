/* 
这题思路就是染色，用两种颜色染色，相邻节点颜色不同。
要注意两点：
1. 要有三种状态，未染色、色1、色2
2. 并不是所有节点都连在一张图上，可能由相互隔离的多个图
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    var colors = new Array(graph.length)
    var colorur = function (node, color) {
        if (colors[node]) {
            return colors[node] === color
        }

        colors[node] = color
        for (var i = 0; i < graph[node].length; i++) {
            if (!colorur(graph[node][i], color === 1 ? 2 : 1)) {
                return false
            }
        }

        return true
    }

    for (var i = 0; i < graph.length; i++) {
        if (!colors[i]) {
            if (!colorur(i)) {
                return false
            }
        }
    }

    return true
};
