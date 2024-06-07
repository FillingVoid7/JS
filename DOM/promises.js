//****Solving Inversion of Control with promises
// const cart = ['adidas ' , ' nike ']

// const promise  = api.createOrder(cart)

// promise.then(function(orderID){
//     api.proceedToPayment();

// });


//**********What the promises object actually looks like in browser ?
// const GITHUB_API = "https://api.github.com/FillingVoid7"
// const user = fetch(GITHUB_API)
// console.log(user)

// //callback using promises
// user.then(function(data){
//     console.log(data)
// })



//************Solving callback HELL

// const promiseObject = api.createOrder('cart')
// api.createOrder('cart')
//     .then(function(orderID){
//     api.proceedToPayment(orderID)
//     })

//     .then(function(paymentINfo){
//     api.showOrderSummaryPage(paymentINfo)
//     })

//     .then(function(){
//     api.updateWallet();
//     })