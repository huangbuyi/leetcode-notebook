var TrieNode = function(val) {
  this.val = val || ''
  this.children = []
  this.complete = false
}

var Trie = function() {
  this.root = new TrieNode()
}

Trie.prototype.insert = function(word) {
  var letters = word.split('')
  var node = this.root
  for (var i = 0; i < letters.length; i++) {
      var letter = letters[i]
      if (!node.children[letter]) {
          node.children[letter] = new TrieNode(letter)
      }
      node = node.children[letter]
  }
  node.complete = true
}

Trie.prototype.search = function(node, word) {
  var letters = word.split('')
  for (var i = 0; i < letters.length; i++) {
      var letter = letters[i]
      if (!node.children[letter]) {
          return false
      }
      node = node.children[letter]
  }
  return node.complete
}

/**
* Initialize your data structure here.
*/
var MagicDictionary = function() {
  this.trie = new Trie()
};

/**
* Build a dictionary through a list of words 
* @param {string[]} dict
* @return {void}
*/
MagicDictionary.prototype.buildDict = function(dict) {
  for (var i = 0; i < dict.length; i++) {
      this.trie.insert(dict[i])
  }
};

/**
* Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
* @param {string} word
* @return {boolean}
*/
MagicDictionary.prototype.search = function(word) {
  var letters = word.split('')
  var node = this.trie.root
  var search = this.trie.search

  for (var i = 0; i < letters.length - 1; i++) {
      var letter = letters[i]
      for (var child in node.children) {
          if (child !== letter && search(node.children[child], word.substr(i + 1))) {
              return true
          }
      }
      if (!node.children[letter]) {
          console.log('false', word, node.val)
          return false
      }
      node = node.children[letter]
  }
  
  for (var child in node.children) {
      var childNode = node.children[child]
      if (childNode.complete && child !== letters[letters.length - 1]) {
          return true
      }
  }
  
  return false
};

/** 
* Your MagicDictionary object will be instantiated and called as such:
* var obj = Object.create(MagicDictionary).createNew()
* obj.buildDict(dict)
* var param_2 = obj.search(word)
*/

/* 
前几天做了几道关于 Trie Tree 的题，导致我在设计数据结构的时候第一想到的就是 Trie Tree。虽然 search 实现比较复杂，好在时间复杂度O(1)和空间复杂度O(n)都比较好。
看了下讨论，用 HashMap 的比较多，两个热门讨论：
1：一个是把单词移除一个字符作为键，值是一个数组，保存移除的字符和位置，搜索的时候查找每种组合，遍历这个数组，判断缺省字符的位置和值，如果位置相同但值不同，则变体存在。
我认为这个算法不好，比较浪费空间，而且在最坏情况下，时间复杂度会到O(n)（如果所有单词都包含相同的组合，例如：hello bello, elloo, elllo，都包含了 ello，搜索包含 ello 的单词时时间复杂度就比较差）。
2: 另一个是把单词的一个字符替换为特殊字符，如*号，做为键，值为这个组合的个数，另外还要保存单词本身。搜索的时候查找每种组合，组合个数大于2或等于1时单词不存在时，则变体存在。
这个算法在时间复杂度上要比上一种好。
Trie Tree 算法是最节省空间的。
*/