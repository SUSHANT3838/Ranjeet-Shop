let a = Number(prompt("Enter a "));
let b = Number(prompt("Enter b "));
let c = Number(prompt("Enter c "));
let d = Number(prompt("Enter d "));

let selctVariableA = prompt("Choose two value (a,b,c,d)");
let selctVariableB = prompt("Choose two value (a,b,c,d)");
let selectOperation = prompt("Choose Operation(+,-,/,*)");

const values = {a, b, c, d};

function Calculator(x, y){
    switch(selectOperation){
        case '+': console.log(x + y); break;
        case '-': console.log(x - y); break;
        case '*': console.log(x * y); break;
        case '/': 
            if(y > 0){
                console.log(x / y);
            }else{
                console.log("Enter valid value");
            }break;
        default: console.log("Invalid Operation");
    }
}

if(values[selctVariableA] !== undefined && values[selctVariableB] !== undefined){
    Calculator(values[selctVariableA], values[selctVariableB]);
}else{
    console.log("Enter valid number")
}