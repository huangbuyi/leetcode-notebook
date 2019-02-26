var assert = require('assert')
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  var res = []

  var _restore = function (si, n, ip) {
    // 剩余
    if (si > s.length || s.length - si > 12 - 3 * n) {
      return
    }

    if (n === 4) {

      res.push(ip.substring(1, ip.length))
      return
    }
    for (var i = 1; i <= 3; i++) {
      var sub = s.substring(si, si + i)
      if (sub <= 255) {
        if (i >= 2 && sub[0] === '0') {
          return
        }
        _restore(si + i, n + 1, ip + '.' + sub)
      }
    }
  }
  _restore(0, 0, '')
  return res
};

assert.deepEqual(restoreIpAddresses('0000'), ['0.0.0.0'])
assert.deepEqual(restoreIpAddresses('11111'), ["1.1.1.11", "1.1.11.1", "1.11.1.1", "11.1.1.1"])
assert.deepEqual(restoreIpAddresses('25525511135'), ["255.255.11.135", "255.255.111.35"])
assert.deepEqual(restoreIpAddresses('2562151135'), ["25.62.151.135"])
assert.deepEqual(restoreIpAddresses('010010'), ["0.10.0.10", "0.100.1.0"])
