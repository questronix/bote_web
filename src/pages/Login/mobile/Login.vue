<template>
    <div id="login">
    <h1>Sign in</h1>
    <form @submit.prevent="login">
    
    <i class="material-icons">person</i>
    <input type="text" placeholder="Enter username" v-model="username" required>

    <i class="material-icons">lock</i>
    <input type="password" placeholder="Enter password" v-model="password" required>
    <button type="submit">Login</button>
    </form>


    </div>
</template>

<script>

import Api from '../../../lib/Api.js';
import Storage from '../../../lib/Storage';

export default {
  data (){
    return {
     username: '',
     password: ''
    }
  },
  methods: {
    login() {

        Api.post('/mobile/login', null, {
          username: this.username,
          password: this.password
        }).then(data=>{
          if(data.response.statusCode == 200){
            Storage.setKey('access-token', data.body);
            window.location.href = '/mobile/dashboard';
          }
        }).catch(error=>{
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
body {
  background: #212121;
  font-family: 'Montserrat', sans-serif;
}
body, html {
  margin: 0;
  height: 100%;
}
#login{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

}
i {
    position: absolute;
    color: #707070;
    font-size: 30px;
    margin-top: 15px;
    margin-left: 7px;
}

button {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #f2f2f2;
    width: 60%;
    border-radius: 25px;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background-color: #CD7D0B;
    opacity: 0.8;
    background-repeat: no-repeat;
}
button:hover {
    transition-duration: 0.4s;
    opacity: 1;
    color: white;
}

h1 {
  color: #CD7D0B;  
  margin-top: 300px;
  text-align: center;
}
input[type=text], input[type=password] {
  border-radius: 25px;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #424242;
  text-indent: 30px;
}

</style>

