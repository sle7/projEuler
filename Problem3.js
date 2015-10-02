/**
 * Created by sle7 on 10/2/2015.
 */

/*
    Largest Prime Factor
 */

var largestPrimeFactor = function(num) {
    var largest = 0;
    var curFactor = 2;
    var current = true;
    while(largest < num) {
        while(current) {
            if(num % curFactor === 0) {
                largest = curFactor;
                num = num/curFactor;
            }
            else {
                current = false;
            }
        }
        curFactor++;
        current = true;
    }
    return largest;
};

console.log(largestPrimeFactor(600851475143));
