/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  var led = {}
  for (var i = 0; i < 60; i++) {
    var j = i, count = 0
    while (j > 0) {
      if (j % 2 === 1) {
        count++
      }
      j = j >> 1
    }
    led[count] = led[count] || []
    led[count].push(i)
  }

};

readBinaryWatch(5)