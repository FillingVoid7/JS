function one(){
    const username = "Bro";

    function two(){
        const website ="Takeme";
        console.log(username);
    }

    // console.log(website);   //error -> out of local scope 
    two();
}

one();