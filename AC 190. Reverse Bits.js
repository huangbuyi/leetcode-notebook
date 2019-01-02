/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0
    for (var i = 0; i < 32; i++) {
        res = 2 * res + (n % 2)
        n = Math.floor(n / 2)
    }
    return res
};