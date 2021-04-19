magic_square = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 

var index=0
while (index<magic_square.length){
    var jar=0
    let sum=0
    while (jar<magic_square.length){
        sum=sum+magic_square[index][jar]
        jar=jar+1
}
    index=index+1

console.log(sum)
}



        


