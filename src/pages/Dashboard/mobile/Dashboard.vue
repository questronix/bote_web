<template>
  <div>
    <Navbar/>
    <BarCard :barsdata="barsdata[0].img_rated">TOP RATED BARS</BarCard>
    <BarCard :barsdata="barsdata[0].img_nearest">NEAREST BARS</BarCard>
    <BarCard :barsdata="barsdata[0].img_cheapest">CHEAPEST BARS</BarCard>
  </div>
</template>

<script>
  import Navbar from '../../../components/mobile/Navbar.vue';
  import BarCard from '../../../components/mobile/BarCard.vue';

  export default {
    data: () => {
      return {
        barsdata: [
          {img_rated: "/static/img/bar1.jpg", img_nearest: "/static/img/bar2.jpg", img_cheapest: "/static/img/bar3.png"}
        ]
      }
    },
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
