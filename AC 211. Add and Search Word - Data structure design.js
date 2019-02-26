var TrieNode = function (val) {
  this.val = val || ''
  this.children = []
  this.complete = false
}

/**
* Initialize your data structure here.
*/
var WordDictionary = function () {
  this.root = new TrieNode()
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function (word) {
  var letters = word.split('')
  var curr = this.root
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i]
    if (!curr.children[letter]) {
      curr.children[letter] = new TrieNode(letter)
    }
    curr = curr.children[letter]
  }
  curr.complete = true
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function (word) {
  var _search = function (curr, word) {
    var letters = word.split('')
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i]
      if (letter === '.') {
        for (var char in curr.children) {
          if (_search(curr.children[char], word.substr(i + 1))) {
            return true
          }
        }
        return false
      }
      if (!curr.children[letter]) {
        return false
      }
      curr = curr.children[letter]
    }
    return curr.complete
  }
  return _search(this.root, word)
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = Object.create(WordDictionary).createNew()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

/*
类似 Trie 数据结构
*/