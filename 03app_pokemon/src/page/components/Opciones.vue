<template>
  <div class="options-container">
      <ul>
        <li v-for="pokemon in pokemos"
           :key="pokemon.id"
           @click="$emit('selectionPokemon',pokemon.id)"
           >
           {{ pokemon.name }}
        </li>
      </ul>
  </div>
</template>

<script>

export default {
    props: {
        pokemos: {
            type:Array,
            required:true
        }
    },
    methods: {

    }

}

</script>

<style>
/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>