function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multi(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}

function calculate(operator){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let resultValue = 0;

    if(operator === '+'){
        resultValue = add(number1, number2);
    }else if(operator === '-'){
        resultValue = sub(number1, number2);
    }else if(operator === '*'){
        resultValue = multi(number1, number2);
    }else if(operator === '/'){
        resultValue = div(number1, number2);
    }
    
    document.getElementById("result").innerText = "Result : " + resultValue;
    
}