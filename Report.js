var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
] 

var index=0
var sum=0
for (index=0;index<marks.length;index++){
    for(var jar=0;jar<marks[index].length;jar++){
        sum=sum+marks[index][jar]

    }
}
console.log(sum)