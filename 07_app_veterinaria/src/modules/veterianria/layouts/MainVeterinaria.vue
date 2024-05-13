<template>
        <Navbar></Navbar>
        <router-view></router-view>
</template>

<script>
import { defineAsyncComponent } from 'vue';


export default {
    components:{
        Navbar:defineAsyncComponent(()=>import('../components/Nav.vue'))
    }
}

</script>