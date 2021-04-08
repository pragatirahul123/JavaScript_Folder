let readlineSync=require('readline-sync');
let litre = readlineSync.question("enter a water litre : ");

if (litre < 1){
    console.log("pani bharna hai")
}
else if(litre > 1 && litre<10){
    console.log("aur nhi bharna hai")

}else {
    console.log("overflow")
}


