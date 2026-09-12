/* 

if(Condition){
    Execute when contion true
}else{
    execute when condition false
}

*/

let mark = 100;

if(mark >=0 && mark <=100){
    if(mark >= 90 && mark <= 100){
        console.log("Gread : A");
    }else if(mark >= 80 && mark < 90){
        console.log("Gread : B");
    } else if(mark >= 70 && mark <= 80){
        console.log("Gread : C");
    }else if(mark >= 60 && mark <= 70){
        console.log("Gread : D");
    }else{
        console.log("Fail");
    }
}else{
    console.log("Enter Valid mark!");
}