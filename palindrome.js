var name=[ 'n', 'i', 't', 'i', 'n' ] 
var index=name.length-1
var arr=[]
while (index >=0){
    arr.push(name[index])
    index--
}
console.log(arr)
var a=arr.join()
console.log(a)

if (name==a){
    console.log("palindrome")
}
else{
    console.log("Not palindrome")
}







