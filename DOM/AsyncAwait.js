//*****How Prmoise used to work  */
// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise resolved well !')
//     },10000)
// })

// function getData(){
//     //JS will not wait promise to be resolved 
//     p.then((res)=>console.log(res))
//     console.log('Bark Bark')
// }

// getData();



//*****Use of await inside async function  */
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved well !');
    },20000)
})


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved well !');
    },40000)
})


async function handlePromise(){
    console.log('Mew Mew')
    //JS was waiting for promise to resolved 
    //Actually , callback suspends the handlePromise() function till the promise resolves
    // and then continues from where it left executing 
    const st = await p1;
    console.log(st);
    console.log('Bark Bark');


    const pt = await p2;
    console.log('Smash');
    console.log(pt);
}

handlePromise();

