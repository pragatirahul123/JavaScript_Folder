var arr=[1,2,3,4,5,2,3]
//output=[1,3,6,10,15]
var i=0
var sum=0
var v=[]
while (i<arr.length){
    sum=sum+arr[i]
    i++
    v.push(sum)


}
console.log(v)
