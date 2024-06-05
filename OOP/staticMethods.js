// These methods are called on the class directly , not on an instance of the class . 

//1_Invoking one static method 
/*class ball{
    static example1(){
        return "static method 1";
    }
};
console.log(ball.example1());
*/



//2_Invoking mroe than one static method 
/*class ball{
    static example1(){
        return "static method 1";
    }
    static example2(){
        return "static method 2";
    }
}

console.log(ball.example1());
console.log(ball.example2());
*/

//3_Invoking more than one static methods with same names
//            -> always prints the last static method 
/*class ball{
    static example1(){
        return "static method 1";
    }
    static example1(){
        return "static method2";
    }
}

console.log(ball.example1());*/


//4_Invoking static method within the node static method 

class ball{
    static example1(){
        return "static method1";
    }

    example2(){
        console.log(ball.example1());
    }
}

var ball1 = new ball();
ball1.example2();