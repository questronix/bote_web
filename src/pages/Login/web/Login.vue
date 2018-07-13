<template>
  <div id="loginpage">      
      <nav-bar :isLoggedIn="isLoggedIn"> </nav-bar>
    
        <form @submit.prevent="login" class="container">
            <div class="imgcontainer">
                <br/>
                <br/>
                <br/>
                <br/>
                  
                <h1 class="bote_name center-align orange-text">BOTE</h1>
            </div>
              
            <input class="white-text" id="username" v-model="username" type="text" placeholder="Username or Email Address" required />
            <input class="white-text" id="password" v-model="password" type="password" placeholder="Password" required />

            <div class="remember row">
                <label class="box"> <input type="checkbox" checked="unchecked" name="remember" /> <span></span>Remember me </label>
            </div>
            <div class="row">
                <a type="submit" v-on:click="login" class="col s12 btn-large" id="login_button">LOGIN</a>
            </div>
              
            <div class="row" >
                <span class="psw col s12 right-align"> <a href="#"> Forgot password?</a></span>
            </div>
          </form>
      
    </div>
</template>

<script>
import index from './index.js';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api.js';

export default {
    mounted(){
        this.checkIfLoggedIn();
    },
    data: function(){
                return {
                    username: '',
                    password:'',
                    isLoggedIn: false
                }
        },
        methods: {
            login() {
                Api.post('/login', null, {
                    username: this.username,
                    password: this.password
                }).then(data=>{
                if(data.response.statusCode == 200){
                    Storage.setKey('access-token', data.body);
                    window.location.href = '/dashboard';
                }
                }).catch(error=>{
                console.log(error);
                });
            },
            checkIfLoggedIn(){
                if(Storage.getKey('access-token')){
                    this.isLoggedIn = true;
                }else{
                    this.isLoggedIn = false;
                }
                console.log(this.isLoggedIn);
            }
        }
}

</script>

