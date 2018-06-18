<template>
  <div id="dashboard">
    
    <main>
      
      <ul>
        <li class="home">
          <a href='#'>Home</a>
        </li>  
        <li class="profile">
          <a href='#'>Profile</a>
        </li>  
        <li class="shelf">
          <a href='#'>Shelf</a>
        </li>
        <li class="message">
          <a href='#'>Message</a>
        </li>  
        <li class="logout">
          <a href="#" v-on:click="logout">Log Out</a>
        </li>
        
      </ul>
    </main>

    <h1>Dashboard</h1>
  </div>
</template>

<script>

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
  ul{
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin: 20px;
    font-size: 20px;
    font-weight: bolder;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover{
    color: #ff2a60;
    text-decoration: underline;
  }

  body{
    padding:0;
    font-family: 'Helvetica', sans-serif;
  }
  main{
    
    background-color: #0F0917;
    display: flex;
    justify-content: flex-end;
    text-align: center;
  }

  
  html{
    background: linear-gradient(#221d42, #5c1c4f);
    background-repeat: no-repeat;
    height: 100%
  }
</style>