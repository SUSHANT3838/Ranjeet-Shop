/*
types of scope
    global
    function
    block
*/

// global -- declare globaly -> access anywhere 
let x = 10;
function demo(){
    console.log(x);
}
console.log(x);
demo();

// function -- declare in function -> access only inside function
function add(){
    let a = 20;
    console.log(a);
}
add();

// block -- declare in block -> use in only block
// use only 'let & const'
{
    let y = 30;
    console.log(y);
}