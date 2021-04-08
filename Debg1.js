// console.log("We will learn debugging by removing all the errors from this python file.")

//####################################################################################################


// var year = 2016
// var name = "NavGurukul"
// console.log (name + ', ' + year + " " + "mein start hua tha!") 



// ###################################################################################################

// let readlineSync=require('readline-sync');
// let price_milk = readlineSync.question("1L milk ka price daalo? ");
// console.log ("10L milk " + price_milk * 10 + " rupees ka aata hai.");

// #############################################################################################

// let readlineSync=require('readline-sync');
// let number=readlineSync.question("enter a decimal number : ");
// console.log("your number divided by 2 is equal to = " + number/2) 

// ###########################################################################################

// var mangoes=5;
// var mangoes1 =mangoes+5
// console.log(mangoes1/5)

// ####################################################################################

// let readlineSync=require('readline-sync');
// let speed =readlineSync.question("gaadi ki speed dalo : ");
// if(speed <30){
//     console.log ("Speed kam hai")
// }
// else if (speed > 30 && speed <60){
//     console.log ("Speed bahot kam hai")
// }else{

//     console.log("Speed bahot fast hai")

// }
// ###############################################################################################

let readlineSync=require('readline-sync');
let day=readlineSync.question("enter a day : ");
let time=readlineSync.question("enter a time :");
if(day=="tuesday" && time=="dinner"){
    console.log("pav_bhaji bnegi aaj");

}if (day=="monday" || time=="lunch"){
    console.log("dal bnegi")
}



