<template>
    <div id="profile">
    <profile-header></profile-header>
    <navbar-profile></navbar-profile>
    </div>   
</template>

<script>

import Slideout from 'vue-slideout'
import ProfileHeader from '../../../components/mobile/ProfileHeader.vue'
import NavbarProfile from '../../../components/mobile/NavbarProfile.vue'
import Api from '../../../lib/Api.js';

$(document).ready(function(){
          $('.tabs').tabs({
        });
      }); 

export default {
  components: {
    Slideout,
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
  height: 100%;
}

</style>

