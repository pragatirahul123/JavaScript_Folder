var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7] 
var max=0
var index=0
while (index<numbers.length){
    if (numbers[index]>max){
        max=numbers[index]
    }
    index++
}
console.log(max)