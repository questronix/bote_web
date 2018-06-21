<template>
  <div v-bind:src="url" class="bar-card">
    <img :src="url"/>
    <div class="bars-text"> <slot> </slot> </div>
  </div>
</template>

<script>
  export default {
    props: ['url']
  }
</script>

<style scoped>
  .bar-card {
    height: 30vh;
    width: 100%;
    background-color: #424242;
    position: relative;
    overflow: hidden;
  }
  .bar-card img{
    filter: brightness(0.5);
    width: 100%;
  }
  .bars-text {
    position: absolute;
    color: white;
    font-size: 1.75em;
    font-weight: bold;
    letter-spacing: 6px;
    bottom: 10px;
    left: 10px;
  }
</style>
