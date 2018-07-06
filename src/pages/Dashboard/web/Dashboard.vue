<template>
  <div id="dashboard">
    
    <nav-bar isLoggedIn> </nav-bar>
    <main-content> </main-content>
    
  </div>
</template>

<script>

import Api from '../../../lib/Api.js';

  export default{
    name: 'dashboard',
    data: function(){
      return{
        isLoggedIn: true
      }
    }
  }
</script>