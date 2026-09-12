let user = {
    name : "Sushant",
    age : 21,
    address : {
        state: "Maharashtra",
        city : "Solapur",
        village : "Chandapuri",
        pincode : 413310
    }
};
console.log(user.address);
delete user.address.state;
console.log(user);
console.log(user.address.city);// solapur
console.log(user["address"]["city"]);// solapur
user.address.taluka = "malshiras";// add new pair of key value
user.address.village = "Shetewasti"; // update
console.log(user.address);