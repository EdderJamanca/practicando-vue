<template>

   <img v-if="image" :src="image" alt="bg" />
   <div class="bg-dark"></div>

   <div  class="indecision-container">
     <input 
        v-model="quetion"
        type="text" 
        placeholder="Hazme una pregunta">
     <p>Recuerde terminar con un signo de interrogación (?)</p>

     <div v-if="isValidQuetion">
        <h2>{{quetion}}</h2>
         <h1>{{ answer ? answer:'Si, No, ..... pensando' }}</h1>
     </div>
   </div>
</template>

<script>

export default {
    
   data(){
      return {
         quetion:'hola mundo',
         answer:null,
         image:null,
         isValidQuetion:false
      }
   },
   methods:{
       async getAnswer(){

          try{
              this.answer="Pensando.....";
              const { answer, image}= await fetch('https://yesno.wtf/api').then(r =>r.json());
    
    
              this.answer=answer=="yes" ? 'si!':'no!' ;
              this.image=image
          } 
          catch(error){
            console.log('indecisionComponent:',error);
            
            this.answer='No se pudo cargar del API';
            this.image=null;
          }
        }
    },
    watch:{
       quetion(value,oldvalue){
           
           
           this.isValidQuetion=false;

           console.log({value});

           if(!value.includes('?')) return;
           //    realizar peticion https
            this.isValidQuetion=true;
           this.getAnswer();

       }
   }

}

</script>

<style>

 img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>