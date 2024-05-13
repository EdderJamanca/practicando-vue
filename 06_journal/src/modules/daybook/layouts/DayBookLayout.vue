<template>
    <Navbar />

    <div  v-if="isLoading"
        class="row justify-content-md-center ">
        <div class="col-12 alert alert-info text-center mt-5">
            Espere por favor 
            <h3 class="mt-2">
              <i class="fa-solid fa-rotate"></i>
            </h3>
        </div>
    </div>

    <template v-else>
      <div class="d-flex">
          <div class="col-4">
              <EntryList />
          </div>
          <div class="col">
              <router-view></router-view>
          </div>
      </div>
    </template>
</template>

<script>

// import { defineAsyncComponent } from 'vue';
import { defineAsyncComponent } from 'vue';
import { mapActions,mapState } from 'vuex';
// import EntryList from '../components/EntryList.vue';
  
  export default {
    components:{
        Navbar:defineAsyncComponent(()=>import('../components/Navbar.vue')),
        EntryList:defineAsyncComponent(()=>import('../components/EntryList.vue'))
    },
    methods:{
        ...mapActions('journal',['loadEntries'])
    },
    computed:{
        ...mapState('journal',['isLoading'])
    },
    created(){
      const datos=  this.loadEntries()
      console.log('ingresar o ver los datos 1111111',datos)
    }
  }
</script>

<style>
.fa-rotate{
   transform: rotate(45deg);
   animation: rotateAnimation 2s infinite linear;
}

@keyframes rotateAnimation {
    /* Especifica la transformación en diferentes puntos de la animación */
    from {
        transform: rotate(0deg); /* Rotación inicial */
    }
    to {
        transform: rotate(360deg); /* Rotación completa (una vuelta completa) */
    }
}
</style>