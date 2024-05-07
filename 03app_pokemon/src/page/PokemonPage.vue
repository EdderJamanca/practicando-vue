<template>
    <h1 v-if="!pokemon">Espere por favor........</h1>
    <div v-else>
        <h1>¿Quien es este pokémon ?</h1>
        <!-- todo: img -->
        <Imagen 
            :pokemonId="pokemon.id" 
            :showpokemon="showPokemon"/>
            
        <Opciones
            :pokemos="pokemonArr"
            @selection-pokemon="checkAnswer"
         />
         
    </div>
    <!-- todo: opciones -->
    <template v-if="showAnswer">
        <h2>{{ message }}</h2>
        <button
            @click="newGame" 
        >
            Nuevo Juego
        </button>
    </template>
</template>


<script>
import Imagen from './components/Imagen.vue';
import Opciones from './components/Opciones.vue';
import getPokemonOptions from './services/getPokemonOptions';

// console.log("hola",getPokemonOptions());
export default {
    components:{
        Opciones,
        Imagen
    },
    data(){
        return { 
            pokemonArr:[],
            pokemon:null,
            showPokemon:null,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions();
            console.log("this.pokemonArr",this.pokemonArr)
            const rndInt = Math.floor(Math.random()*4);
            // console.log("this.pokemonArr[rndInt]",this.pokemonArr[rndInt])
            this.pokemon = this.pokemonArr[rndInt];
        },
        checkAnswer(selectedId){


            if(selectedId == this.pokemon.id){
                this.message =`correcto, ${this.pokemon.name}`
                this.showPokemon=true;
                this.showAnswer =true;
            }else {
                this.message = `Oops, era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showPokemon=false;
            this.showAnswer =false;
            this.pokemonArr =[];
            this.pokemon =null;
            this.mixPokemonArray();
        }
    },
    mounted(){
        this.mixPokemonArray();
    }

}
</script>