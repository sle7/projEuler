/**
 * Created by sle7 on 10/1/2015.
 */

/*
    Multiples of 3 and 5
 */

var maxNum = 1000;

var sum35multiple = function(num) {
  var sum = 0;
  for (var i = 1; i < maxNum; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sum35multiple(maxNum));
