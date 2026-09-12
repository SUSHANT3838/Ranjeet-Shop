/*

AND && -> both condition true
OR || -> one of two is true
NOT ! -> true=>false, false=>true

*/

let isLoggedIn = true;
let emailCorrect = true;
let passwordCorrect = true;

if(!isLoggedIn){
    console.log("Login First...");
    if(emailCorrect && passwordCorrect){
        console.log("Login Successful!");
    }else{
        console.log("Wrong Credintials!");
    }
}else{
    console.log("Welcome!");
}

