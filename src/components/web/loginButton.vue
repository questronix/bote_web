<template>
  <div id="login" class="flex-container">      
      <a onclick="document.getElementById('id01').style.display='block'" style="width:auto;" id="loginnav">Login</a>
      <div id="id01" class="modal">
          <form @submit.prevent="login" class="modal-content animate">
              <div class="imgcontainer">
                  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
              </div>
              <br />
              
              <img src="/static/img/bote_logo.png"  >
              <br />         
              
              <input v-model="username" type="text" placeholder="Username or Email Address" required />
              <input v-model="password" type="password" placeholder="Password" required />
              <label class="box"> <input type="checkbox" checked="unchecked" name="remember" /> Remember me </label>
              <button type="submit" class="login_button"> LOGIN </button>
          </form>
      </div>
    </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';
import Storage from '../../lib/Storage';

let loginbutton = Vue.component('login-button', {
  data: function(){
        return {
            username: '',
            password:''
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
html{
    font-family: "Montserrat", "sans-serif"; 
}
#login {
  align-items: center;
  justify-content: center;
  
}

#login .flex-container{
  display: flex;
  flex-direction: column;
  
}

#login #logo_name{
    color:#e48909;
    text-align:center;   
}
#login input[type=text], #login input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #e48909;
    box-sizing: border-box;
    border-radius:20px;
    color:#e48909;
}

.box{
    float:left;
    font-size:10px;
}
#login button {
    color: #e48909;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius:25px;
    cursor: pointer;
    width: 100%;
}

#login button:hover {
    opacity: 0.8;
    
}

/* Center the image and position the close button */
#login .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
#login .container {
    padding: 25px;
    
}
#login .bote_name{
    color:#e48909;
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
    background-color: #303030;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    width: 50%; /* Could be more or less, depending on screen size */
    padding:20px;
    border-radius:20px;
}

/* The Close Button (x) */
#login .close {
    position: absolute;
    right: 30px;
    padding:0;
    color: white;
    font-size: 20px;
    font-weight: bold;
}
#login .close:hover{
    color:#e48909;
    cursor:pointer;
}
#login .close:focus {
    color: 5c1c4f;
    cursor: pointer;
}

/* Navigation Login Button */
#login .login_button{
    border-radius:20px;
    color:white;
    background-color: #e48909;
    font-size: 17px;
    font-weight: bold;
    
}
#login .psw{
        font-size: 2px; 
        padding:0;
        margin:0;
        align:center;
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
    
}

#loginnav{
  background: none;
  cursor: pointer;
  padding:0px;
  padding-right:10px;
  
}


</style>