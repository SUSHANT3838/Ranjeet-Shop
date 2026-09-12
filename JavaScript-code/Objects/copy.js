/*
Copy of all inner and outer elements of object
it make seprate object 
it will allow to edit copy sepratly
it only change the data
it keep key as it is
*/
let user1 = {
    name : "Sushant",
    address : {
        city : "Sopalpur"
    }
};
let user2 = structuredClone(user1);// generate copy of user1

// update the value of user2
user2.name = "Sujal";
user2.address.city = "pandharpur";

console.log(user1);// print user1
console.log(user2);// print user2