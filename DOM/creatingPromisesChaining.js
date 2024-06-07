const cart = ['shoes', 'pants'];

createOrder(cart)
    .then(function(orderID) {
        console.log(orderID);
        return orderID;
    })
    .then(function(orderID) {
        return proceedToPayment(orderID);
    })
    .catch(function(err) {
        console.log(err.message);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    });

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        //createOrder
        //validateOrder
        //orderID
        if (!validateCart(cart)) {
            const err = new Error('cart is not valid');
            reject(err);
        }

        const orderID = '5';
        if (orderID) {
            setTimeout(function() {
                resolve(orderID);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderID) {
    return new Promise(function(resolve, reject) {
        resolve('Payment successful');
    });
}

function validateCart(cart) {
    return false;
}
