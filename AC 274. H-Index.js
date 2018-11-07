/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations = citations.sort(function (a, b) { return a - b })
  for (var i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) {
      return citations.length - i
    }
  }
  return 0
};