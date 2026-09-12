let student = {
    name : "Sushant",
    age : 20,
    class : "TY_B",
    rollNo : 72,
    isRegular : true
};
console.log(student);
console.log(student.name);// access using dot(.)
console.log(student["class"]);// access using ["key"]
student.age = 21;// update age
student.cgpa = 9.15;// add cgps
delete student.isRegular;// delete object pair
console.log(student);