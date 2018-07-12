<template>
  <div id="login">
    <img src="/static/img/logo.png">
    <h1>Sign in</h1>
    <span v-if="wrongCredentials" id="errorLogin"> 
      Username and Password do not match. Please try again!
    </span>
    <form @submit.prevent="login">
      <div class="input-field col s6">
        <i class="material-icons prefix">account_circle</i>
        <input v-model="username" id="icon_prefix1" type="text" class="validate" placeholder="Username" required>
      </div>
      <div class="input-field col s6">
        <i class="material-icons prefix">lock</i>
        <input v-model="password" id="icon_prefix2" type="password" class="validate" placeholder="Password" required>
      </div>
      <button v-on:click="login" type="submit">Login</button>
    </form>
  </div>
</template>

<script>

import Api from '../../../lib/Api.js';
import Storage from '../../../lib/Storage';

export default {
  data (){
    return {
     wrongCredentials: false,
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
          }else{
            this.wrongCredentials = true;
            this.username = '';
            this.password = '';
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
    padding-top: 15%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
#login img {
  width: 30vh;
  height: 30vh;
}
i {
    position: absolute;
    color: #707070;
    font-size: 30px;
    margin-top: 15px;
    margin-left: 7px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
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
    outline: none;
}
button:hover {
    transition-duration: 0.4s;
    opacity: 1;
    color: white;
}

h1 {
  color: #CD7D0B;  
}
#errorLogin {
  color: #CD7D0B; 
  font-size: 0.825em;
  margin-bottom: 10px;
}
@media only screen and (min-width: 400px) {
  input[type=text], input[type=password] {
    border-radius: 25px;
    width: 45vh;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #424242;
    text-indent: 30px;
    font-weight: bold;
    color: white;
    outline: none;
  }
}

@media only screen and (max-width: 399px) {
  input[type=text], input[type=password] {
    border-radius: 25px;
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #424242;
    text-indent: 30px;
    font-weight: bold;
    color: white;
    outline: none;
  }
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #424242 inset;
    -webkit-text-fill-color: white !important;
}
</style>

