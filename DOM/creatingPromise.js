const cart = ['shoes','pants'];

const promise = createOrder(cart); //orderID
console.log(promise);

promise.then(function(orderID){
    console.log(orderID);
})
.catch(function(err){
    console.log(err.message);
})



function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateOrder
        //orderID
        if(!validateCart(cart)){
            const err = new Error('cart is not valid');
            reject(err);
        }

        const orderID = '5';
        if(orderID){
            setTimeout(function(){
                resolve(orderID);
            },5000);
        }
    });
    return pr ;
}

function validateCart(cart){
    return false; 
}
