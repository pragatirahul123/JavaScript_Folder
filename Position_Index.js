var arr=[2,3,5,1,6,9]
let readlineSync=require('readline-sync');
let num=readlineSync.question("enter a number : ");

var index=0
while (index<arr.length){
    if (num==arr[index]){
        console.log(index)
    }
    index++

}
