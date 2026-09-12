let numbers = [2,5,8,9,3,4,6];
let filtered = numbers.filter(function(value, index, array){
    return value % 3 === 0;
});
console.log(filtered);