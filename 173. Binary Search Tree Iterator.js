/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  var curr = this.root = root
  var nodes = this.nodes = []
  while (curr) {
    nodes.push(curr)
    curr = curr.left
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (!this.hasNext()) return
  var nodes = this.nodes, curr = nodes.pop(), t
  if (curr.right) {
    nodes.push(curr.right)
    t = curr.right
    while (t.left) {
      nodes.push(t.left)
      t = t.left
    }
  }
  return curr.val
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.nodes.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */