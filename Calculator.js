function calculator (x,y,operator){
    if (operator=="add"){
        add=x+y
        return add
    }
    if (operator == "sub"){
        sub=x-y
        return sub

    }
    if (operator=="multi"){
        multi=x*y
        return multi
    }
    if (operator=="module"){
        module=x%y
        return module
    }
    if (operator=="divi"){
        divi=x/y
        return divi
    }
     
    
}
console.log(calculator(4,5,"add"))
console.log(calculator(15,5,"sub"))
console.log(calculator(4,4,"multi"))
console.log(calculator(5,10,"module"))
console.log(calculator(20,5,"divi"))

