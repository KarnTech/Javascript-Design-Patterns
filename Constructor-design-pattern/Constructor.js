class Fruit {
    constructor(name, taste){
         this.name = name
         this.taste = taste
    }
    //this creates a new getaste for each instance
    getaste(){
        console.log(this.taste + " " + this.name)
    }
}

//this is better for inheritance. 
Fruit.prototype.gettaste = function (){
        console.log(this.taste + " " + this.name)

}

const apple  = new Fruit('apple', 'sweet')
const orange  = new Fruit('orange', 'sour')

console.log(toString functions are the same object: ${apple.getaste === orange.getaste})