/**
 * @param {number} n
 * @return {number}
 */


var countPrimes = function (n) {
  var noPrimes = new Array(n), count = 0
  for (var i = 2; i < n; i++) {
    if (noPrimes[i] === undefined) {
      noPrimes[i] = false
      count++
      for (var j = 2; j * i < n; j++) {
        noPrimes[i * j] = true
      }
    }
  }

  return n < 3 ? 0 : count
};

/* 
假设 n = 11，2 的倍数 4,6,8,10 都为非素数，3 的倍数 6, 9 都为素数。4 的倍数也是 2 的倍数，跳过节省计算量，因此，只需要计算素数的倍数即可。
于是 11 以内的素数为 2,3,5,7 共四个
使用 Javascript 时，可能出现超内存的错误
Ps：初始化数组长度var a = new Array(n)，效率高于使用字面量初始化(var a = [])。可能与 C++ 可变数组随元素增加，要分配新内存有关。
*/

var assert = require('assert')
assert.equal(countPrimes(0), 0)
assert.equal(countPrimes(1), 0)
assert.equal(countPrimes(2), 0)
assert.equal(countPrimes(3), 1)
assert.equal(countPrimes(100), 25)
assert.equal(countPrimes(1024), 172)


/*
超时
var countPrimes = function(n) {
  var primes = [2]
  for (var i = 3; i < n; i++) {
      var isPrimes = true
      for (var j = 0; j <= Math.sqrt(i); j++) {
           if (i % primes[j] === 0) {
               isPrimes = false
               break
           }
      }
      if (isPrimes) {
          primes.push(i)
      }
  }
  return n < 3 ? 0 : primes.length
};

超内存
var countPrimes = function(n) {
  var noPrimes = [], count = 0
  for (var i = 2; i < n; i++) {
    if (!noPrimes[i]) {
      count++
    }
     for (var j = 2; j * i < n; j++) {
       noPrimes[i * j] = true
     }
  }

  return n < 3 ? 0 : count
};
*/

