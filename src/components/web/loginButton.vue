<template>
  <div id="login" class="flex-container">      
      <a onclick="document.getElementById('id01').style.display='block'" style="width:auto;" id="loginnav">Login</a>
      <div id="id01" class="modal">
          <form @submit.prevent="login" class="modal-content animate">
              <div class="imgcontainer">
                  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
              </div>
              <br />
              <br />
              <h1 class="bote_name">BOTE</h1>
              <br />         
              
              <input v-model="username" type="text" placeholder="Username or Email Address" required />
              <input v-model="password" type="password" placeholder="Password" required />
              <label>
                  <input type="checkbox" checked="unchecked" name="remember" /> Remember me
              </label>
              <button type="submit" class="login_button"> LOG IN </button>
              
              <div class="container" >
                  <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                  <span class="psw"> <a href="#"> Forgot password?</a></span>
              </div>
          </form>
      </div>
    </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';

let loginbutton = Vue.component('login-button', {
  data: function(){
        return {
            username: '',
            password:''
        }
    },
    methods: {
        login() {
            Api.post('login/send', {
                username: this.username,
                password: this.password
            })
            .then(data=>{
                if(data.body.status === 1) window.location.href = '/dashboard';
                else alert(data.body.msg);
            })
            .catch(error=>{
                console.log(error);
            });
            console.log(this.username);
            console.log(this.password);
        }
    }
});

export default loginbutton;

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

<style>
#login {
  align-items: center;
  justify-content: center;
}

#login .flex-container{
  display: flex;
  flex-direction: column;
}

#login #logo_name{
    color:#ff2a60;
    text-align:center;   
}
#login input[type=text], #login input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius:20px;
}

#login button {
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius:25px;
    cursor: pointer;
    width: 100%;
}

#login button:hover {
    opacity: 0.8;
    color: #cd7d0b;
}
#login .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: gray;
}
/* Center the image and position the close button */
#login .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
#login .container {
    padding: 10px;
}
#login .bote_name{
    color:#ff2a60;
    text-align:center;
    font-size:30px;
}



/* The Modal (background) */
#login .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding: 30px;
    
}

/* Modal Content/Box */
#login .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
    padding:20px;
    border-radius:20px;
}

/* The Close Button (x) */
#login .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 30px;
    font-weight: bold;
}
#login .close:hover,
#login .close:focus {
    color: 5c1c4f;
    cursor: pointer;
}
#login .login_button{
    border-radius:10px;
    background-color: #cd7d0b;
}
#login .psw{
        float: right;
        padding-top:20px;
    }

/* Add Zoom Animation */
#login .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: right;
    }
    .cancelbtn {
       width: 100%;
    }
    
}

#loginnav{
  background: none;
  cursor: pointer;
}

</style>