const quotes= [{ quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
{ quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
{ quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
{ quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
];


const app= Vue.createApp({
   
    data(){
      return {
        quotes:quotes,
        newQuote:'Hala mundo'
      }
    },
    methods:{
        addQuote(){
            
            this.quotes.unshift({quote:this.newQuote})
        }
    }

 })
 
 
 //rederizamos los datos
 app.mount('#miApp');