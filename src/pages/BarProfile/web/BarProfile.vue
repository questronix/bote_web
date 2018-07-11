<template>
  <div id="barprofile">
    <nav-bar isLoggedIn> </nav-bar>
    <main-content> </main-content>
  </div>
</template>

<script>
import Api from '../../../lib/Api.js';

  export default{
    name: 'barprofile',
    data: function(){
      return{
        isLoggedIn: true
      }
    }
  }
</script>