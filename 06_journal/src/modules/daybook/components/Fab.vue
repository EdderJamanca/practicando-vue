<template>
    <button
    @click="$emit('on:click')"
     class="btn btn-primary">
        <i class="fa-solid"
        :class="icon"
        ></i>
    </button>
</template>
<script>

export default {
    props: {
        icon:{
            type:String,
            default:'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
  button {
    border-radius: 100%;
    bottom: 20px;
    height: 60px;
    position: fixed;
    right: 20px;
    width: 60px;
  }
</style>