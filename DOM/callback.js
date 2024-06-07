// console.log('jack');

// setTimeout(function(){
//     console.log('Pack');
// },2000)

// console.log('Hello');

//********Understanding callback HELL ****/

const cart = ['shirt','jersey'];

api.createOrder(cart , function (){
    api.proceedToPayement(
        function(){
            api.showOrderSummaryPage(
                function(){
                   api.updateWallet();
                });
        
        })
})

// //problems : 
// 1. Callback hell 
// 2. Inersion of control 


