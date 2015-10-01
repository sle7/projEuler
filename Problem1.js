/**
 * Created by Sle7 on 10/1/2015.
 */

var maxNum = 1000;
var sum = 0;

for( var i=1; i<maxNum; i++ ) {
    if( i%3 === 0  || i%5 === 0 ) {
        sum += i;
    }
}
console.log(sum);


