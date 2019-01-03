var TrieNode = function (val) {
    this.val = val || ''
    this.children = {}
    this.complete = false
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var letters = word.split('')
    var curr = this.root
    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i]
        if (!curr.children[letter]) {
            return false
        }
        curr = curr.children[letter]
    }
    return curr.complete
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var letters = prefix.split('')
    var curr = this.root
    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i]
        if (!curr.children[letter]) {
            return false
        }
        curr = curr.children[letter]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */