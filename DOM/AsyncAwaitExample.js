// const API_URL = "https://api.github.com/users/FillingVoid7";

// async function handlePromise(){

//     //fetch()=> Response.json() => jsonValue
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
// }

// handlePromise();

//Error Handling 
const API_URL = "https://randomdogcaturl";

async function handlePromise(){
    try{
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    }catch(err){
    console.log(err);
 }
}
 handlePromise();

 //handlePromise().catch((err)=>console.log(err));