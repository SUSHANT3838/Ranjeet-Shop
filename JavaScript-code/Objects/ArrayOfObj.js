/*
Array of object 
[
    {"name": "Sushant", "age": 21}
    {"name": "Sujal", "age": 19}
    {"name": "Suraj", "age": 15}
    {"name": "Kedar", "age": 16}
    {"name": "Srushti", "age": 23}
]
*/
let users = [
    {"name": "Sushant", "age": 21},
    {"name": "Sujal", "age": 19},
    {"name": "Suraj", "age": 15},
    {"name": "Kedar", "age": 16},
    {"name": "Srushti", "age": 23}
];
console.log(users);// access all users

console.log(users[0].name);// access name of firsr user

console.log(users[2].age);// access age of third user

users[2].age = 16; // update the age of third user
console.log(users[2].age);// access age of third user

users.push({"name": "Rutuja", "age": 21});
console.log(users);