let readlineSync=require('readline-sync');
let num=readlineSync.question("enter a position : ");
var i=2
var count=0
while (true){
    j=1
    flag=0
    while (j<i){
        if(i%j==0){
            flag++
        }
        j++
    }
    if(flag==1){

        count++
        console.log(i)
        if(count==num){
            break;
        }
        
    }
    i++
    }




