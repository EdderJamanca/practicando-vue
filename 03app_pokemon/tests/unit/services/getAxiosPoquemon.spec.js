// import PokemonPage from '@/page/PokemonPage.vue';
import getPokemon from '@/page/services/getAxiosPoquemon';


describe('pokemonApi',()=>{


    test('axios debe de estar configurado con el api de pokemon',()=>{
        // console.log('apipokemon.defaults',getPokemon)
        expect(getPokemon.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});



