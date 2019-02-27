/* 
思路，使用 Stack 保存存活的星球。遍历数组，将爆炸的星球出栈。
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  var res = []
  
  for (var i = 0; i < asteroids.length; i++) {
    var tail = res[res.length - 1], a = asteroids[i]
    
    while (a < 0 && tail > 0 && -a > tail ) {
      res.pop()
      tail = res[res.length - 1]
    }
    
    if (a < 0 && -a === tail) {
      res.pop()
    }
    
    if (a > 0 || tail < 0 || !tail) {
      res.push(a)
    }
  }
  
  return res
};