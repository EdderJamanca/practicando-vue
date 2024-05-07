import { shallowMount } from "@vue/test-utils";
import Imagen from "@/page/components/Imagen"

describe('PikemonPicture componet',()=>{

    test('debe de hacer match con el snapshot',()=>{

        const wrapper=shallowMount(Imagen,{
            props:{
                pokemonId:1,
                showpokemon:false
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('debe de mostrar la imagen oculta y el pokemon 100',()=>{

        const wrapper=shallowMount(Imagen,{
            props:{
                pokemonId:100,
                showpokemon:false
            }
        });

        const [img1,img2]=wrapper.findAll('img');

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)

        expect(img1.classes('hidden-pokemon')).toBe(true);

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');

    })

    test('debe de mostrar el pokemon si showPokemon:true',()=>{

        const wrapper = shallowMount(Imagen,{
            props:{
                pokemonId:100,
                showpokemon:true
            }
        });

        const img1=wrapper.find('img');

        expect(img1.exists()).toBeTruthy();

        expect(img1.classes('hidden-pokemon')).toBe(false);

        expect(img1.classes('fade-in')).toBe(true)

    })
});
