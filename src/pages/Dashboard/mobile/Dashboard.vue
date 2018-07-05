<template>
  <div>
    <Navbar/>
    <BarCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIy-Yo2rTTnU2Zx5q8zg5Fsb6MoqSy3DWIb9srwRH9GK6ZNdsMw">TOP RATED BARS</BarCard>
    <BarCard url="https://cdn.cnn.com/cnnnext/dam/assets/170522163914-highest-bars-asia-bridge-bar-kuala-lumpur.jpg">NEAREST BARS</BarCard>
    <BarCard url="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1511276981/the-roof-at-public-hotel-new-york-city-ROOF1117.jpg?itok=4PTTAf3C">CHEAPEST BARS</BarCard>
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
