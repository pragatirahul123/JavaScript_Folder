let readlineSync=require('readline-sync');
let num=readlineSync.question("enter a position : ");
position=0
index=1
while (true){
    var c=0
    var j;
    for (j=2;j<=index;j++){
        if (index%j==0){
            c=c+1
    
    }
}


    if (c==1){
        position=position+1
        if (position==num){
            console.log(index)
            break
        }
    }
    index=index+1
}



   

    
    

    
