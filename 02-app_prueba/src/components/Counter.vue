<template>
    <h1>{{computedTitle || 'Counter' }}</h1>
    <!-- <p>{{counter}} <sup>2</sup> ={{counter*counter}}</p> -->
    <!-- esto se ejecuta cada vez que se rederisa el html -->
    <p>{{counter}} <sup>2</sup> ={{getSquareValue()}}</p>
    
    <p data-testid="counter">{{counter}}</p>
    <!-- se ejecuta una sola vez y cuando cambie los datos internos -->
    <!-- <p>{{counter}} <sup>2</sup> ={{squareCounter}}</p> -->

    <div class="btn">
       <button 
         v-on:click="aumentar" 
        class="btn btn-verde text-white"
        > + 1 </button>
        
       <button 
         @click="disminuir" 
        class="btn btn-red text-white"
        > - 1 </button>
    </div>
</template>


<script>
export default {
    props:{
        title:String,
        start:{
            type:Number,
            default:101,
            validator(value){
                return value >100
            }
            // required:true,
        }
    },
    name:'counter',
    data(){
        return {
            counter:this.start
        }
    },
    // 
    methods:{
        getSquareValue(){
            return this.counter*this.counter
        },
        aumentar(){
           this.counter ++;
        },
        disminuir(){
             this.counter --;
        }
    },
    computed:{
        squareCounter(){
             return this.counter*this.counter
        },
        computedTitle(){
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
   .btn{
     margin: 1px 5px;
     border-radius: 4px;
     padding: 5px 8px;
   }

   .btn-verde{
      background:green;
   }
   .btn-red{
    background:red;
   }
   .text-white{
    color:white;
   }
</style>