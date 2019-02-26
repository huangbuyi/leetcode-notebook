/* 
使用一个 stack 来保存子节点遍历的次数，遇到 # 或 stack[i] === 2 时表示该节点已经遍历完了。
如果最后存在节点未遍历完成，或者有节点未遍历到，说明序列是无效的
*/
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  if (preorder === '#') return true
  var children = [], i = 0, preorder = preorder.split(',')

  while (i < preorder.length) {
    if (preorder[i] === '#') {
      children[children.length - 1]++
      while (children[children.length - 1] === 2) {
        children.pop()
        if (children.length === 0) return i === preorder.length - 1
        children[children.length - 1]++
      }
    } else {
      children.push(0)
    }
    i++
  }

  return false
};