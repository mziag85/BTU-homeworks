// Display todos using 

// https://jsonplaceholder.typicode.com/todos

async function todos(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log(data);
        
    }catch{
        console.log("error");
        
    }finally{
        console.log("გამოვიდა!");
        
    }
}
todos();