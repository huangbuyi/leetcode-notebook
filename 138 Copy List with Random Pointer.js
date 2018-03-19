/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

var copyRandomList = function(head) {
    if (!head || head.label === undefined) return {}
    var src = head, dist = {}, distHead = dist, map = new WeakMap()
    while (src) {
        var node = {
            label: src.label,
            next: null,
            random: src.random
        }
        dist.next = node
        map.set(src, node)
        dist = node
        src = src.next
    }
    dist = distHead.next
    while (dist) {
        dist.random = dist.random ? map.get(dist.random) : null
        dist = dist.next           
    }
    return distHead.next
};
var a1 = {},a2 = {},a3 = {},a4 = {}

a1 = Object.assign(a1, {label:1,next:null,random:a1})
a2 = Object.assign(a2, {label:2,next:a1,random:null})
a3 = Object.assign(a3, {label:3,next:a2,random:a1})
a4 = Object.assign(a4, {label:4,next:a3,random:a2})

var r = copyRandomList({})

while (r) {
    console.log(r)
    r = r.next
}