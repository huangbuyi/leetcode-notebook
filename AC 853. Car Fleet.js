/* 
用每辆车到达终点的时间，来计算车队(fleet)数量
*/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  var cars = new Array(speed.length), count = 0
  for (var i = 0; i < speed.length; i++) {
      cars[i] = ({
          speed: speed[i],
          position: position[i]
      })
  }
  
  cars = cars.sort(function (a, b) {
      return b.position - a.position
  })

  var fleetTime = 0
  for (var i = 0; i < cars.length; i++) {
      var car = cars[i]
      var time = (target - car.position) / car.speed
      if (time > fleetTime) {
          fleetTime = time
          count++
      }
  }
  
  return count
};
