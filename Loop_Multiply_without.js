let readlineSync=require('readline-sync');
let num=readlineSync.question("Enter a first  number :")
let num1=readlineSync.question("Enter a second number : ")

let index=0
let sum=0
for(index=0; index<num;index++){
    sum=sum+parseInt(num1)
    }   

console.log(sum)
