let readlineSync=require('readline-sync');
let num=readlineSync.question("enter a number : ");
var result=0;
for(var i=1; i<=num;i++){
    if( num%i==0){
        result=result+1;
    }
    

}
if(result==2){
    console.log("Prime number" , num);
}else{
    console.log("Not prime Number" , num);
}









