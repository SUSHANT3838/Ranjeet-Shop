let nums = [10,20,30,40,50,60];

// for value
let found = nums.find(function(value, index, array){
    return value > 40;
});
console.log(found);

// for value
let foundIdx = nums.findIndex(function(value, index, array){
    return value > 40;
});
console.log(foundIdx);