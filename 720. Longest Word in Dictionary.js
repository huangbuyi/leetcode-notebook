/* 
思路：词典树(Trie Tree)。遍历词典树，找出符合性质的最长单词。按题意，要找出词典树中连续 complete = true 的最长路径，使用递归对词典树进行搜索。
还可以用 hashMap 保存子字符串，搜索时从长到短搜索子字符串，占用空间较大。
*/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  var trie = new Trie()
  trie.add('')
  for (var i = 0; i < words.length; i++) {
    trie.add(words[i])
  }
  return trie.longestWord()
};

var TrieNode = function (val) {
  this.val = val
  this.children = {}
  this.complete = false
}

var Trie = function () {
  this.root = new TrieNode('')
}

Trie.prototype.add = function (letter) {
  var curr = this.root
  for (var i = 0; i < letter.length; i++) {
    var c = letter[i]
    if (!curr.children[c]) curr.children[c] = new TrieNode(c)
    curr = curr.children[c]
  }
  curr.complete = true
}

Trie.prototype.longestWord = function () {
  var helper = function (node) {
    if (!node.complete) return ''
    var max = 0, res = '', s

    for (var c in node.children) {
      s = helper(node.children[c])
      if (s.length > max || (s.length === max && s < res)) {
        max = s.length
        res = s
      }
    }

    return node.val + res
  }

  return helper(this.root)
}