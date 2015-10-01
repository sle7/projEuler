/**
 * Created by sle7 on 10/1/2015.
 */

/*
    Even Fibonacci Numbers
 */

var max = 4000000;

var numA = 1;
var numB = 2;
var numNext = 0;
var evenSum = 2;

while(numNext < max) {
   numNext = numA + numB;
   if(numNext%2 === 0) {
      evenSum += numNext;
   }
   numA = numB;
   numB = numNext;
}

console.log(evenSum);
