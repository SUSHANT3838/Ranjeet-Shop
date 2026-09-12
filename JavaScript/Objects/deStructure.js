let user = {
    name : "Sushant",
    age : 21,
    address : {
        city : "Solapur",
        village : "Shetewasti",
        pincode : 413310
    }
};

let { name, age, address : {city, village, pincode} } = user;

/*
name = user.name;
age = user.age;
address = user.address;
 */
console.log(name);
console.log(city);
console.log(pincode);
