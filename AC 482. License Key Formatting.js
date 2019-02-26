/* 
这题 WA 了两次，都是没考虑到边界情况，不应该啊。
*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  var res = '', t = ''
  for (var i = S.length - 1; i >= 0; i--) {
    if (S[i] !== '-') {
      t = S[i].toUpperCase() + t
      if (t.length % K === 0) {
        res = res.length === 0 ? t : t + '-' + res
        t = ''
      }
    }
  }
  if (res.length === 0) return t
  if (t.length > 0) return t + '-' + res
  return res
};