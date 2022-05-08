// 2 power 53
var powResult = Math.pow(2, 53);

// round to the closest integer -> 1.0
var roundResult = Math.round(.6);

// round up to an integer -> 1.0
var ceilResult = Math.ceil(.6);

// round down to an integer -> 0.0
var floorResult = Math.floor(.6);

// absolute value -> 5
var absResult = Math.abs(-5);

// return the maximum value -> 6
var maxResult = Math.max(1, 4, 6);

// return the minimum value -> 1
var minResult = Math.min(1, 4, 2)

// pseudo-random value x, where (0 <= x <= 1.0 )
var randomResult = Math.random();

// Phi's number constant
var piResult = Math.PI;

// Euler's number constant
var eResult = Math.E;

// Square root of 3
var sqrtResult = Math.sqrt(3);

// Cubic root of 3
var cubicResult = Math.pow(3, 1/3);

// Sine of 0 (trigonometry)
var sinResult = Math.sin(0);

// log of 10 (Logarithm)
var logResult = Math.log(10);

// log in base ten (Logarithm)
var baseTenLogResult = Math.log(100) / Math.LN10;

// log in base two (Logarithm)
var baseTwoLogResult = Math.log(512) / Math.LN2;

// Math.E in cube
var expResult = Math.exp(3);

var results = [
  powResult, roundResult, ceilResult,
  floorResult, absResult, maxResult,
  minResult, randomResult, piResult,
  eResult, sqrtResult, cubicResult,
  sinResult, logResult, baseTenLogResult,
  baseTwoLogResult, expResult
];


results.forEach(function show(result) {
  console.log(result);
})
