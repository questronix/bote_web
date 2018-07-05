<template>
  <div id="loginpage">      
      <nav-bar> </nav-bar>
    
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
                <a type="submit" class="col s12 btn-large" id="login_button">LOGIN</a>
            </div>
              
            <div class="row" >
                <span class="psw col s12 right-align"> <a href="#"> Forgot password?</a></span>
            </div>
          </form>
      
    </div>
</template>

<script>
import index from './index.js';

import Api from '../../../lib/Api.js';
export default {
    data: function(){
                return {
                    username: '',
                    password:''
                }
        },
        methods: {
            login() {
                Api.post('/login/send', {
                    username: this.username,
                    password: this.password
                })
                .then(data=>{
                    console.log(data);
                    if(data.body.status === 1 && data.body.user.status === 1) window.location.href = '/dashboard';
                    else alert(data.body.errors[0].message);
                })
                .catch(error=>{
                    console.log(error);
                });
                console.log(this.username);
                console.log(this.password);
            }
        }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

