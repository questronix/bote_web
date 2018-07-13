<template>
    <div id="profile">
    <profile-header :user='user'></profile-header>
    <navbar-profile :user='user'></navbar-profile>
    </div>   
</template>

<script>

  import Slideout from 'vue-slideout'
  import ProfileHeader from '../../../components/mobile/ProfileHeader.vue'
  import NavbarProfile from '../../../components/mobile/NavbarProfile.vue'
  import Api from '../../../lib/Api.js';
  import Storage from '../../../lib/Storage';

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
    mounted(){
      this.viewUserInfo();
    },

    data: function(){
      return{
        user:{

        },
      }
    },
    methods: {
    viewUserInfo(){
          let session = Storage.getKey('access-token');
          Api.get(`/profile/me`, {                        
                  'x-access-token': session.token,                
          })
          .then(data=>{
                  let user=JSON.parse(data.body);
                  console.log(JSON.parse(data.body));
                  
                  this.user=(user);
                  console.log(this.user.user);
                  
          })
          .catch(error=>{
                  console.log(error);
          })
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

