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

export default {
  data (){
    return {
     username: '',
     password: ''
    }
  },
  methods: {
    login() {
        Api.post('login', {
          username: this.username,
          password: this.password
        }).then(data=>{
          console.log(data);
        }).catch(error=>{
          console.log(error);
        });
        //api call
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
body {
  background: linear-gradient( #2A1B43,#5C1C4F);
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
input{
    color: #191921;
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
    background-color: #FF2A60;
    opacity: 0.8;
    background-repeat: no-repeat;
}
button:hover {
    transition-duration: 0.4s;
    opacity: 1;
    color: white;
}

h1 {
  color: #FF2A60;  
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
  background: #AC95A6;
  text-indent: 30px;
}
</style>

