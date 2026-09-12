let orders = [
    {
        id : 1,
        items : [
            {"tital": "Laptop", "price": 50000},
            {"tital": "Mouse", "price": 500}
        ],
        address : {
            city : "solapur",
            pincode : 413310
        }
    },
    {
        id : 2,
        items : [
            {"tital": "Computer", "price": 80000},
            {"tital": "CPU", "price": 25000}
        ],
        address : {
            city : "Pandharpur",
            pincode : 413304
        }
    }
];
console.log(orders[0]);
let products = orders.map(id => orders[0].items[0]);
console.log(products);

console.log(orders[0].items[0]);