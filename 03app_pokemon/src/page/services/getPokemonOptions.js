import getPokemon from './getAxiosPoquemon';

const getPokemons=()=>{
    const pokemonsArr=Array.from(Array(650));

    return pokemonsArr.map((_,index)=>index + 1);

}

const getPokemonOptions=async()=>{
    const mixedPokemons=getPokemons().sort(()=>Math.random() - 0.5);

    let pokemons=await getPokemonNames(mixedPokemons.splice(0,4));
  //  console.log("pokemons",pokemons);

   return pokemons;
}

const getPokemonNames = async([a,b,c,d]=[])=>{
 
  const promiseArr=[getPokemon.get(`/${a}`),
          getPokemon.get(`/${b}`),
          getPokemon.get(`/${c}`),
          getPokemon.get(`/${d}`)];
    
  const [dato1,dato2,dato3,dato4]= await Promise.all(promiseArr);
  // console.log("dato1,dato2,dato3,dato4",dato1,dato2,dato3,dato4)
  return [
    {name:dato1.data.name,id:dato1.data.id},
    {name:dato2.data.name,id:dato2.data.id},
    {name:dato3.data.name,id:dato3.data.id},
    {name:dato4.data.name,id:dato4.data.id},
  ]
//   return [{name:da}];
}


export default getPokemonOptions;