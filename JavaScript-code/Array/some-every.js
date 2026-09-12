let nums = [2,3,4,5,6];

// checking for isSome values even
let isEven = nums.some(function(value){
    return value % 2 === 0;
});
console.log(isEven);

// checking for isAll values even
let allVal = nums.every(function(value){
    return value % 2 === 0;
});
console.log(allVal);