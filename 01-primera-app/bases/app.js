
// opciones de los componentes
// const app= Vue.createApp({
//     template:``,
//     methods:{},
//     watch:{},
//     setup() {}
// })

const app= Vue.createApp({
   template:``,
   data(){
    return {
        quote:"el mundo es muy grande",
        autor:"Juanito"
    }
   },
   methods:{
    changeQuote(event){
        console.log('hola mundo',event);
        this.autor='edder jamanca mendoza';
        this.capitalize()
    },
    capitalize(){
       this.quote=this.quote.toUpperCase()
    }
   }
})


//rederizamos los datos
app.mount('#miApp');