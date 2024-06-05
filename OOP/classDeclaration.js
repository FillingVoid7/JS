class MyClass{
    constructor(name){
        this.name = name ; 
    }

    sayHello(){
        console.log(`Hello , my name is ${this.name}`);
    }
}

const instance = new MyClass('john');
instance.sayHello();