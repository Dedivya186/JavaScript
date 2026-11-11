// fetch("http://localhost:3000/Products")
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((data)=>console.log(data))
const URL="http://localhost:3000/Products"
let options=
    {
"method":"post",
"headers":{
    "content-type":"application/json"
},
"body":JSON.stringify({
    
         "id": "3",
      "name": "laptop",
      "price": "80999"
})
    }
fetch(URL,options)
.then((res)=>{
    if(res.ok)
    console.log(res.status,res.statusText);
})

// })
// fetch("http://localhost:3000/Products/2",{
//     "method":"DELETE"
// }).then((res)=>{
//     if(res.ok)
//     console.log(res.status,res.statusText);

// })

//const URL="http://localhost:3000/Products/1"
// let options=
//     {
// "method":"put",
// "headers":{
//     "content-type":"application/json"
// },
// "body":JSON.stringify({
    
       
      
//       "price": "109999"
// })
//     }
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok)
//     console.log(res.status,res.statusText);

// })
// let options=
//     {
// "method":"PATCH",
// "headers":{
//     "content-type":"application/json"
// },
// "body":JSON.stringify({
//     "price":12345
// })
//     }
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok)
//     console.log(res.status,res.statusText);

// })