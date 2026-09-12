/* 
break -> end loop when condition true
continue -> skip one value or itteration when condition true
*/

// let i = 0;
// while(i <= 10){
//     if(i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

let i = 0;
while(i <= 10){
    if(i == 5){
        break;
    }
    console.log(i);
    i++;
}