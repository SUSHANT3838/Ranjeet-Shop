// take multipul argument from user and perform opration
function addition(...numbers){
    let total = 0;
    // used to access multipul valus
    for(num of numbers){
        total += num;
    }
    return total;
}

console.log(addition(1,2,3,4,5));
console.log(addition(10,20));
console.log(addition(5));