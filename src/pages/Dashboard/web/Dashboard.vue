<template>
  <div id="dashboard">
    
  <nav-bar isLoggedIn> </nav-bar>
    
    <h1>Dashboard</h1>
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