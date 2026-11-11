fetch("http://localhost:3000/Products/2",{
    "method":"DELETE"
}).then((res)=>{
    if(res.ok)
    console.log(res.status,res.statusText);

})