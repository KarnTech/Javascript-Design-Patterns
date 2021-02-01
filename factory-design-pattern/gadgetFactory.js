const Laptop  = require('./laptop')
const Tablet  = require('./tablet')

const gadget  = {Laptop, Tablet}

function creategadget(type, attributes){
    const g = gadget[type]
    return new g(attributes)
}


const mylaptop  = creategadget("Laptop", {ram:8})
const mytablet  = creategadget("Tablet", {ram:19})
console.log(mylaptop)
console.log(mytablet)
