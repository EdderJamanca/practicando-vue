
import { shallowMount } from "@vue/test-utils";
import pokemonOption from "@/page/components/Opciones";

import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOption Component",()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper=shallowMount(pokemonOption,{
            props:{
                pokemos: pokemons
            }
        })
    });

    test('debe de hacer match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('debe de mostrar las 4 opciones correctamente',()=>{
        const liTags=wrapper.findAll('li');
        // console.log("liTags",liTags)
        expect(liTags.length).toBe(4);

        expect(liTags[0].text()).toBe('pikachu');
        expect(liTags[1].text()).toBe('charmander');
        expect(liTags[2].text()).toBe('venusaur');
        expect(liTags[3].text()).toBe('new');
    })

    test('debe de emitir "selection" con sus respectivos parámetros al hacer click',()=>{
        const [li1,li2,li3,li4]=wrapper.findAll('li');

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selectionPokemon').length).toBe(4);
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5]);
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10]);
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([15]);
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([20]);
    })
})