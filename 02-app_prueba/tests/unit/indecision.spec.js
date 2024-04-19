import { shallowMount } from "@vue/test-utils";

import Indecision from '@/components/Indecision.vue'

describe('indecision componente',()=>{

    let wrapper;
    let clgSpy;
    global.fetch=jest.fn(()=>Promise.resolve({json:()=>Promise.resolve(
        {
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif"
        }
    )}));

    beforeEach(()=>{
        wrapper= shallowMount(Indecision);
        clgSpy=jest.spyOn(console,'log');

        jest.clearAllMocks();
    })

    // test('debe de hacer match con el snapshot',()=>{
        
    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    // aqui se utilizara una tecnica spiar
    test('escribir en el input no debe de disparar nada (console.log)', async ()=>{
     
        // console.log(wrapper)
        const getAnswerSpy=jest.spyOn(wrapper.vm,'getAnswer');

        const input=wrapper.find('input');
        await input.setValue('Hola mundo');
        expect(clgSpy).toHaveBeenCalledTimes(1);

        expect(getAnswerSpy).not.toHaveBeenCalled();

    })

    test('escribir el simbolo de "?" debe de disparar el getAnswer',async()=>{

        const getAnswerSpy=jest.spyOn(wrapper.vm,'getAnswer');

        const input=wrapper.find('input');
        await input.setValue('Hola mundo ?');
        // expect(clgSpy).toHaveBeenCalledTimes(1);

        expect(getAnswerSpy).toHaveBeenCalledTimes(1);


    })

    test('pruebas en getAnswer',async()=>{
        await wrapper.vm.getAnswer();

        const img =wrapper.find('img');
        // console.log(wrapper.vm.image)
        // console.log(wrapper.vm.answer)
        
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif');
        expect(wrapper.vm.answer).toBe('si!')
    })

    test('prueba en getAnswer - Fallo en el API',async()=>{
        
        fetch.mockImplementationOnce(()=>Promise.reject('API is down'));
        await wrapper.vm.getAnswer();
        const img =wrapper.find('img');
        
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API');

    })
})