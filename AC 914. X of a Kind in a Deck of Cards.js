/* 
最大公约数
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    var map = {}
    
    for (var i = 0; i < deck.length; i++) {
        map[deck[i]] = map[deck[i]] ? map[deck[i]] + 1 : 1
    }
    x = map[deck[0]]
    
    for (var i in map) {
        x = getGCD(map[i], x)
        if (x < 2) return false
    }
    
    return true
};

var getGCD = function (A, B) {
    var a = Math.max(A, B)
    var b = Math.min(A, B)
    while (b > 0) {
        var t = b
        b = a % b
        a = t
    }

return a
}