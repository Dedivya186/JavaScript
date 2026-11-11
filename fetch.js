const URL="https://dummyjson.com/quotes";
fetch(URL).then((res)=>res.json())
.then((res)=>{

        for(i=0;i<res.quotes.length;i++){
            console.log(res.quotes[i].quote)
        }
   } )