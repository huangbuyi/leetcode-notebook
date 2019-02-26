/* 
先对 indexes 排序，再从后往前替换字符
*/

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
  var replace = []
  for (var i = 0; i < indexes.length; i++) {
    replace.push({
      index: indexes[i],
      source: sources[i],
      target: targets[i]
    })
  }
  replace.sort(function (a, b) {
    return a.index - b.index
  })

  for (var i = replace.length - 1; i >= 0; i--) {
    var s = replace[i].source
    var t = replace[i].target
    var index = replace[i].index
    if (S.substr(index, s.length) === s) {
      S = S.substring(0, index) + t + S.substring(index + s.length)
    }
  }

  return S
};