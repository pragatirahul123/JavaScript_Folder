let number = 30
let list = [10, 11, 12, 13, 14, 17, 18, 19]
let index=0
let arr=[]
while (index<list.length){
    var jar=index+1
    while (jar<list.length){
        if (list[index] + list[jar] == number){
            a1 = [list[index],list[jar]]
            arr.push(a1) 
        }   
        jar++
        }

    index++
    }
console.log(arr)





