// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let double = numbers.map(function(value, index, array){
//     return value * 2;
// });
// console.log(double);

let prices = [100,200,300,400];

// [a => a + (a * 18) / 100] = [a => a * 1.18]
let afterTax = prices.map(a => a * 1.18); 
console.log(afterTax);