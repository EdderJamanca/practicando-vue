import { shallowMount } from "@vue/test-utils";
// import pokemonPage from "@/page/PokemonPage";

import { pokemons } from "../mocks/pokemons.mock";
import PokemonPage from "@/page/PokemonPage.vue";

describe('Pokemon Component',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=shallowMount(PokemonPage);
    })


    test('debe de hacer match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('debe de llamar mixPokemonArray al montar',()=>{

        const mixPokemonArraySpy=jest.spyOn(
            PokemonPage.methods,'mixPokemonArray');

        const wrapper=shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });

    test('debe de hacer match con el snapshot cuando cargan los pokemons',()=>{

        const wrapper=shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr:pokemons,
                    pokemon:pokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:''
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();

    })

    test('debe de mostrar los componentes de Image y option',()=>{

        const wrapper=shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr:pokemons,
                    pokemon:pokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:''
                }
            }
        });

        const picture = wrapper.find('imagen-stub')
        const options = wrapper.find('opciones-stub')

        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()

        
        expect( picture.attributes('pokemonid') ).toBe('5')

        expect( options.attributes('pokemos') ).toBeTruthy()

    })


    test('prueba con checkAnswer',async()=>{

        const wrapper=shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr:pokemons,
                    pokemon:pokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:''
                }
            }
        });

        console.log("pokemons[0],",pokemons[0])

        await wrapper.vm.checkAnswer(5);

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showAnswer).toBe(true)

        expect(wrapper.find('h2').text()).toBe(`correcto, ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.vm.message).toBe( `Oops, era ${pokemons[0].name}`)
    })

})