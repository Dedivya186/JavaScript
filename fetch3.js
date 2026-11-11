fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>res.json())
.then((data)=>{
    for(i=0;i<data.past_abilities.length;i++){
        console.log(data.past_abilities[i].abilities[i]);
    }
})