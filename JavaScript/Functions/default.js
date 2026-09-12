// default values of parameter
// used when argument not passed
function add(a = 0, b = 0){
    let sum = a + b;
    return sum;
}

console.log(add());// no argument - function use default value
console.log(add(5,6));// with argument - function use this value