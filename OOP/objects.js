//1_Object literals

/*const person = {
    name :'john',
    age :30 ,
    sayHello(){
        console.log(`Hello,this is me`);
    }
};

person.name;
person.sayHello();*/


//2_using 'Object' Constructor


/*const person = new Object();
    person.name ='john',
    person.age = 30 ,
    person.sayHello() =function(){
        console.log(`Hello,this is me`);
    };

person.name;
person.sayHello();*/



//3_using constructor function

function person(name,age){
    this.name = name ; 
    this.age = age ; 
    this.sayHello = function(){
        console.log(`${this.name}`);
    };
}

const person1 = new person('jon',20);
person1.sayHello();


//using the 'class' keyword ....already learnt
