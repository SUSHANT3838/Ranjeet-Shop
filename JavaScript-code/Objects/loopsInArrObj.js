let users = [
    {"name": "Sushant", "age": 21},
    {"name": "Sujal", "age": 19},
    {"name": "Suraj", "age": 15},
    {"name": "Kedar", "age": 16},
    {"name": "Srushti", "age": 23}
];

// access names of all user using forEach loop
users.forEach(function(user){
    console.log(user.name);
});
// output
// Sushant
// Sujal
// Suraj
// Kedar
// Srushti

// access names of all user using map
let user = users.map(user => user.name);
console.log(user);
// output
// [ 'Sushant', 'Sujal', 'Suraj', 'Kedar', 'Srushti' ]

// filter by using age
let seniours = users.filter(user => user.age > 18);
console.log(seniours);