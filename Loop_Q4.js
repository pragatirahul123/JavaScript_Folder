let readlineSync=require('readline-sync');
let num=readlineSync.question("How many time : ");
var index=1;
var sum=0;
while (index<= num){
    let num1=readlineSync.question("enter a number :");
    sum=sum+parseInt(num1)
    index++
}
console.log(sum)


