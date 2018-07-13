<template>
    <div class="error-window">
        <Navbar/>
        <h1> 404 Error </h1> 
    </div>
</template>

<script>
import Navbar from '../../../components/mobile/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style>
body {
  background-color: #212121;
  font-family: 'Montserrat', sans-serif;
}
body, html {
  margin: 0;
  height: 100%;
}
.error-window {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.error-window h1 {
    color: white;
}
</style>