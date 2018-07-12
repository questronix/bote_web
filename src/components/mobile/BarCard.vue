<template>
  <div class="bar-card">
    <img :src="this.barsdata">
    <div class="bars-text"> <slot> </slot> </div>
  </div>
</template>

<script>
  export default {
    props: ['barsdata']
  }
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
</script>

<style>
  .bar-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
