/*
combine all values of array together and process on it
*/
let numbers = [12,23,35];
let sum = numbers.reduce(function(acc, value){
    return acc + value;
}, 0);
console.log(sum);