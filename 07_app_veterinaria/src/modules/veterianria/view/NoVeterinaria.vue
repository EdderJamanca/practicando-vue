<template>
    <div class="card card-md">
        <div class="card-body">
            <div>
                <p> * Escribe un programa que muestre por consola (con un print) los
                    * números de 1 a 100 (ambos incluidos y con un salto de línea entre
                    * cada impresión), sustituyendo los siguientes:</p>
                 <ul>
                    <li v-for="item of arrayData" :key="item.id">{{ item.id }} -> {{ item.label }}</li>
                 </ul>
            </div>
            <div>
                <p>
                    * Escribe una función que reciba dos palabras (String) y retorne
                    * verdadero o falso (Bool) según sean o no anagramas.
                    * - Un Anagrama consiste en formar una palabra reordenando TODAS
                    *   las letras de otra palabra inicial.
                    * - NO hace falta comprobar que ambas palabras existan.
                    * - Dos palabras exactamente iguales no son anagrama.
                </p>
                 <div>
                    <input type="text" v-model="palabra2"/>
                    <input type="text" v-model="palabra1"/>

                    <button 
                    type="button"
                    @click="anagrama"
                    class="btn btn-primay">ejecutar</button>
                    <p v-show="repuesta">respuest:true</p>
                    <p v-show="!repuesta">respuest:falso</p>
                 </div>
            </div>
            <div>
                /*
                * Escribe un programa que imprima los 50 primeros números de la sucesión
                * de Fibonacci empezando en 0.
                * - La serie Fibonacci se compone por una sucesión de números en
                *   la que el siguiente siempre es la suma de los dos anteriores.
                *   0, 1, 1, 2, 3, 5, 8, 13...
                */
                <p>{{ arr }}</p>
            </div>
            <div>
                /*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
                <p>{{ arrPrimo }}</p>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
    data(){
       return {
        arrayData:[],
        palabra2:"",
        palabra1:"",
        repuesta:"",
        arr:[],
        arrPrimo:[]
       }
    },
    methods:{
        fizzbuzz(){
            let data = [];
            for (let i = 1; i <= 100; i++) {
                if (i % 15 == 0) {
                data.push({ id: i, label: 'fizzbuzz' });
                } else if (i % 5 == 0) {
                data.push({ id: i, label: 'buzz' });
                } else if (i % 3 == 0) {
                data.push({ id: i, label: 'fizz' });
                }
            }
            this.arrayData= data;
        },
        anagrama(){
            console.log('ddsll',this.palabra2,this.palabra1,this.palabra1.length != this.palabra2.length,this.palabra1.length, this.palabra2.length)
            if(this.palabra1.length != this.palabra2.length){
                this.repuesta=false;
                return 
            }
            const palabraOrdenada1 = this.palabra1.toLowerCase().split('').sort().join();
            const palabraOrdenada2 = this.palabra2.toLowerCase().split('').sort().join();

            console.log('palabraOrdenada2',palabraOrdenada2,palabraOrdenada1 !== palabraOrdenada2)
            if (palabraOrdenada1 !== palabraOrdenada2) {
                this.repuesta = false;
                return
            }
            
            this.repuesta = true;
        
            console.log('iiiiii',this.repuesta )
        },
        Fibonacci(){
            let arra=[0,1];

            for(let i=0;i<47;i++){
                if(i==0){continue}
                arra.push(arra[i-1]+arra[i])
            }
            this.arr=arra;
        },
        esPrimo(numero) {
            // Los números menores o iguales a 1 no son primos
            if (numero <= 1) {
                return false;
            }
            // Iteramos desde 2 hasta la mitad del número
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    // Si el número es divisible por algún otro número que no sea 1 o él mismo, no es primo
                    return false;
                }
            }
            // Si no encontramos ningún divisor diferente de 1 y el propio número, entonces es primo
            return true;
        },
        resulPrimo(){
            for (let i = 1; i <= 100; i++) {
                if (this.esPrimo(i)) {
                    // console.log(i);
                    this.arrPrimo.push(i)
                }
            }
        }
    },
    created(){
        
    this.fizzbuzz();
    this.Fibonacci();
        this.resulPrimo();
    }

   }
</script>