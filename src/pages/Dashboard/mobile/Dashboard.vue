<template>
  <div>
    <Navbar/>
    <BarCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIy-Yo2rTTnU2Zx5q8zg5Fsb6MoqSy3DWIb9srwRH9GK6ZNdsMw">TOP RATED BARS</BarCard>
    <BarCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIy-Yo2rTTnU2Zx5q8zg5Fsb6MoqSy3DWIb9srwRH9GK6ZNdsMw">NEAREST BARS</BarCard>
    <BarCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIy-Yo2rTTnU2Zx5q8zg5Fsb6MoqSy3DWIb9srwRH9GK6ZNdsMw">CHEAPEST BARS</BarCard>
  </div>
</template>

<script>
  import Navbar from '../../../components/mobile/Navbar.vue';
  import BarCard from '../../../components/mobile/BarCard.vue';

  export default {
    components: {
      Navbar,
      BarCard
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

</style>
