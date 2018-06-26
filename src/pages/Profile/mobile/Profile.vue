<template>
    <div id="profile">
    <profile-header></profile-header>
    <navbar-profile></navbar-profile>
    <profile-card url="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg">Valkyrie Manila</profile-card>
    <profile-card url="http://poolclub.thepalacemanila.com/Media/uploads/p19mru2gkj7o7ubldmfi2rjks5.jpg">Palace Pool Club</profile-card>
    </div>   
</template>

<script>

import Slideout from 'vue-slideout'
import ProfileCard from '../../../components/mobile/ProfileCard.vue'
import ProfileHeader from '../../../components/mobile/ProfileHeader.vue'
import NavbarProfile from '../../../components/mobile/NavbarProfile.vue'
import Api from '../../../lib/Api.js';

export default {
  components: {
    Slideout,
    ProfileCard,
    ProfileHeader,
    NavbarProfile,

  },
  methods: {
      logout() {
        Api.post('logout', {
        }).then(data=>{
          console.log(data);
        }).catch(error=>{
          console.log(error);
        });
      }
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
  height: 50%;
}

</style>

