let readlineSync=require('readline-sync');
let num=readlineSync.question("enter a number : ");

if (num<10){
    console.log("10 se chhota hai")
}else if  (num<20){
    console.log("20 se chhota hai")
}
else if(num>20){
    console.log("20 se bada hai")
}


    
