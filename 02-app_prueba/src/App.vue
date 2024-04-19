<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- <Counter title="Entrada"></Counter> -->
  <!-- <Counter :start="15"></Counter> -->
  <!-- <Counter></Counter> -->
 
    <Indecision></Indecision>
</template>

<script>

// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision'

export default {
  name: 'App',
  components: {
    // Counter
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
