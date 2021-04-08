let readlineSync=require("readline-sync");
let num1=readlineSync.question("enter a number : ");
let num2=readlineSync.question("enter a number :");
if(num1%num2==0){
    console.log("Divisible hai")
}else{
    console.log("Not Divisible")
}