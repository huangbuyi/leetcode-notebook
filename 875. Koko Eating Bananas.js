/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  var BST = new BST()
  for (var i = 0; i < piles.length; i++) {
    BST.insert(piles[i])
  }
  for (var i = 0; i < H - piles.length; i++) {
    BST.insert(BST.pop() / 2)
  }
};

var TreeNode = function(val) {
  this.val = val
  this.left = this.right = null
}

var BST = function() {
  this.root = null
}

BST.prototype.insert = function(val) {
  if (!this.root) {
    this.root = new TreeNode(val)
    return
  }
  var curr = this.root, p = null
  while (curr) {
    p = curr
    curr = val < curr.val ? curr.left : curr.right
  }
  if (val < p.val) p.left = new TreeNode(val)
  else p.right = new TreeNode(val)
}

BST.prototype.pop = function() {
  var curr = this.root, p
  while (curr.right) {
    p = curr
    curr = curr.right
  }
  if (!p) this.root = curr.left
  else p.right = null
  return curr.val
}