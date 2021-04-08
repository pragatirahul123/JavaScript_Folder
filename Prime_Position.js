let readlineSync=require('readline-sync');
let num=readlineSync.question("enter a prime number : ");
var pos=0;
var index=1;
for(index=1;index<=num;index++){
    var c=0
    for (var j=2;j<=index;j++){
        if (index%j==0){
            c=c+1
}
        }


    if (c==1){
        pos=pos+1
        if (index==num){
            console.log("position" ,pos)
        }
    }
}
    

    









    
