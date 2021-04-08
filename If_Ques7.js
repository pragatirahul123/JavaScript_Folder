let readlineSync=require("readline-sync");
let num1 = readlineSync.question("Enter a number :");
let num2 = readlineSync.question("Enter a number :");


if(num1>num2){
    console.log(num1)
}else{
    console.log(num2)
}