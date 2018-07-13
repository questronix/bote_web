<template>
    <div id="inbox">
        <Navbar />
        <inbox-card />
        <inbox-card />
        <inbox-card />
        <inbox-card />
        <inbox-card />
        <inbox-card />
    </div>
</template>

<script>

import Navbar   from '../../../components/mobile/Navbar.vue';
import InboxCard   from '../../../components/mobile/InboxCard.vue';
import Api      from '../../../lib/Api.js';
import Storage  from '../../../lib/Storage.js';


export default {
    components: {
      Navbar,
      InboxCard,
    },
    methods: {
        logout: function(event){
            Api.post('/logout', {
                "x-access-token": Storage.getKey('access-token').token
            }, null)
            .then( res=>{
                Storage.deleteKey('access-token');
                Storage.deleteKey('user-details');
                window.location.href = '/mobile/login';
            })
            .catch( error=>{
                console.log(error);
            })
        }
    }
}
</script>

<style>
body {
  background-color: #303030;
  font-family: 'Montserrat', sans-serif;
}
body, html {
  margin: 0;
  height: 100%;
}

</style>

