let readlineSync=require('readline-sync');
let num= readlineSync.question("enter a number : ")

if(num%2==0){
    console.log("Divisible hai")
}else{
    console.log("Not divisible")
}