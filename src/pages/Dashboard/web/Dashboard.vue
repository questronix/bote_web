<template>
  <div id="dashboard">
    
  <nav-bar> </nav-bar>

    <h1>Dashboard</h1>
  </div>
</template>

<script>
import navigationBar from '../../../components/navigationBar';
import '../../../css/background.css';
import Api from '../../../lib/Api.js';

  export default{
    name: 'dashboard',
    methods: {
      logout: function(){
        Api.post('logout', {
        }).then(data=>{
          console.log(data);
          window.location.href = '/login';
        }).catch(error=>{
          console.log(error);
        });
      
      }
    }
  }
</script>
<style>
  h1{
    color: white;
  }

</style>