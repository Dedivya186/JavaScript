fetch("https://dummyjson.com/todos").then((res1)=>res1.json())
.then((res)=>{
    for(i=0;i<=res.todos.length;i++){
        console.log(res.todos[i].todo)
    }   
})