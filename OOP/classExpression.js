//1_Anonymous class expression ->doesn't have a name . 

/*const MyClass = class{
    constructor(name){
        this.name = name ; 
    }

    sayHello(){
        console.log(`Hello,my name is ${this.name}`);
    }
}

const instance = new MyClass('john');
instance.sayHello();
*/


//2_Named class Expression
// It has a name but this name is only available within the class itself 
// useful for recursion or internal references .

const MyClass = class MyClassInternal{
    constructor(name){
        this.name = name ; 
    }

    sayHello(){
        console.log(`This is ${this.name}`);
    }

    getClassName(){
        return MyClassInternal.name ; 
    }
}


const instance = new MyClass('john');
instance.sayHello();
console.log(instance.getClassName());