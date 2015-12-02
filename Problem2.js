/**
 * Created by sle7 on 10/1/2015.
 */

/*
    Even Fibonacci Numbers
 */

var max = 4000000;

var sumFibEven = function(num) {
  var numA = 1;
  var numB = 2;
  var numNext = 0;
  var sum = 2;

  while (numNext < max) {
    numNext = numA + numB;
    if (numNext % 2 === 0) {
      sum += numNext;
    }
    numA = numB;
    numB = numNext;
  }
  return sum;
};

console.log(sumFibEven(max));
