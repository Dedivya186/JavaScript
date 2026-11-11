// function order(callback){
//     callback("order placed");
//     shipping((res)=>console.log(res));
   
// }
// function shipping(callback){
//    callback("order shipped");
//     dispatch((res)=>console.log(res));
// }
// function dispatch(callback){
//     callback("order dispatched")
//     delivered((res)=>console.log(res));
// }
// function delivered(callback){
//     callback("order delivered succesfully")
// }
// order((res)=>{
//     console.log(res);

// })

function order(callback){
    callback("order placed");
    
   
}
function shipping(callback){
   callback("order shipped");
    
}
function dispatch(callback){
    callback("order dispatched")
    
}
function delivered(callback){
    callback("order delivered succesfully")
}
order((res)=>{
    console.log(res);
shipping((res)=>{
    console.log(res);
    dispatch((res)=>{
        console.log(res)
        delivered((res)=>console.log(res));
    });
});
})