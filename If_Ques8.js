let readlineSync=require('readline-sync');
let  num=readlineSync.question("Enter a number : ");

if (num %5==0 && num%15==0){
    console.log("Divisible hai");
}else{
    console.log("Not divisible");
}

