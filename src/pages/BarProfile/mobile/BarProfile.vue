<template>
    <div id="barProfile">
    <bar-profile-header url="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg">Valkyrie Manila</bar-profile-header>
    <bar-profile-item />
    <bar-profile-item />
    <bar-profile-item />
    <bar-profile-item />
    <bar-profile-item />
    <bar-profile-item />
    </div>
</template>

<script>
import BarProfileHeader from '../../../components/mobile/BarProfileHeader.vue'
import BarProfileAlert from '../../../components/mobile/BarProfileAlert.vue'
import BarProfileItem from '../../../components/mobile/BarProfileItem.vue'


export default {
  components: {
    BarProfileHeader,
    BarProfileAlert,
    BarProfileItem,
  }
}
</script>

<style>
body {
    background: #212121;
    font-family: 'Montserrat', sans-serif;
    background-repeat: no-repeat;
}
body,html {
  margin: 0;
  height: 100%;
}

</style>
