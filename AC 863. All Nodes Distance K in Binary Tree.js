/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    var res = []
    
    var search = function(node) {
        if (!node) {
            return
        }
        
        if (node === target) {
            if (K === 0) {
                res.push(node.val)
                return -1
            }
            find(node.left, K - 1)
            find(node.right, K - 1)
            return K - 1
        }
        
        var distance
        distance = search(node.left)
        if (distance === 0) {
            res.push(node.val)
            return -1
        }
        if (distance > 0) {
            find(node.right, distance - 1)
            return distance - 1
        }
        distance = search(node.right)
        if (distance === 0) {
            res.push(node.val)
            return -1
        }
        if (distance > 0) {
            find(node.left, distance - 1)
            return distance - 1
        }
    }
    
    var find = function(node, distance) {
        if (!node) {
            return
        }
        
        if (distance === 0) {
            res.push(node.val)
            return
        }
        
        find(node.left, distance - 1)
        find(node.right, distance - 1)
    }
    
    search(root)
    return res
};