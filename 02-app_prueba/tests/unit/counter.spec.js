
// npm run test:unit -- -u   para actualizar e snapshots

import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter.vue"

describe('Counter Component',()=>{
    let wrapper = shallowMount(Counter);
    // test('debe de hacer match con el snapshot',()=>{

    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto counter',()=>{

        // const wrapper = shallowMount(Counter);

        const h1=wrapper.find('h1');
        console.log(h1.text())

        expect(h1.text()).toBe('Counter')
    })

    test('el valor por defecto debe de ser 100 en el p',()=>{
        // wrapper

        // const wrapper=shallowMount(Counter);

        const ptags=wrapper.find('[data-testid="counter"]').text();

        expect(ptags).toBe('101')
    })

    test('debe establecer el valor por defecto',()=>{
        // console.log(wrapper.)
        const start = wrapper.props('start');

        console.log(typeof start);

        const value =wrapper.find('[data-testid="counter"]').text();
        expect(Number(value)).toBe(start);
    })

    test('debe de incrementar en 1 el valor del contador',async ()=>{

        // const wrapper=shallowMount(Counter);

        const Btns=wrapper.findAll('button');

        await Btns[0].trigger('click');
        await Btns[0].trigger('click');
        await Btns[0].trigger('click');
        
        await Btns[1].trigger('click');
        await Btns[1].trigger('click');
        
        const value =wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe('102');
    })

    test('debe de mostrar los prop title',()=>{
        const title='Hola mundo';
        const wrapper=shallowMount(Counter,{
            props:{
                title:title,
                start:'5'
            }
        });

        console.log(wrapper.html());

        expect(wrapper.find('h1').text()).toBe(title);

    })

})